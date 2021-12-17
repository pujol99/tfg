<template>
    <div v-if="this['stages/isCurrentStage'](name)">
        <slot></slot>
        <Options :information="optionsProps" />
    </div>
</template>

<script>
import Options from "../../components/ui/Options.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        Options,
    },
    props: ["name"],
    computed: {
        ...mapGetters(["data/getSceneOptions", "stages/isCurrentStage"]),
    },
    async created() {
        this.optionsProps = await this['data/getSceneOptions'](this.name);
    },
};
</script>
