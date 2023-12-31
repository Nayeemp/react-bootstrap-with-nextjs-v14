/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1vy2g8p6qsw6.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d318e0jv36oqd2.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
