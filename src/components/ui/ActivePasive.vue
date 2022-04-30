<template>
    <div class="card-container-big" id="pasiveActive">
        <div class="card-body-big">
            <h2>Active vs Pasive use of social media</h2>
            <h4>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
                nulla?
            </h4>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum laborum
                harum eum. Commodi neque quae tempora cum asperiores ducimus dolorum amet
                quis possimus, corrupti reprehenderit eum at accusamus, tempore
            </p>
            <img src="assets/images/pasiveActive.jpeg" style="width:100%">
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
