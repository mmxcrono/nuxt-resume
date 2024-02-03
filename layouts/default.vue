<template>
  <div
    class="min-h-screen bg-gradient-to-t from-teal-900 to-indigo-900 text-zinc-100"
  >
    <div class="mx-auto max-w-5xl">
      <AppHeader />
      <AvatarBanner />
      <slot></slot>
      <AppFooter />
    </div>
  </div>
</template>
