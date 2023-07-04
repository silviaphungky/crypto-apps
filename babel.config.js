module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            icons: './src/components/icons',
            screens: './src/screens',
            utils: './src/utils',
            hooks: './src/hooks',
            services: './src/services',
            constants: './src/constants',
          },
        },
      ],
    ],
  }
}
