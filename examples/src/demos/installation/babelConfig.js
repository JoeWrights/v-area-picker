module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'v-area-picker',
        customName: name => {
          return `v-area-picker/dist/${name}`
        }
      },
      'v-area-picker'
    ]
  ]
}
