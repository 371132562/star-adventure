<template>
  <div class="w-vw h-dvh">
    <header
      class="bg-background/75 sticky top-0 z-50 flex h-14 items-center justify-center border-b border-gray-200 backdrop-blur dark:border-gray-800"
    >
      Star Doc DEMO
    </header>
    <main class="h-full-[calc(100%_-_3.5rem)] mx-auto grid max-w-screen-xl overflow-hidden">
      <section class="max-h-full overflow-y-auto">
        <slot />
      </section>
    </main>
  </div>
</template>
