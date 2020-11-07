import FileParser from "./models/FileParser";
import SourceLoader from "./models/SourceLoader";
import MarkdownParser from "./models/MarkdownParser";
import PathSourceLoader from "./models/PathSourceLoader";

export function getSourceLoader(): SourceLoader {
    return new PathSourceLoader();
}

export function getParser(): FileParser {
    return new MarkdownParser();
}
