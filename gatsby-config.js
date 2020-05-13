module.exports = {
  siteMetadata: {
    title: 'Demox - Cloud Pak for Applications',
    description: 'Demox - Cloud Pak for Applications',
    keywords: 'ibm,cp4a,carbon',
  },
  plugins: ['gatsby-theme-carbon',
  'gatsby-transformer-json',

{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: 'data',
    path: './src/data'
  },
  resolve: 'gatsby-theme-carbon',
  options: {
    iconPath: './src/images/custom-icon-512.png',
    isSearchEnabled: true,
    repository: {
      baseUrl:
        'https://github.ibm.com/demox/cloudpak-applications/',
      subDirectory: '/',
    },
  },
}
],
pathPrefix: "/demox/cloudpak-applications/",
};
