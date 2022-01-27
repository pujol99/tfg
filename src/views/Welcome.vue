<template>
    <div v-if="currentScene('Welcome')">
        <div class="card-container">
            <div class="card-title">
                <h1>{{ getLabel("welcome_title") }}</h1>
            </div>
            <div class="card-body">
                <p>{{ getLabel("welcome_body") }}</p>
            </div>
            <div class="card-action">
                <Disclaimer content="Anonymous use of Age Gender Answers for statistical analysis"/>
                <Disclaimer content="By starting the game, you are consenting the use of the data"/>
                <Continue />
            </div>
            <hr>
            <div class="languages">
                <SelectFlag />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
            getLabel: "data/getLabel",
        }),
    },
};
</script>
