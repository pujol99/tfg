<template>
    <div v-if="currentScene('Welcome')">
        <div class="card-container">
            <div class="card-title">
                <h1>{{ getLabel("welcome_title") }}</h1>
            </div>
            <div class="card-body">
                <p>{{ getLabel("welcome_description") }}</p>
            </div>
            <div class="card-action">
                <Continue />
            </div>
            <!-- <SelectLanguage /> -->
            <div class="flag-space">
                <Flag/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Continue from "../components/ui/Continue.vue";
// import SelectLanguage from "../components/SelectLanguage.vue";
import Flag from "../components/SelectFlag";
export default {
    components: {
        Continue,
        Flag,
        // SelectLanguage,
    },
    computed: {
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
            getLabel: "data/getLabel",
        }),
    },
};
</script>

<style scoped>
.flag-space {
    height: 200px;
}
</style>
