/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'digitikiapi.aarawan.com',
            },
        ],
    },
};

export default nextConfig;
