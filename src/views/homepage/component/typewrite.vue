<template>
  <div class="typewrite-box">
    <div class="typewrite">
      <div class="text">
        <div class="English">HELLO I AM AKY , Welcome to my front end world !</div>
        <div class="Chinese">和光同尘、与时舒卷</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.typewrite-box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.text {
  overflow: hidden;
  white-space: nowrap;
  font-size: 36px;
  animation: typeEffect 1s steps(70);

  @media (max-width: 900px) {
    font-size: 24px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
  font-weight: bold;
}
.Chinese {
  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;
}

@keyframes typeEffect {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
