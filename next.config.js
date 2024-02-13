/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dcvqnyvvt/**',
          },
        ],
      },
}

module.exports = nextConfig

// module.exports = {
//     pageExtensions: [''],
//   }