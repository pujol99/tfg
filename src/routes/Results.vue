<template>
    <div class="results">
        <div class="results-title">
            <h1>Results</h1>
        </div>
        <div class="results-actions">
            <button @click="getBins()">Refresh data (Limited requests ⚠️)</button>
            <button id="copyTable" @click="copyTable()">Copy table</button>
        </div>
        <table id="results-table">
            <tr>
                <th>Age</th>
                <th>Gender</th>
                <th>Socials</th>
                <th>Bergen</th>
                <th v-for="(subitem, index) in labels" :key="index">{{ subitem }}</th>
                <th>Survey 1</th>
                <th>Survey 2</th>
                <th>happiness</th>
                <th>socialization</th>
                <th>focus</th>
            </tr>
            <tr v-for="(item, index) in results" :key="index">
                <td>{{ getLabel("about_age_options")[item.record.aboutDecisions.age] }}</td>
                <td>
                    {{ getLabel("about_gender_options")[item.record.aboutDecisions.gender] }}
                </td>
                <td>
                    {{ getLabel("about_socials_options")[item.record.aboutDecisions.socials] }}
                </td>
                <td>{{ item.record.bergenDecisions.total }}</td>
                <td v-for="(subitem, index) in item.record.compareAddictiveDecisions" :key="index">
                    {{ subitem }}
                </td>
                <td v-for="(subitem, index) in item.record.comparePasiveDecisions" :key="index">
                    {{ subitem }}
                </td>
                <td>{{ item.record.surveyDecisions.survey_1 }}</td>
                <td>{{ item.record.surveyDecisions.survey_2 }}</td>
                <td>{{ Math.round(item.record.mood.happiness * 100) / 100 }}</td>
                <td>{{ Math.round(item.record.mood.socialization * 100) / 100 }}</td>
                <td>{{ Math.round(item.record.mood.focus * 100) / 100 }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            results: [],
        };
    },
    computed: {
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
            getLabel: "data/getLabel",
            masterKey: "data/getMasterKey",
            collection: "data/getUsersCollection",
        }),
        labels: function () {
            if (this.results.length > 0) {
                return Object.keys(this.results[0].record.compareAddictiveDecisions).concat(
                    Object.keys(this.results[0].record.comparePasiveDecisions)
                );
            }
            return [];
        },
    },
    methods: {
        getBin(id) {
            let req = new XMLHttpRequest();

            req.onreadystatechange = () => {
                if (req.readyState == XMLHttpRequest.DONE) {
                    if (req.responseText) {
                        this.results.push(JSON.parse(req.responseText));
                        localStorage.setItem("results", JSON.stringify(this.results));
                    }
                }
            };

            req.open("GET", `https://api.jsonbin.io/v3/b/${id}/latest`, true);
            req.setRequestHeader("X-Master-Key", this.masterKey);
            req.setRequestHeader("Access-Control-Allow-Origin", "*");
            req.send();
        },
        getBins() {
            this.results = [];
            let req = new XMLHttpRequest();

            req.onreadystatechange = () => {
                if (req.readyState == XMLHttpRequest.DONE) {
                    for (const bin of JSON.parse(req.responseText)) {
                        this.getBin(bin.record);
                    }
                }
            };
            req.open("GET", `https://api.jsonbin.io/v3/c/${this.collection}/bins`, true);
            req.setRequestHeader("X-Master-Key", this.masterKey);
            req.setRequestHeader("Access-Control-Allow-Origin", "*");
            console.log(req);
            req.send();
        },
        copyTable() {
            var el = document.getElementById("results-table");
            var body = document.body,
                range,
                sel;
            if (document.createRange && window.getSelection) {
                range = document.createRange();
                sel = window.getSelection();
                sel.removeAllRanges();
                try {
                    range.selectNodeContents(el);
                    sel.addRange(range);
                } catch (e) {
                    range.selectNode(el);
                    sel.addRange(range);
                }
            } else if (body.createTextRange) {
                range = body.createTextRange();
                range.moveToElementText(el);
                range.select();
            }
            navigator.clipboard.writeText(window.getSelection().toString());
            window.getSelection().removeAllRanges();

            document.getElementById("copyTable").classList.add("text-copied");
            document.getElementById("copyTable").textContent = "Table copied!";
        },
    },
    mounted() {
        var reultsLocalStorage = localStorage.getItem("results");
        if (reultsLocalStorage) {
            this.results = JSON.parse(reultsLocalStorage);
        } else {
            this.getBins();
        }
    },
};
</script>
