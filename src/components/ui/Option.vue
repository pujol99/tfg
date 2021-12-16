<template>
    <div v-if="message" @click="onClick">
        <button
            class="option"
            :class="{
                active: !this['stages/isSceneLoading'],
                disabled: disabled,
            }"
        >
            {{ message }}
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    computed: {
        ...mapGetters(["stages/isSceneLoading"]),
    },
    methods: {
        ...mapActions(["stages/nextStage"]),
        onClick() {
            if (!this.disabled) {
                this.$store.commit("data/saveSceneDecision", this.index);
                this["stages/nextStage"]();
            }
        },
    },
};
</script>
