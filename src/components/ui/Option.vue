<template>
    <div class="option">
        {{message}}
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
}
</style>