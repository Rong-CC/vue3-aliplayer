<!--
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-06-25 09:40:07
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-07-05 10:47:22
-->


<template>
  <div>
      <H3>RTMP</H3>

    <div class="video-warp">
      <alplayer width="500px" :source="'rtmp://58.200.131.2:1935/livetv/hunantv'"></alplayer>
    </div>
      <H3>MP4</H3>

    <div class="video-warp">
      <alplayer id="po"  width="500px" :source="'//player.alicdn.com/video/editor.mp4'"></alplayer>
    </div>
  </div>
</template>

<script lang="ts">
import alplayer from '@/components/index.vue'
export default {
  components: {
    alplayer
  }
}
</script>

<style>

.video-warp{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}
</style>
