import FileParser from "./models/FileParser";
import SourceLoader from "./models/SourceLoader";
import MarkdownParser from "./models/MarkdownParser";
import PathSourceLoader from "./models/PathSourceLoader";
import Storage from "./models/Storage";
import LocalStorage from "./models/LocalStorage";
import ImageParser from "./models/ImageParser";

export function getSourceLoader(): SourceLoader {
    return new PathSourceLoader();
}

export function getParsers(): FileParser[] {
    return [
        new MarkdownParser(),
        new ImageParser()
    ];
}

export function getStorage(): Storage {
    return new LocalStorage();
}
