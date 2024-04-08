
{import('next').NextConfig} 
const nextConfig = {
	images: {
	  domains: ["cdn.pixabay.com","images.unsplash.com"],
	},
	experimental: {
	  serverComponentsExternalPackages: ['knex', 'pg'],
	},
  };
  
  export default nextConfig;
  