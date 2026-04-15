/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH
const basePath =
  typeof envBasePath === 'string'
    ? envBasePath
    : process.env.GITHUB_ACTIONS === 'true' && repoName
      ? `/${repoName}`
      : ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
