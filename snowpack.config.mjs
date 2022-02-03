// snowpack.config.mjs
export default {
  mount: {
    src: '/_dist',
    public: '/'
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  },
  buildOptions: {
    out: 'docs'
  },
  plugins: [
    '@snowpack/plugin-postcss'
  ]
}
