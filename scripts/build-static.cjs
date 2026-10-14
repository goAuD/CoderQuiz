// Publish only the static site, never the repository or preview server.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);

function loadBanks() {
  const manifest = JSON.parse(read('quiz-banks.json'));
  const seen = new Set();
  return manifest.map(entry => {
    if (!/^[a-z0-9-]+$/.test(entry.id) || seen.has(entry.id)) throw Error('Invalid or duplicate bank ID');
    seen.add(entry.id);
    if (entry.path !== `examples/${entry.id}.json`) throw Error('Unexpected curriculum path');
    const bank = JSON.parse(read(entry.path));
    if (!bank.questions.length || !bank.ui.de || !bank.ui.hu) throw Error(`Empty bank: ${entry.id}`);
    const metadata = {
      id: entry.id,
      questionCount: bank.questions.length,
      topicCount: new Set(bank.questions.map(q => q.topic)).size,
      topicIds: [...new Set(bank.questions.flatMap(q => q.source ? [q.source.topicId] : []))],
      ui: Object.fromEntries(['de', 'hu'].map(lang => [lang, {
        moduleTitle: bank.ui[lang].moduleTitle, subtitle: bank.ui[lang].subtitle,
      }])),
    };
    return { ...entry, bank, metadata };
  });
}

function build(output) {
  // Caller supplies a new directory; never overwrite an arbitrary existing tree.
  fs.mkdirSync(output);
  const write = (file, contents) => {
    const target = path.join(output, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, contents);
  };
  const copyAssets = directory => {
    for (const entry of fs.readdirSync(path.join(root, directory), { withFileTypes: true })) {
      const file = `${directory}/${entry.name}`;
      if (entry.isSymbolicLink()) throw Error(`Unexpected asset symlink: ${file}`);
      if (entry.isDirectory()) copyAssets(file);
      else write(file, fs.readFileSync(path.join(root, file)));
    }
  };
  for (const file of ['app.js', 'i18n.js', 'style.css', 'catalog.js', 'LICENSE', 'favicon.ico', 'apple-touch-icon.png']) {
    write(file, fs.readFileSync(path.join(root, file)));
  }
  copyAssets('assets');
  write('robots.txt', 'User-agent: *\nDisallow: /\n');
  const banks = loadBanks();
  const template = read('index.html');
  const errorPageIcons = [...template.matchAll(/<link rel="(?:icon|apple-touch-icon)"[^>]*>/g)]
    .map(([link]) => link.replace('href="', 'href="/')).join('');
  const navigation = '<a class="site-nav-link" href="./" data-i18n="catalogLink">Pakete</a>';
  const sourceFooter = '<p class="sources"><a href="LICENSE">Apache 2.0</a> · <span data-i18n="sourcesLabel">Quellen:</span> <a data-lap-link href="https://coderlap.com/">CoderLAP</a></p>';
  const frame = template.replace('href="#"', 'href="./"').replace('<!-- catalog navigation -->', navigation);

  for (const { id, bank } of banks) {
    let page = frame.replace(/<title>.*?<\/title>/, `<title>CoderQuiz · ${escapeHtml(bank.ui.de.moduleTitle)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*/, `$1${escapeHtml(bank.ui.de.subtitle)}`);
    page = page.replace(/<p class="sources">.*?<\/p>/, sourceFooter);
    // Package pages are two levels below the shared assets and catalogue.
    page = page.replace(/(href|src)="(?!https?:|#)([^"]+)"/g,
      (match, attribute, url) => url === 'questions.js' ? match : `${attribute}="../../${url === './' ? '' : url}"`);
    write(`quiz/${id}/index.html`, page);
    let data = `const QUIZ_BANK = ${JSON.stringify({ id })};\nconst QUESTIONS = ${JSON.stringify(bank.questions)};\n`;
    for (const lang of ['de', 'hu']) data += `Object.assign(I18N.${lang}, ${JSON.stringify(bank.ui[lang])});\n`;
    write(`quiz/${id}/questions.js`, data);
  }

  const cards = banks.map(({ id, metadata }) => `
        <article class="bank-card" data-bank="${id}">
          <h3>${escapeHtml(metadata.ui.de.moduleTitle)}</h3>
          <p class="bank-description">${escapeHtml(metadata.ui.de.subtitle)}</p>
          <p class="bank-meta">${metadata.questionCount} Fragen · ${metadata.topicCount} Themen · DE / HU</p>
          <a class="bank-open" href="quiz/${id}/"><span class="bank-open-label">Paket öffnen</span><svg class="frame-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg><span class="sr-only">: ${escapeHtml(metadata.ui.de.moduleTitle)}</span></a>
        </article>`).join('\n');
  const content = read('catalog.html').replace('<!-- lap cards -->', cards);
  const home = frame
    .replace(/<!-- page content -->[\s\S]*?<!-- \/page content -->/, content)
    .replace(/<title>.*?<\/title>/, '<title>CoderQuiz · Quizpakete aus dem CoderLAP</title>')
    .replace(/(<meta name="description" content=")[^"]*/, '$1Programmieren und Informatik mit zweisprachigen Quizpaketen aus dem CoderLAP üben.')
    .replace(navigation, navigation.replace('class="site-nav-link"', 'class="site-nav-link" aria-current="page"'))
    .replace(/<p class="sources">.*?<\/p>/, sourceFooter)
    .replace('src="questions.js"', 'src="catalog-data.js"').replace('src="app.js"', 'src="catalog.js"');
  write('index.html', home);
  write('catalog-data.js', `const CATALOG = ${JSON.stringify(banks.map(bank => bank.metadata))};\n`);
  write('404.html', `<!doctype html><html lang="de"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Seite nicht gefunden · CoderQuiz</title>${errorPageIcons}<link rel="stylesheet" href="/style.css"><main class="catalog"><h1>Seite nicht gefunden</h1><p>Diese Seite gibt es nicht. / Ez az oldal nem található.</p><p><a href="/">Quizpakete / Kvízcsomagok</a></p></main></html>\n`);
  return banks.map(bank => bank.metadata);
}

if (require.main === module) {
  const output = path.join(root, 'dist');
  if (fs.existsSync(output)) {
    // Fixed generated target, with an explicit symlink/reparse-point boundary check.
    if (fs.lstatSync(output).isSymbolicLink() || fs.realpathSync(output) !== output) throw Error('Unsafe dist path');
    fs.rmSync(output, { recursive: true });
  }
  const banks = build(output);
  console.log(`Built dist/: ${banks.length} packages, ${banks.reduce((sum, bank) => sum + bank.questionCount, 0)} questions.`);
}
module.exports = { build, loadBanks };
