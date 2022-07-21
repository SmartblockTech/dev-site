const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack5: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
