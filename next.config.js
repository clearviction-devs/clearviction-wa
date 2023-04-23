/** @type {import('next').NextConfig} */

let exportObj = {
  reactStrictMode: true,
}

// @ts-ignore
const isGithubActions = process.env.GITHUB_ACTIONS || false

if (isGithubActions) {
  // @ts-ignore
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  let assetPrefix = `/${repo}/`
  let basePath = `/${repo}`
  exportObj.assetPrefix = assetPrefix
  exportObj.basePath = basePath
  exportObj.images = {
    loader: 'akamai',
    path: '',
  }
}

module.exports = exportObj