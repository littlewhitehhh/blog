<!-- 
 * @Author: aky 
 * @Date: 2024-02-20 15:14:49 
 * @Last Modified by:   aky 
 * @Last Modified time: 2024-02-20 15:14:49 
  -->

<template>
  <div class="homepage-view">
    <typewrite></typewrite>
    <canvas id="canvas" class="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import typewrite from './component/typewrite.vue';
import { renderCanvas } from './canvas';

onMounted(() => {
  renderCanvas();
});
</script>

<style lang="less" scoped>
canvas {
  display: block;
}
</style>
