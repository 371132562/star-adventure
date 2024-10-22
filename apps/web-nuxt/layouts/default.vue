<template>
  <div class="flex h-screen w-screen flex-col overflow-y-auto bg-slate-950">
    <header
      class="bg-background/75 sticky top-0 z-50 flex h-14 shrink-0 items-center justify-center border-b border-slate-900 backdrop-blur"
    >
      Star Doc DEMO
    </header>
    <main class="mx-auto h-screen w-full">
      <slot />
    </main>
  </div>
</template>
