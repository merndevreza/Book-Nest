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
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com', 
        },
      ],
    },
};

export default nextConfig;
