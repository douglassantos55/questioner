import FileParser from "./models/FileParser";
import SourceLoader from "./models/SourceLoader";
import MarkdownParser from "./models/MarkdownParser";
import PathSourceLoader from "./models/PathSourceLoader";
import Storage from "./models/Storage";
import LocalStorage from "./models/LocalStorage";

export function getSourceLoader(): SourceLoader {
    return new PathSourceLoader();
}

export function getParsers(): FileParser[] {
    return [
        new MarkdownParser(),
    ];
}

export function getStorage(): Storage {
    return new LocalStorage();
}
