export default defineAppConfig({
  title: 'V2F',
  description: 'V2F.NET',
  image: 'https://www.v2f.net/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
