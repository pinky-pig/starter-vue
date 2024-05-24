<script setup lang="ts"></script>

<template>
  <button class="exampleClass">
    <span>
      <slot />
    </span>
  </button>
</template>

<style scoped>
.exampleClass {
  padding: 12px 24px;
  background-color: black;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}

.exampleClass span {
  color: white;
  position: relative;
  z-index: 1;
  transition: color 0.6s cubic-bezier(0.53, 0.21, 0, 1);
}

.exampleClass::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  border-radius: 6px;
  transform: translate(-100%, -50%);
  width: 100%;
  height: 100%;
  background-color: hsl(244, 63%, 69%);
  transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
}

.exampleClass:hover span {
  color: black;
}

.exampleClass:hover::before {
  transform: translate(0, -50%);
}
</style>
