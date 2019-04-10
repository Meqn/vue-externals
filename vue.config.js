const argv = require('yargs').argv
const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)

process.env.NODE_ENV = argv.ENV ? argv.ENV : 'development'
const isProd = process.env.NODE_ENV === 'production' ? true : false

const EXTERNALS = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'mand-mobile': 'global mand-mobile',
  'vue-awesome-swiper': 'VueAwesomeSwiper',
  'vuedraggable': 'vuedraggable',
  'vue-ctk-date-time-picker': 'global vue-ctk-date-time-picker',
  'v-charts': 'VeIndex'
}
const CDN = {
  dev: {
    js: [],
    css: []
  },
  build: {
    js: [
      '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
      '//cdn.jsdelivr.net/npm/vuex@3.1.0/dist/vuex.min.js',
      '//cdn.jsdelivr.net/npm/vue-router@3.0.2/dist/vue-router.min.js',
      '//cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
      '//cdn.jsdelivr.net/npm/mand-mobile@2.1.7/lib-vw/mand-mobile.umd.min.js',
      '//cdn.jsdelivr.net/npm/swiper@4.5.0/dist/js/swiper.min.js',
      '//cdn.jsdelivr.net/npm/vue-awesome-swiper@3.1.3/dist/vue-awesome-swiper.min.js',
      '//cdn.jsdelivr.net/npm/sortablejs@1.8.4/Sortable.min.js',
      '//cdn.jsdelivr.net/npm/vuedraggable@2.20.0/dist/vuedraggable.umd.min.js',
      '//cdn.jsdelivr.net/npm/vue-ctk-date-time-picker@2.0.9/dist/vue-ctk-date-time-picker.umd.min.js',
      '//cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js',
      '//cdn.jsdelivr.net/npm/v-charts/lib/index.min.js',
    ],
    css: [
      '//cdn.jsdelivr.net/npm/mand-mobile@2.1.7/lib-vw/mand-mobile.css',
      '//cdn.jsdelivr.net/npm/swiper@4.5.0/dist/css/swiper.min.css',
      '//cdn.jsdelivr.net/npm/vue-ctk-date-time-picker@2.0.9/dist/vue-ctk-date-time-picker.css',
      '//cdn.jsdelivr.net/npm/v-charts/lib/style.min.css'
    ]
  }
}

// 输出配置
module.exports = {
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 3210
  },
  configureWebpack(config) {
    const myConfig = {}
    if (isProd) {
      // 1. 生产环境npm包转CDN
      myConfig.externals = EXTERNALS
    }
    return myConfig
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@asset', resolve('src/assets'))
      .set('@style', resolve('src/style'))
      .set('@component', resolve('src/components'))
      .set('@util', resolve('src/utils'))
      .set('@comp', resolve(argv.plat === 'h5' ? 'src/components/h5' : 'src/components')) //argv.plat === 'h5' ? './src/components')

    config.plugin('html').tap(args => {
      if (isProd) {
        args[0].cdn = CDN['build']
      } else {
        args[0].cdn = CDN['dev']
      }
      return args
    })
  }
}
