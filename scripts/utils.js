const path = require('path')
const address = require('address')

const pathResolve = dir => path.resolve(__dirname, dir)

const genePath = dir => path.join(__dirname, '..', dir)

const getHost = () => address.ip()

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  pathResolve,
  genePath,
  getHost,
  isProduction
}
