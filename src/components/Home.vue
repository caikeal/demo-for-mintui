<template>
    <div class="home">
        <mt-tab-container :active.sync="finishedType">
            <mt-tab-container-item :id="5">
                <span>5</span>  
            </mt-tab-container-item>
            <mt-tab-container-item :id="6">
                <span>6</span>
            </mt-tab-container-item>
        </mt-tab-container>

        <div class="btn_wrap">
            <mt-button type="primary" size="large" @click="nextStep">next</mt-button>
        </div>

        <div class="go">
            <a v-link="{path: '/tab-list'}">go tab-list!</a>
        </div>
    </div>
</template>

<script>
    import { Navbar, TabItem, TabContainer, TabContainerItem, Button } from 'mint-ui'

    export default {
        name: 'zeco-home',
        data () {
            return {
                finishedType: 5
            }
        },
        components: {
            [Navbar.name]: Navbar,
            [Button.name]: Button,
            [TabItem.name]: TabItem,
            [TabContainer.name]: TabContainer,
            [TabContainerItem.name]: TabContainerItem
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
