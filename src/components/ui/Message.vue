<template>
    <div class="message" :class="{ activate: activated, deactivate: deactivated}">
        <div class="message-content">
            <h5>{{message}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            activated: false,
            deactivated: false,
        }
    },
    props: ['type', 'message'],
    methods: {
        onActivate() {
            this.activated = true;
            this.deactivated = false;
        },
        onDectivate() {
            this.activated = true;
            this.deactivated = false;
        },
    },
};
</script>
