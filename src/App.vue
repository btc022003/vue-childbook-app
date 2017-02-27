<template>
    <div id="app">
        <mt-header title="童书在线阅读" :fixed="true">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
body{
    margin:0;
    padding:0;
}
.container{
    margin-top:40px;
}
</style>
