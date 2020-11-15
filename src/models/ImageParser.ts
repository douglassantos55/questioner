import fs from "fs";
import path from "path";
import Topic from "./Topic";
import FileParser from "./FileParser";

// This parser copies source images to __static
export default class ImageParser implements FileParser {

    parse(target: string): Topic | null {
        if (this.isImage(path.extname(target))) {
            // @ts-ignore
            fs.copyFileSync(target, path.join(__static, path.basename(target)));
        }

        return null;
    }

    private isImage(extension: string): boolean {
        return ['.png', '.jpg', '.jpeg', '.gif'].includes(extension);
    }
}
