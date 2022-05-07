<template>
    <div class="card-container-big" id="pasiveActive">
        <div class="card-body-big">
            <h2>{{getLabel("active_title")}}</h2>
            <p>{{getLabel("active_body")}}</p>
        </div>
        <div class="card-action">
            <Close id="pasiveActive" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            getLabel: "data/getLabel",
        }),
    },
};
</script>
