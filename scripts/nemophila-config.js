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

