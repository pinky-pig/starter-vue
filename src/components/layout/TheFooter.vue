<template>
  <nav class="mt-6 inline-flex gap-2 px-8 py-4 text-xl">
    <button icon-btn @click="toggleDark">
      <div class="i-carbon-sun text-2xl dark:i-carbon-moon" />
    </button>

    <a
      class="i-carbon-logo-github text-2xl"
      rel="noreferrer"
      href="https://github.com/pinky-pig/starter-vue"
      target="_blank"
      title="GitHub"
    />

    <a
      class="i-carbon-user-filled text-2xl"
      rel="noreferrer"
      href="https://mmeme.me/"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
