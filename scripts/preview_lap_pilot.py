"""Serve the existing quiz with a reviewed CoderLAP sample bank on a separate origin."""
import argparse
import json
import re
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]


class PilotServer(ThreadingHTTPServer):
    # On Windows, address reuse can let two previews compete for the same port.
    allow_reuse_address = False


class PilotHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self):
        path = urlsplit(self.path).path
        if path == "/questions.js":
            pilot = json.loads(self.server.bank_path.read_text(encoding="utf-8"))
            text = "const QUESTIONS = " + json.dumps(pilot["questions"], ensure_ascii=False) + ";\n"
            for lang, labels in pilot["ui"].items():
                text += f"Object.assign(I18N.{lang}, " + json.dumps(labels, ensure_ascii=False) + ");\n"
            self.send_text(text, "text/javascript; charset=utf-8")
        elif path in ("/", "/index.html"):
            text = (ROOT / "index.html").read_text(encoding="utf-8")
            text = text.replace("CoderQuiz – DSGVO LAP Applikationsentwicklung", "CoderQuiz – CoderLAP preview")
            text = re.sub(r'<p class="sources">.*?</p>', '<p class="sources"><span data-i18n="sourcesLabel"></span> <a href="https://coderlap.com">CoderLAP</a></p>', text)
            self.send_text(text, "text/html; charset=utf-8")
        else:
            target = Path(self.translate_path(self.path)).resolve()
            asset = target.is_relative_to((ROOT / "assets").resolve()) and target.is_file()
            if path in ("/app.js", "/i18n.js", "/style.css", "/LICENSE") or asset:
                if self.command == "HEAD":
                    super().do_HEAD()
                else:
                    super().do_GET()
            else:
                self.send_error(404)

    def do_HEAD(self):
        self.do_GET()

    def send_text(self, text, content_type):
        body = text.encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--bank", choices=("lap-pilot", "lap-programming-1"), default="lap-pilot")
    parser.add_argument("--port", type=int)
    args = parser.parse_args()
    port = args.port if args.port is not None else (8770 if args.bank == "lap-pilot" else 8771)
    server = PilotServer(("127.0.0.1", port), PilotHandler)
    server.bank_path = ROOT / "examples" / f"{args.bank}.json"
    print(f"CoderLAP {args.bank}: http://127.0.0.1:{port} — Ctrl+C to stop", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
