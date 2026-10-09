// Hexo deep-merges theme settings. Remove explicitly disabled demo entries
// after that merge, while leaving every upstream theme file unchanged.
hexo.extend.filter.register('before_generate', function () {
  if (this.config.theme !== 'hexo-theme-nemophila') return;
  const prune = (entries) => {
    if (!entries || typeof entries !== 'object') return;
    for (const key of Object.keys(entries)) {
      if (entries[key] === null) delete entries[key];
    }
  };
  prune(this.theme.config.contact);
  for (const item of Object.values(this.theme.config.menu || {})) {
    if (item && typeof item === 'object') prune(item.submenu);
  }
}, 1);

// The upstream navigation always renders RSS; remove it when disabled.
hexo.extend.filter.register('after_render:html', function (html) {
  if (this.config.theme !== 'hexo-theme-nemophila' ||
      !this.theme.config.rss || this.theme.config.rss.enable !== false ||
      typeof html !== 'string') return html;
  return html.replace(/<a\b[^>]*\bclass="[^"]*\bnavlink-rss\b[^"]*"[^>]*>[\s\S]*?<\/a>\s*/g, '');
}, 10);
