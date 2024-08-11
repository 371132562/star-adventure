import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'Star Doc',
  description: 'Adventure',
  cleanUrls: true,
  srcDir: './docs',
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

    nav: [
      { text: '前端', link: '/frontend/javascript/typeConversion' },
      { text: '计算机', link: '/computerScience/twosComplement' },
      { text: '数据结构', link: '/dataStructures/arrayAndLinkedList' },
      { text: '网络', link: '/network/connectionManagement' }
    ],

    sidebar: {
      '/frontend': [
        {
          text: 'JS',
          items: [{ text: '类型转换', link: '/frontend/javascript/typeConversion' }],

          collapsed: true
        },
        {
          text: 'CSS',
          items: [],
          collapsed: true
        }
      ],
      '/computerScience/': [
        {
          text: '计算机组成原理',
          items: [{ text: '补码', link: '/computerScience/twosComplement' }]
        }
      ],
      '/dataStructures/': [
        {
          text: '数据结构',
          items: [{ text: '数组和链表', link: '/dataStructures/arrayAndLinkedList' }]
        }
      ],
      '/network/': [
        {
          text: '网络',
          items: [{ text: '三次握手和四次挥手', link: '/network/connectionManagement' }]
        }
      ]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    }

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
});
