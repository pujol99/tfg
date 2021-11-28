<template>
    <div v-if="message" @click="this.$store.commit('nextScene')">
        <button>{{message}}</button>
    </div>
</template>

<script>
export default {
    name: 'Option',
    props: ['message'],
}
</script>