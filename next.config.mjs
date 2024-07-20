/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co', 
        },
        {
          protocol: 'https',
          hostname: 'gyqsjwvpydv7dr9h.public.blob.vercel-storage.com', 
        },
      ],
    },
};

export default nextConfig;
