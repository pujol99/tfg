<template>
    <div v-if="message" @click="this.$store.commit('nextScene')">
        <button class="option">{{message}}</button>
    </div>
</template>

<script>
export default {
    name: 'Option',
    props: ['message'],
}
</script>