module.exports = {
  globDirectory: './',
  globPatterns: [
    '**/*.{html,js,css,png,svg,jpg,gif,json,woff,woff2,eot,ttf,ico}'
  ],
  swDest: 'sw.js',
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/
  ],
  runtimeCaching: [{
    urlPattern: /^https:\/\/fonts\.googleapis\.com/,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'google-fonts-stylesheets'
    }
  }, {
    urlPattern: /^https:\/\/fonts\.gstatic\.com/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'google-fonts-webfonts',
      expiration: {
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      }
    }
  }, {
    urlPattern: /^https?:\/\/unpkg\.com/,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'unpkg-cdn'
    }
  }]
};
