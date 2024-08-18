import { defineConfig } from 'vitepress';

const viteConfig = () => {
  return {
    server: {
      host: '0.0.0.0',
      port: 3000
    }
  };
};

const nav = () => {
  return [
    { text: '前端', link: '/docs/frontend/javascript/typeConversion' },
    { text: '计算机', link: '/docs/computerScience/twosComplement' },
    { text: '数据结构', link: '/docs/dataStructures/arrayAndLinkedList' },
    { text: '网络', link: '/docs/network/connectionManagement' }
  ];
};

const sideBar = () => {
  return {
    '/docs/frontend': [
      {
        text: 'JS',
        items: [
          { text: '类型转换', link: '/docs/frontend/javascript/typeConversion' },
          { text: 'valueOf和toString', link: '/docs/frontend/javascript/valueOfAndToString' }
        ],

        collapsed: true
      },
      {
        text: 'CSS',
        items: [],
        collapsed: true
      }
    ],
    '/docs/computerScience/': [
      {
        text: '计算机组成原理',
        items: [{ text: '补码', link: '/docs/computerScience/twosComplement' }]
      }
    ],
    '/docs/dataStructures/': [
      {
        text: '数据结构',
        items: [{ text: '数组和链表', link: '/docs/dataStructures/arrayAndLinkedList' }]
      }
    ],
    '/docs/network/': [
      {
        text: '网络',
        items: [{ text: '三次握手和四次挥手', link: '/docs/network/connectionManagement' }]
      }
    ]
  };
};

export default defineConfig({
  vite: viteConfig(),
  lang: 'zh-CN',
  title: 'Star Doc',
  description: 'Adventure',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  cleanUrls: true,
  // srcDir: './docs',
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    nav: nav(),

    sidebar: sideBar(),

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: '在 GitHub 上编辑此页面'
    // },

    // footer: {
    //   message: '基于 MIT 许可发布',
    //   copyright: `版权所有 © 2019-${new Date().getFullYear()} 尤雨溪`
    // },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
});
