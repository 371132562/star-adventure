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
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('已允许通知');
        fetch('/api/serviceWorker/mockData')
          .then(response => response.json())
          .then(data => {
            console.log('从 Service Worker 中获取的数据:', data);
          })
          .catch(error => {
            console.error('请求失败:', error);
          });
      } else {
        console.log('通知被拦截');
      }
    });
  };
</script>
<template>
  <div>
    <p>打开控制台观察Network，点击按钮，允许弹出通知</p>
    <UButton
      id="fetch-data"
      @click="mockFetch"
      >点击请求通知权限，允许后发起一个mock请求</UButton
    >
  </div>
</template>
