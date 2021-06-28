<!--
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-06-11 16:53:12
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-06-28 16:06:50
-->

<template>
  <div>
    <!-- <div class="font">112131231231</div> -->
    <router-view/>
  </div>

</template>
<script setup lang="ts">
import { onMounted } from "vue";

onMounted(()=>{
    console.log('app');
    
})
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
.font{
  font-size: 13px;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
