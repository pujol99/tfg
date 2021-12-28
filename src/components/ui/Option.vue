<template>
    <div v-if="message">
        <button
            class="option"
            :class="{
                active: !sceneLoading,
                disabled: disabled,
            }"
            @click="onClick"
        >
            {{ message }}
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    props: {
        index: Number,
        message: String,
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapGetters({ sceneLoading: "stages/isSceneLoading" }),
    },
    methods: {
        ...mapActions({ nextStage: "stages/nextStage" }),
        onClick() {
            if (!this.disabled) {
                this.$store.commit("data/saveSceneDecision", this.index);
                this.nextStage();
            }
        },
    },
};
</script>
