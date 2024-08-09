import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'Star Doc',
  description: 'Adventure',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    nav: [
      { text: '前端', link: '/docs/frontend/javascript/typeConversion' },
      { text: '计算机', link: '/docs/computerScience/twosComplement' },
      { text: '数据结构', link: '/docs/dataStructures/arrayAndLinkedList' },
      { text: '网络', link: '/docs/network/connectionManagement' }
    ],

    sidebar: {
      '/docs/frontend': [
        {
          text: 'JS',
          items: [{ text: '类型转换', link: '/docs/frontend/javascript/typeConversion' }],
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
    }

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
});
