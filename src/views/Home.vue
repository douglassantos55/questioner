<template>
  <div class="home">
    <div v-for="source in sources" :key="source.getName()">
        <h2>{{ source.getName() }}</h2>

        <p v-for="topic in source.getTopics()" :key="topic.getName()">
            <router-link :to="`/topic/${topic.getSlug()}`">
                {{ topic.getName() }}
            </router-link>
        </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from "vuex";

export default defineComponent({
    name: "Home",
    mounted() {
        if (!this.sources) {
            this.$store.dispatch("getSources");
        }
    },
    computed: mapState(["sources"])
});
</script>
