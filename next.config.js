/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
  images: {
        domains: ['ipfs.io','nftea.infura-ipfs.io','github.com','bafybeihplhfmazxtn7kenp7pcf6rxjligjlhpmiynealcy5k4ilkzrjaji.ipfs.nftstorage.link']
    }
}

module.exports = nextConfig
