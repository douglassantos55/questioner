<template>
    <div v-if="topic">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
            <h1 class="text-uppercase font-weight-light">{{ topic.getName() }}</h1>

            <div>
                <button @click="showAnswer = !showAnswer" class="btn btn-primary">
                    {{showAnswer ? 'Hide' : 'Show'}} answer
                </button>

                <button @click="getNewQuestion" class="ml-4 btn btn-success">Next question</button>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="mt-5 col-lg-9 col-xl-8">
                <div v-if="question" class="mt-4">
                    <h2 class="font-weight-normal text-light">{{ question.getText() }}</h2>
                    
                    <div v-if="showAnswer" v-html="question.getAnswer()" class="mt-4" />
                </div>

                <div v-else>
                    <p>You've covered all of this topic's questions in {{ this.timer.getTimeString() }}</p>
                    <router-link to="/" class="btn btn-secondary">Back to Topics</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Topic from "../models/Topic";
import Timer from "../models/Timer";
import { getStorage } from "../DependencyInjection";

export default defineComponent({
    name: "Topic",
    props: {
        slug: String
    },
    data() {
        return {
            timer: new Timer(),
            question: null,
            showAnswer: false
        };
    },
    mounted() {
        if (!this.topic) {
            this.$store.dispatch("getSources");
        }
        this.timer.start();
        this.getNewQuestion();
        document.addEventListener("keydown", this.navigate);
    },
    unmounted() {
        this.topic.reset();
        document.removeEventListener("keydown", this.navigate);
    },
    methods: {
        navigate(event: KeyboardEvent) {
            if (event.key === "l" || event.key === "ArrowRight") {
                this.getNewQuestion();
            } else if (event.key === "j") {
                this.showAnswer = !this.showAnswer;
            }
        },
        getNewQuestion() {
            this.question = this.topic.getRandomQuestion() as any;

            if (this.question === null) {
                this.timer.stop();

                getStorage().saveRun({
                    topic: this.topic.getName(),
                    slug: this.topic.getSlug(),
                    time: this.timer.getTime(),
                    date: new Date()
                });
            }
        }
    },
    computed: {
        topic: function(): Topic {
            return this.$store.getters.getTopicBySlug(this.slug);
        }
    }
});
</script>
