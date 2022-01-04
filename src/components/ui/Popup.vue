<template>
    <div
        class="popup warning"
        :class="{ popupActive: activated, popupInactive: deactivated }"
    >
        <h5>{{ message }}</h5>
    </div>
</template>

<script>
export default {
    data() {
        return {
            POPUP_TIME: 2,
            activated: false,
            deactivated: false,
        };
    },
    props: ["message"],
    methods: {
        activate() {
            if (this.activated) return;

            this.activated = true;
            this.deactivated = false;
            var that = this;
            setTimeout(function () {
                that.deactivate();
            }, this.POPUP_TIME * 1000);
        },
        deactivate() {
            this.activated = false;
            this.deactivated = true;
        },
    },
};
</script>
