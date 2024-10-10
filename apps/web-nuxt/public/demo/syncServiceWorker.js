// 安装事件
self.addEventListener('install', (event) => {
  console.log('Service Worker 已安装');
  self.skipWaiting();  // 跳过等待阶段，立即激活
});

// 激活事件
self.addEventListener('activate', (event) => {
  console.log('Service Worker 已激活');
  event.waitUntil(clients.claim());  // 立即接管页面控制
});

self.addEventListener('sync', (event) => {
  console.log('离线同步事件触发');
  if (event.tag === 'offlineData') {
    const title =  '通知';
    const options = {
      body: '这是来自 Service Worker 的离线同步事件触发',
    };
    console.log('tag为offlineData的离线同步事件触发');
    event.waitUntil(self.registration.showNotification(title, options))
  }
});
