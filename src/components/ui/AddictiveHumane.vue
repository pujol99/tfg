<template>
    <div class="card-container-big" id="pasiveActive">
        <div class="card-body-big">
            <h2>Addictive vs humane design</h2>
            <div
                v-for="value in [...Array(nTricks).keys()]"
                :key="value"
                class="trick"
                :id="`trick-${value}`"
                v-show="value == index"
            >
                <div class="trick-title">
                    <h3>{{ getLabel(`trick${value}_title`) }}</h3>
                </div>
                <div class="trick-body">
                    {{ getLabel(`trick${value}_body`) }}
                </div>
                <div class="trick-image">
                    <img :src="`assets/images/trick${value}.png`" />
                </div>
                <div class="trick-link" v-if="links[index] !== ''">
                    <a :href="links[index]" target="_blank">Read more...</a>
                </div>
                <div class="trick-action" v-if="index < nTricks -1">
                    <button class="continueButton" @click="index++">
                        {{ getLabel("next") }}
                    </button>
                </div>
            </div>
        </div>
        <div class="card-action" v-if="index >= nTricks-1">
            <Close id="pasiveActive" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            index: 0,
            nTricks: 4,
            links: [
                "https://www.nytimes.com/2014/08/31/fashion/texting-anxiety-caused-by-little-bubbles.html",
                "https://www.nirandfar.com/want-to-hook-your-users-drive-them-crazy",
                "https://www.cosmopolitan.com/lifestyle/a57384/why-your-likes-on-social-media-dont-mean-anything-addiction/",
                ""
            ],
        };
    },
    computed: {
        ...mapGetters({
            getLabel: "data/getLabel",
        }),
    },
};
</script>
