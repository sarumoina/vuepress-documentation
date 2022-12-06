module.exports = {
    title: 'Documentation',
    description: `Documentation of various projects of xopun.com`,
    markdown: {
      lineNumbers:true
    },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Cloudcone', link: '/cloudcone/' },
        { text: 'Vuepress', link: '/vuepress/' },
        { 
          text: 'Tutorials', 
          ariaLabel: 'Tutorials',
          items: [
            {text: 'Javascript', link:'/tutorials/javascript/'},
            {text: 'Nextjs', link:'/tutorials/nextjs/'},
            {text: 'elm', link:'/tutorials/elm/'}
          ]
        },
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
              '06-github-ssh-keys-setup',
              '07-environment-variables',
              '08-bash-script-for-upload',
              '09-ssl-via-lets-encrypt', 
              '10-cron',
              '11-copy-files-via-scp',
              '12-installing-php',
              '13-installing-mysql8.0',
              '14-installing-mariadb',
              '15-installing-mongodb',
              '16-installing-symfony',
              '17-jekyll'

              
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
        
        

        '/tutorials/javascript/': [
          {
            title:'Tutorials/Javascript',
            collapsable:true,
            children: [
              '',
              'arrow-functions.md',
              'javascript-destructuring.md'
            ]
          }
        ],

        '/tutorials/elm/': [
          {
            title: 'Tutorials/elm',
            collapsable: true,
            children: [
              '',
              '01-installation'
            ]
          }
        ],

        '/tutorials/nextjs/': [
          {
            title:'Tutorials/Nextjs',
            collapsable:true,
            children: [
              '',
              'nextjs-authentication.md'
            ]
          }
        ],

        '/jekyll/':[
          {
            title: 'Jekyll',
            collapsable: false,
            children: [
              '01-installing-jekyll',
              '02-liquid-template',
            ]
          }
        ]
      },
      
    },
    dest: 'public',
    plugins: {
      'sitemap': {
        hostname: 'https://documentation.xopun.com'
      },
    }
  }