
{import('next').NextConfig} 
const nextConfig = {
	images: {
	  domains: ["cdn.pixabay.com","icons8.com"],
	},
	experimental: {
	  serverComponentsExternalPackages: ['knex', 'pg'],
	},
  };
  
  export default nextConfig;
  