<template>
    <div v-if="sceneReporting">
        <div class="card-container">
            <div class="card-body">
                <p>{{ getLabel(`${sceneName}_report`)[decisionTaken] }}</p>
            </div>
            <div class="card-action">
                <Continue />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: ["sceneName"],
    computed: {
        ...mapGetters({
            sceneReporting: "stages/isSceneReporting",
            getLabel: "data/getLabel",
            decisionTaken: "data/getDecisionTaken",
        }),
    },
};
</script>
