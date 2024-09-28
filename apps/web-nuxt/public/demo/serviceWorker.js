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

// 拦截 fetch 请求并返回自定义数据
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/serviceWorker/mockData')) {
    event.respondWith(
      new Response(JSON.stringify({
        message: '这是来自 Service Worker 的自定义数据'
      }), {
        headers: { 'Content-Type': 'application/json' }
      })
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});
