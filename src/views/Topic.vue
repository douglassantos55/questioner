<template>
    <div class="topic" v-if="topic">
        <h1>{{ topic.getName() }}</h1>

        <div v-if="question">
            <h2>{{ question.getText() }}</h2>
            
            <div v-if="showAnswer" v-html="question.getAnswer()" />

            <button @click="showAnswer = !showAnswer">
                {{showAnswer ? 'Hide' : 'Show'}} answer
            </button>

            <button @click="getNewQuestion">Next</button>
        </div>

        <div v-else>
            <p>You've covered all of this topic's questions in xxx minutes</p>
            <router-link to="/">Back to Topics</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Topic from "../models/Topic";

export default defineComponent({
    name: "Topic",
    props: {
        slug: String
    },
    data() {
        return {
            question: null,
            showAnswer: false
        };
    },
    mounted() {
        if (!this.topic) {
            this.$store.dispatch("getSources");
        }
        this.getNewQuestion();
    },
    unmounted() {
        this.topic.reset();
    },
    methods: {
        getNewQuestion() {
            this.question = this.topic.getRandomQuestion() as any;
        }
    },
    computed: {
        topic: function(): Topic {
            return this.$store.getters.getTopicBySlug(this.slug);
        }
    }
});
</script>
