
<!--
 * @Description: 二次封装 aliplayer
 * @Author: xx
 * @@后台人员: xxx
 * @Date: 2021-06-11 16:19:13
 * @LastEditTime: 2021-06-28 16:57:16
-->

<template>
  <div :id="playerId" class="player-btns"></div>
</template>

<script>
import { onMounted, ref, reactive, onUnmounted, watch } from 'vue'
// declare let Aliplayer
const statusEvent = [
  /**
   * 播放器视频初始化按钮渲染完毕。
   * 播放器UI初始设置需要此事件后触发，避免UI被初始化所覆盖。
   * 播放器提供的方法需要在此事件发生后才可以调用。
   */
  'ready',
  /**
   * 视频由暂停恢复为播放时触发。
   */
  'play',
  /**
   * 视频暂停时触发。
   */
  'pause',
  /**
   * 能够开始播放音频/视频时发生，会多次触发，仅H5播放器。
   */
  'canplay',
  /**
   * 播放中，会触发多次。
   */
  'playing',
  /**
   * 当前视频播放完毕时触发。
   */
  'ended',
  /**
   * 直播流中断时触发。
   * m3u8/flv/rtmp在重试5次未成功后触发。
   * 提示上层流中断或需要重新加载视频。
   * PS：m3u8一直自动重试，不需要上层添加重试。
   */
  'liveStreamStop',
  /**
   * m3u8直播流中断后重试事件，每次断流只触发一次。
   */
  'onM3u8Retry',
  /**
   * 控制栏自动隐藏事件。
   */
  'hideBar',
  /**
   * 控制栏自动显示事件。
   */
  'showBar',
  /**
   * 数据缓冲事件。
   */
  'waiting',
  /**
   * 播放位置发生改变时触发，仅H5播放器。
   * 可通过getCurrentTime方法，得到当前播放时间。
   */
  'timeupdate',
  /**
   * 截图完成。
   */
  'snapshoted',
  /**
   * 全屏事件，仅H5支持。
   */
  'requestFullScreen',
  /**
   * 取消全屏事件，iOS下不会触发，仅H5支持。
   */
  'cancelFullScreen',
  /**
   * 错误事件。
   */
  'error',
  /**
   * 开始拖拽，参数返回拖拽点的时间。
   */
  'startSeek',
  /**
   * 完成拖拽，参数返回拖拽点的时间。
   */
  'completeSeek'
]
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: `player-${Math.random()
        .toString(36)
        .substr(2)
        .toLocaleUpperCase()}`
    },
    source: {
      type: String,
      default: '//player.alicdn.com/video/editor.mp4'
    },
    width: {
      type: String,
      default: '300px'
    },
    height: {
      type: String,
      default: '280px'
    },
    options: {
      type: Object,
      default: () => {
        return {
          id: `player-${Math.random()
            .toString(36)
            .substr(2)
            .toLocaleUpperCase()}`,
          source: '//player.alicdn.com/video/editor.mp4',
          // cover: 'https://img.alicdn.com/tps/TB1EXIhOFXXXXcIaXXXXXXXXXXX-760-340.jpg',
          autoplay: false,
          isLive: false,
          rePlay: false,
          playsinline: true,
          preload: true,
          controlBarVisibility: 'hover',
          useH5Prism: true,
          skinLayout: [
            {
              name: 'bigPlayButton',
              align: 'blabs',
              x: 30,
              y: 80
            },
            {
              name: 'H5Loading',
              align: 'cc'
            },
            {
              name: 'errorDisplay',
              align: 'tlabs',
              x: 0,
              y: 0
            },
            {
              name: 'infoDisplay'
            },
            {
              name: 'tooltip',
              align: 'blabs',
              x: 0,
              y: 56
            },
            {
              name: 'thumbnail'
            },
            {
              name: 'controlBar',
              align: 'blabs',
              x: 0,
              y: 0,
              children: [
                {
                  name: 'fullScreenButton',
                  align: 'tr',
                  x: 10,
                  y: 12
                },
                {
                  name: 'volume',
                  align: 'tr',
                  x: 5,
                  y: 10
                }
              ]
            }
          ]
        }
      }
    },
    cssLink: {
      // css版本源
      required: false,
      type: [String],
      default:
        'https://g.alicdn.com/de/prismplayer/2.9.3/skins/default/aliplayer-min.css'
    },
    scriptSrc: {
      // js版本源
      required: false,
      type: [String],
      default: 'https://g.alicdn.com/de/prismplayer/2.9.3/aliplayer-min.js'
    }
  },
  setup(props) {
    const playerId = ref('player' + props.id)
    const player = ref(null)
    const events = reactive(statusEvent)
    const state = reactive({
      config: {} // 配置
    })
    // 视频实例
    const getPlayer = () => {
      return player.value
    }
    // 放器视频初始化按钮渲染完毕
    const ready = () => {
      player.value && player.value.ready()
    }
    /**
     * 播放视频。
     */
    const play = () => {
      player.value && player.value.play()
    }
    /**
     * 当前视频状态
     */
    const getStatus = () => {
      return player.value && player.value.getStatus()
    }
    /**
     * 暂停视频
     *
     */
    const pause = () => {
      player.value && player.value.pause()
    }

    const initPlayer = () => {

      console.log(hasUsableSWF(),'223');
      console.log(window.Aliplayer, '------------window.Aliplayer')
      if (player.value === null) {
        const options = props.options
        if (options) {
          for (const key in options) {
            state.config[key] = options[key]
          }
        }
      
        props.width && (state.config.width = props.width)
        props.height && (state.config.height = props.height)
        if (props.source) {
          state.config.source = props.source // 播放源
        }
        state.config.id = playerId.value
        player.value = window.Aliplayer(state.config)
      } else {
        player.value && player.value.replay() // 销毁后重播
      }
    }
    const hasUsableSWF = () => {
      var swf
      if (typeof window.ActiveXObject != 'undefined') {
        // eslint-disable-next-line no-undef
        swf = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
      } else {
        swf = navigator.plugins['Shockwave Flash']
      }
      return swf
      // return swf ? true : false
    }
    const init = () => {
      const linkID = 'aliplayer-min-css'
      const scriptID = 'aliplayer-min-js'
      const head = document.getElementsByTagName('head')
      const html = document.getElementsByTagName('html')
      let scriptTag = document.getElementById(scriptID)
      const linkIDTag = document.getElementById(linkID)
      if (!linkIDTag) {
        const link = document.createElement('link')
        link.type = 'text/css'
        link.rel = 'stylesheet'
        link.href = props.cssLink
        link.id = linkID
        head[0].appendChild(link)
      }
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.type = 'text/javascript'
        scriptTag.id = scriptID
        scriptTag.src = props.scriptSrc
        html[0].appendChild(scriptTag)
        console.log(hasUsableSWF(),'falsh');
        // 兼容单页加载和硬加载
        scriptTag.addEventListener('load', () => {
          initPlayer()
        })
      } else {
        // 这样是为了兼容页面上有多个播放器
        scriptTag.addEventListener('load', () => {
          initPlayer()
        })
      }
    }
    /**
     * 直接播放视频url，time为可选值（单位秒）。目前只支持同种格式（mp4/flv/m3u8）之间切换。
     * 暂不支持直播rtmp流切换。
     * @return player
     */
    const loadByUrl = (url, time) => {
      player.value && player.value.loadByUrl(url, time)
    }
    watch(
      () => state.config.source,
      url => {
        loadByUrl(url)
      }
    )
    onUnmounted(() => {
      // 防止重复创建
      const head = document.querySelector('head') // 移除所有的重复创建的标签
      const nodes = document.querySelectorAll(
        'script[src="https://g.alicdn.com/de/prismplayer/2.9.3/aliplayer-min.js"]'
      )
      head &&
        nodes.forEach(item => {
          head.removeChild(item)
        })
    })
    onMounted(() => {
      console.log(hasUsableSWF(),'hasUsableSWF');
      if (window.Aliplayer === undefined) {
        init()
      } else {
        initPlayer()
      }
    })
    return {
      getPlayer,
      playerId,
      ready,
      pause,
      play,
      getStatus,
      events
    }
  }
}
</script>
<style scoped>
.player-btns {
  overflow: hidden;
}
</style>