module.exports = {
    title: 'Documentation',
    description: `Documentation of various projects of xopun.com`,
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Cloudcone', link: '/guide/' },
        { text: 'Vuepress', link: '/vuepress/' },
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

        '/vuepress/': [
            {
              title: 'Vuepress',
              collapsable: true,
              children: [
                '',
                
              ]
            }
          ],
      },
    },
    dest: 'public',
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/active-header-links'
    ]
  }