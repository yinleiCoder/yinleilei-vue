<template>
    <el-menu 
    router
    class="top-bar"
    active-text-color="#3498db" 
    mode="horizontal">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/postvideo">Post video</el-menu-item>
        <el-menu-item index="/about">About me</el-menu-item>
    </el-menu>
</template>
<script>
export default {
    name: 'NabBar',

}
</script>
<style scoped lang="scss">
    .top-bar{
        margin-bottom: 30px;
    }
</style>