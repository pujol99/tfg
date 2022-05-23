<template>
    <div class="settings">
        <div class="settings-title">
            <h1>Settings</h1>
        </div>
        <div class="settings-content">
            <div class="settings-setting">
                <p>JSONBIN MasterKey</p>
                <input type="text" />
            </div>
            <div class="settings-setting">
                <p>JSONBIN Collection ID</p>
                <input type="text" />
            </div>
            <div class="settings-setting">
                <label for="saveData">Save Data</label>
                <input type="checkbox" id="saveData">
            </div>
            <div class="settings-action">
                <button>Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            settings: {},
        };
    },
    computed: {
        ...mapGetters({
            getLabel: "data/getLabel",
            masterKey: "data/getMasterKey",
            collection: "data/getUsersCollection",
        }),
    },
    methods: {},
    mounted() {},
};
</script>
