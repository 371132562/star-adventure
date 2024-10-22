<script setup>
  const toast = useToast();
  onMounted(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          toast.add({ title: `目标元素进入` });
        } else {
          toast.add({ title: `目标元素离开` });
        }
      },
      {
        root: document.getElementById('scrollContainer'), // 使用自定义容器作为 root
        rootMargin: '100px 0px' // 扩展视口区域，在顶部额外增加 100px
      }
    );

    observer.observe(document.querySelector('.target'));
  });
</script>

<template>
  <div
    id="scrollContainer"
    style="height: 300px; overflow: auto; border: 1px solid white"
  >
    <UNotifications />
    <div style="height: 600px">
      <div
        class="target"
        style="margin-top: 400px; height: 100px; background-color: lightblue"
      >
        目标元素
      </div>
    </div>
  </div>
</template>
