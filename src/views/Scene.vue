<template>
    <div v-if="isCurrentStage(name)">
        <slot></slot>
        <Options :information="optionsProps" />
    </div>
</template>

<script>
import Options from "../components/ui/Options.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        Options,
    },
    props: ["name"],
    computed: {
        ...mapGetters(["getSceneOptions", "isCurrentStage"]),
    },
    async created() {
        this.optionsProps = await this.getSceneOptions(this.name);
    },
};
</script>
