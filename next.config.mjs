/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack, path }) => {
        config.module.rules.push({
            test: /\.pdf|.docx$/,
           
            type: 'asset',
            generator: {
                filename: 'static/chunks/[path][name].[hash][ext]'
            },
          
        });

        return config;
    },
};

export default nextConfig;
