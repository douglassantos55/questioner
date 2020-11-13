<template>
  <div class="row justify-content-center">
      <div class="col-sm-10 col-md-9 col-lg-7 col-xl-6">
        <div class="mb-4" v-for="source in sources" :key="source.getName()">
            <h3 class="text-uppercase font-weight-light">{{ source.getName() }}</h3>

            <router-link 
                v-for="topic in source.getTopics()" 
                :key="topic.getName()" 
                :to="`/topic/${topic.getSlug()}`" 
                class="py-3 btn btn-secondary mt-3 d-flex justify-content-between align-items-center"
            >
                <span class="h5 mb-0 font-weight-normal">{{ topic.getName() }}</span>

                <span>
                    <span class="mr-1">{{ topic.countQuestions() }} questions</span>
                    &#8226;
                    <span class="ml-1">{{ topic.getAverageTimeString() }} avg time</span>
                </span>
            </router-link>
        </div>
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
