module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  jest: {
    configure: {
        globals: {
            "CONFIG": true
        }
    }
}
};
