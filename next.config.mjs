/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "http2.mlstatic.com", // Mercado Libre logos
      "randomuser.me", // For testimonial avatars
      "cdn.company-logos.com", // Generic company logo hosting
      "github.com", // Github profile pictures
      "linkedin.com", // LinkedIn profile pictures
      "images.ctfassets.net",
      "media.licdn.com",
    ],
  },
};

export default nextConfig;
