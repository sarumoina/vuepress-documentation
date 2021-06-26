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
              '02-installing-nodejs',
              '03-installing-nginx',
              '04-installing-yarn',
              '05-installing-pm2',
              '06-cloning-repo',
              '07-environment-variables',
              '08-bash-script-for-upload',
              '09-ssl-via-lets-encrypt', 
              '10-cron',
              '11-copy-files-via-scp',
              '12-installing-php',
              '13-installing-mariadb',
              
              
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