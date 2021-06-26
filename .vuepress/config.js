module.exports = {
    title: 'Documentation',
    description: `Documentation of various projects of xopun.com`,
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Cloudcone', link: '/cloudcone/' },
        { text: 'Vuepress', link: '/vuepress/' },
      ],
      sidebar: {
        '/cloudcone/': [
          {
            title: 'Cloudcone',
            collapsable: false,
            children: [
              '',  
              '01-installing-the-os', 
              
              
            ]
          }
        ],

        '/vuepress/': [
            {
              title: 'Vuepress',
              collapsable: false,
              children: [
                '01-getting-started',
                '02-deployment',
                
              ]
            }
          ],
      },
      
    },
    dest: 'public'
  }