// Configure the QQ-compatible Meting service without editing the theme.
hexo.extend.filter.register('after_render:html', function (html) {
  const music = this.theme.config.music || {};
  if (!music.meting_api || typeof html !== 'string' || !html.includes('<meting-js')) return html;
  const escapeAttribute = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  html = html.replace(/<meting-js\b(?![^>]*\bapi\s*=)/g,
    '<meting-js api="' + escapeAttribute(music.meting_api) + '"');

  if (music.meting_js) {
    let loaderAdded = false;
    html = html.replace(/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/meting@2\/dist\/Meting\.min\.js"><\/script>/g, () => {
      // The original theme includes Meting in both the head and music layout.
      if (loaderAdded) return '';
      loaderAdded = true;
      return '<script src="' + escapeAttribute(music.meting_js) + '"></script>';
    });
  }
  if (!html.includes('id="eating-music-style"')) {
    const stylesheet = escapeAttribute(this.config.root + 'css/music-custom.css');
    html = html.replace('</head>', '<link id="eating-music-style" rel="stylesheet" href="' + stylesheet + '">\n</head>');
  }
  return html;
}, 10);
