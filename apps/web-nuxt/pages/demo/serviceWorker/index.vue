<script setup>
  onMounted(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/demo/serviceWorker.js')
        .then(registration => {
          console.log('Service Worker 注册成功:', registration);
        })
        .catch(error => {
          console.log('Service Worker 注册失败:', error);
        });
    }
  });

  const mockFetch = () => {
    fetch('/api/serviceWorker/mockData')
      .then(response => response.json())
      .then(data => {
        console.log('从 Service Worker 中获取的数据:', data);
      })
      .catch(error => {
        console.error('请求失败:', error);
      });
  };
</script>
<template>
  <div>
    <p>打开控制台观察Network</p>
    <UButton
      id="fetch-data"
      @click="mockFetch"
      >点击请求一个不存在的接口</UButton
    >
  </div>
</template>
