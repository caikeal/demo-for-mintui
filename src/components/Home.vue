<template>
    <div class="home">
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>

        <div class="go">
            <a v-link="{path: '/tab-list'}">go tab-list!</a>
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
        route: {
            data (transition) {
                Indicator.open('加载中...')
                setTimeout(() => {
                    this.list = ['a', 'b', 'c', 'd', 'e']
                    Indicator.close()
                }, 2000)
            }
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
