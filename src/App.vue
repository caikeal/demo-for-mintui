<template>
  <div id="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    computed: {
        visible () {
            return ['/', '/header', '/search'].indexOf(this.$route.path) < 0
        }
    }
}
</script>

<style lang="scss">
@import 'assets/sass/_normalize.scss';
@import 'assets/sass/_base.scss';

html {
  height: 100%;
}

#wrapper {
  color: #666;
  width: 100%;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#wrapper a {
  // color: #666;
  // text-decoration: none;
}
</style>
