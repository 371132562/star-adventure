<script setup lang="ts">
  onMounted(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/demo/syncServiceWorker.js')
        .then(registration => {
          console.log('Service Worker 注册成功:', registration);
        })
        .catch(error => {
          console.log('Service Worker 注册失败:', error);
        });
    }
  });

  const offlineFunc = () => {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('已允许通知');
        //注册离线同步事件
        navigator.serviceWorker.ready.then(registration => {
          registration.sync.register('offlineData').then(() => {
            console.log('离线同步事件注册成功');
          });
        });
      } else {
        console.log('通知被拦截');
      }
    });
  };
</script>

<template>
  <div>
    <p>首先断开网络，点击按钮，允许弹出通知，恢复网络观察表现</p>
    <UButton
      id="fetch-data"
      @click="offlineFunc"
      >点击注册离线同步任务</UButton
    >
  </div>
</template>

<style scoped lang="scss"></style>
