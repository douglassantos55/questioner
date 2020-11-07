// @ts-ignore
import conf from "../../app.config.js";
import { createStore } from "vuex";
import Topic from "../models/Topic";
import Source from "../models/Source";
import SourceLoader from "../models/SourceLoader";
import { getSourceLoader } from "../DependencyInjection";

export default createStore({
    state: {
        sources: null,
        topics: {}
    },
    mutations: {
        SET_SOURCES(state, sources) {
            state.sources = sources;
        },
        SET_TOPICS(state, sources) {
            sources.forEach(function (source: Source) {
                source.getTopics().forEach(function (topic: Topic) {
                    const slug: string = topic.getSlug();
                    state.topics = { ...state.topics, [slug]: topic };
                });
            });
        }
    },
    actions: {
        getSources({ commit }) {
            const sources: Source[] = [];
            const loader: SourceLoader = getSourceLoader();

            conf.sources.forEach(function (source: string) {
                sources.push(loader.load(source));
            });
            
            commit("SET_SOURCES", sources);
            commit("SET_TOPICS", sources);
        }
    },
    modules: {
    },
    getters: {
        getTopicBySlug: state => (slug: string) => {
            return (state.topics as any)[slug];
        }
    }
})
