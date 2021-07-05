#### 这是一款基于vue3.0 + Aliplayer二次封装组件

[![NPM Version](https://camo.githubusercontent.com/97da0da774e507ee39c59be4f7280a82acb80c32d1cd38b812d2ebe3df041531/68747470733a2f2f62616467656e2e6e65742f6e706d2f762f762d7573652d6178696f73)](https://npmjs.org/package/v-use-axios) [![img](https://camo.githubusercontent.com/6b46fac812c703f940215fb8627efcfd7e6f12342714da1400ba89d177182b4c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d747970657363726970742d626c7565)](https://camo.githubusercontent.com/6b46fac812c703f940215fb8627efcfd7e6f12342714da1400ba89d177182b4c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d747970657363726970742d626c7565) [![img](https://camo.githubusercontent.com/8e3e33a8442234b1f1eab75b57658e1c3cf9138ef9e4147d903576aebccdce40/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d567565332d677265656e)](https://camo.githubusercontent.com/8e3e33a8442234b1f1eab75b57658e1c3cf9138ef9e4147d903576aebccdce40/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d567565332d677265656e)

## 🚀 安装

```
yarn add vue3-aliplayer
// 或
npm i -S vue3-aliplayer
```

## 🍕 使用

```
...
      <alplayer width="500px" :source="'rtmp://58.200.131.2:1935/livetv/hunantv'"></alplayer>
.....

 
import alplayer from '@/components/index.vue'

export default {
  components: {
    alplayer
  }
}
```



#### 支持格式

Web播放器SDK，同时支持Flash和H5两种播放技术。

- Flash 模式（已停止更新）：
  - 视频格式：MP4、FLV、M3U8、RTMP
  - 视频编码：H.264
  - 音频编码：AAC、MP3
  - 音频格式：MP3
- H5 模式：
  - 视频格式：MP4、FLV、M3U8
  - 视频编码：H.264
  - 音频编码：AAC
  - 音频格式：MP3



