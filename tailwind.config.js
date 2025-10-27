const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['carbon', 'lucide']),
    }),
  ],
}
