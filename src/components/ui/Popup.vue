<template>
    <div
        class="popup"
        :class="{ activate: activated, deactivate: deactivated }"
    >
        <div class="popup-content">
            <h5>{{ message }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "Popup",
    data() {
        return {
            activated: false,
            deactivated: false,
        };
    },
    props: ["type", "message"],
    methods: {
        onActivate() {
            this.activated = true;
            this.deactivated = false;
            var that = this;
            setTimeout(function () {
                that.onDectivate();
            }, 2000);
        },
        onDectivate() {
            this.activated = false;
            this.deactivated = true;
        },
    },
};
</script>
