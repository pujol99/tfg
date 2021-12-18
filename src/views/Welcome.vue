<template>
    <div v-if="currentScene('Welcome')">
        <div class="card-container">
            <div class="card-title">
                <h1>Hello world</h1>
            </div>
            <div class="card-body">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, odit.
                </p>
            </div>
            <div class="card-action">
                <Continue />
            </div>
            <SelectLanguage/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Continue from "../components/ui/Continue.vue";
import SelectLanguage from "../components/SelectLanguage.vue";
export default {
    components: {
        Continue,
        SelectLanguage
    },
    computed: {
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
        }),
    },
};
</script>
