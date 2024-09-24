/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // swcMinify: false,  // Disabling SWC minification to fallback to Babel in case of SWC issues
    images: {
        domains: ["encrypted-tbn0.gstatic.com"],
        // domains: ["a.storyblok.com/f/191576"],
    },
};

export default nextConfig;
