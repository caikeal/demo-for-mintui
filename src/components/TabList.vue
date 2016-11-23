<template>
  <div class="tab-list">
    <ul>
      <li v-for="(index, item) in list">{{index+1}}</li>
    </ul>

    <div class="go">
      <router-link :to="{ path: '/home' }">go home!</router-link>
    </div>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui'

  export default {
    name: 'zeco-tab-list',
    data () {
      return {
        list: []
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        Indicator.open('加载中...')
        setTimeout(() => {
          vm.list = ['a', 'b', 'c', 'd', 'e']
          vm.$nextTick(() => {
            Indicator.close()
          })
        }, 2000)
      })
    },
    beforeDestroy () {
      Indicator.close()
    },
    components: {
      [Indicator.name]: Indicator
    }
  }
</script>

<style>
    .tab-list .go{
        margin-top: 10px;
        padding: 10px 20px;
        background-color: #eeff00;
    }
</style>
