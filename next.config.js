// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  swcMinify: false,
  experimental: {
    styledComponents: false
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['media.graphassets.com']
  },
  env: {
    GRAPHQL_TOKEN: process.env.GRAPHQL_TOKEN,
    GRAPHQL_HOST: process.env.GRAPHQL_HOST
  }
})
