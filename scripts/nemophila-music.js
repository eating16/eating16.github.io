// Configure Meting's public API on music pages without editing the theme.
hexo.extend.filter.register('after_render:html', function (html) {
  const api = this.theme.config.music && this.theme.config.music.meting_api;
  if (!api || typeof html !== 'string' || !html.includes('<meting-js')) return html;
  const safeApi = String(api).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  return html.replace(/<meting-js\b(?![^>]*\bapi\s*=)/g, '<meting-js api="' + safeApi + '"');
}, 10);
