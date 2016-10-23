<template>
    <div class="tab-list">
        <mt-navbar class="page-part" :selected.sync="selected">
            <mt-tab-item id="1">我是daddy</mt-tab-item>
            <mt-tab-item id="2">我是mom</mt-tab-item>
        </mt-navbar>

        <mt-tab-container :active.sync="selected" swipeable>
            <mt-tab-container-item id="1">
                <span>3</span>  
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <span>4</span>
            </mt-tab-container-item>
        </mt-tab-container>

        <div class="go">
            <a v-link="{path: '/home'}">go home!</a>
        </div>
    </div>
</template>

<script>
    import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'

    export default {
        name: 'zeco-tab-list',
        data () {
            return {
                selected: '1'
            }
        },
        components: {
            [Navbar.name]: Navbar,
            [TabItem.name]: TabItem,
            [TabContainer.name]: TabContainer,
            [TabContainerItem.name]: TabContainerItem
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
