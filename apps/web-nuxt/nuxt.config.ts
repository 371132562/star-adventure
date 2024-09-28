export default defineNuxtConfig({
  // compatibilityDate: '2024-04-03',
  devServer: { port: 4000 },
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  devtools: { enabled: true },
  runtimeConfig: {
    //需要在构建后使用环境变量指定的私有或公共令牌
  }
});
