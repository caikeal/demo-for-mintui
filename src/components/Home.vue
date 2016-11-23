<template>
  <div class="home">
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>

    <div class="go">
      <router-link :to="{ path: '/tab-list' }">go tab-list!</router-link>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'

export default {
  name: 'zeco-home',
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
  },
  methods: {
    nextStep () {
      this.finishedType = (this.finishedType === 5) ? 6 : 5
    }
  }
}
</script>

<style>
    .home .go{
        margin-top: 10px;
        padding: 10px 20px;
        background-color: #eeff00;
    }
</style>
