// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: '2024-04-03',
  devServer: { port: 3000 },
  modules: ["@nuxt/eslint"],
  devtools: { enabled: true },
  runtimeConfig: {
    //需要在构建后使用环境变量指定的私有或公共令牌
  },
});
