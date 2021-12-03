<template>
    <div v-if="message" @click="onClick">
        <button class="option">{{ message }}</button>
    </div>
</template>

<script>
export default {
    name: "Option",
    props: {
        message: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onClick() {
            if(!this.disabled)
                this.$store.commit('nextScene')
        }
    }
};
</script>
