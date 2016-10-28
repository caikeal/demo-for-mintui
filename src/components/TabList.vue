<template>
    <div class="tab-list">
        <ul>
            <li v-for="(index, item) in list">{{index+1}}</li>
        </ul>

        <div class="go">
            <a v-link="{path: '/home'}">go home!</a>
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
        route: {
            data (transition) {
                Indicator.open('加载中...')
                setTimeout(() => {
                    this.list = [1, 2, 3, 4, 5]
                    Indicator.close()
                }, 2000)
            }
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
