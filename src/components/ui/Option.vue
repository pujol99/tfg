<template>
    <div @click="this.$store.commit('nextScene')" class="option">
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    name: 'Option',
    props: ['message'],
}
</script>

<style scoped>
.option{
    background-color: aliceblue;
    cursor: pointer;
}
</style>