<template>
    <div v-if="currentScene('Info')">
        <div class="card-container">
            <div class="card-title">
                <h1>{{ getLabel("info_title") }}</h1>
            </div>
            <div class="card-body">
                <p>{{ getLabel("info_body") }}</p>
                <div class="info-screen">
                    <div class="info-screen-title">title</div>
                    <div class="info-screen-options">
                        <div class="info-screen-option">option</div>
                        <div class="info-screen-option">option</div>
                        <div class="info-screen-option">option</div>
                    </div>
                </div>
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
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
            getLabel: "data/getLabel",
        }),
    },
};
</script>
