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
                <Disclaimer
                    v-for="disclaimer in getLabel('welcome_disclaimers')"
                    :key="disclaimer"
                    :content="disclaimer"
                />
                <Continue />
            </div>
            <hr />
            <SelectFlag />
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
