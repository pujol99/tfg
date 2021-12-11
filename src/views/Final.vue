<template>
    <div
        class="full"
        v-if="this.$store.getters.isCurrentStage(this.$options.name)"
    >
        <div class="card">
            <div class="card-container">
                <div class="card-title">
                    <h1>End</h1>
                </div>
                <div class="card-body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit, odit.
                    </p>
                </div>
                <div class="card-action">
                    <button @click="reloadPage">Restart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Final",
    methods: {
        reloadPage() {
            window.location.reload();
        },
    },
};
</script>
