import { ComponentCustomProperties } from "vue"
import { Store } from "vuex"
import Source from "./models/Source";
import Topic from "./models/Topic";

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    sources: Source[],
    topics: { [key: string]: Topic }
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
