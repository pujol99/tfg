<template>
    <div v-if="message" @click="onClick">
        <button
            class="option"
            :class="{ active: !this.$store.getters.isSceneLoading, disabled: disabled }"
        >
            {{ message }}
        </button>
    </div>
</template>

<script>
export default {
    name: "Option",
    props: {
        index: {
            type: Number,
        },
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
            if (!this.disabled) {
                this.$store.commit('saveSceneDecision', this.index);
                this.$store.dispatch("nextStage");
            }
        },
    },
};
</script>
