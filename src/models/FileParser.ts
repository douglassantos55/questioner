import Topic from "./Topic";

export default interface FileParser {
    parse(path: string): Topic | null;
}
