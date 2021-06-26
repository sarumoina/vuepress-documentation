module.exports = {
    title: 'Documentation',
    description: `Documentation of various projects of xopun.com`,
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
      ],
      sidebar: {
        '/guide/': [
          {
            title: 'Cloudcone',
            collapsable: false,
            children: [
              '',
              
            ]
          }
        ],
      },
    },
    dest: 'public',
  }