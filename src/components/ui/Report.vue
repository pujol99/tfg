<template>
    <div v-if="sceneReporting">
        <div class="card-container">
            <div class="card-body">
                <p>{{ getLabel("welcome_body") }}</p>
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
    computed: {
        ...mapGetters({ sceneReporting: "stages/isSceneReporting", getLabel: "data/getLabel" }),
    },
};
</script>
