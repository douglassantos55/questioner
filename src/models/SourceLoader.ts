import Source from "./Source";

export default interface SourceLoader {
    load(target: string): Source
}
