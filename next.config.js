/** @type {import('next').NextConfig} */

const nextConfig = {
        i18n: {
            locales: ['en', 'fr'],
            defaultLocale: 'en',
            domains: [
                {
                    domain: 'alainwebportfolio.app/',
                    defaultLocale: 'en',
                }
            ]
        }
}

module.exports = nextConfig