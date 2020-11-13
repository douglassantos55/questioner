import fs from "fs";
import path from "path";
import Topic from "./Topic";
import config from "./Config";
import Question from "./Question";
import MarkdownIt from "markdown-it";
import Token from "markdown-it/lib/token";
import FileParser from "./FileParser";

export default class MarkdownItParser implements FileParser {
    private markdown: MarkdownIt;

    constructor() {
        this.markdown = new MarkdownIt();
    }

    parse(target: string): Topic | null {
        if (path.extname(target) !== ".md") {
            return null;
        }

        const fileContents: string = fs.readFileSync(target, { encoding: 'utf8' });
        const { title, questions } = this.parseContent(fileContents);
        return new Topic(title || path.basename(target), questions);
    }

    private parseContent(fileContents: string): { title: string, questions: Question[] } {
        let title = "";
        const questions: Question[] = [];
        const tokens: Token[] = this.markdown.parse(fileContents, {});

        let i = 0;

        while (i < tokens.length) {
            if (tokens[i].markup === config.title_tag && title === "") {
                title = tokens[i + 1].content;
                i += 1;
            }
            else if (tokens[i].markup === config.question_tag) {
                let j = i + 1;
                let title = "";
                let answer = "";

                while (tokens[j] && tokens[j].markup !== config.question_tag) {
                    title += tokens[j].content;
                    j++;
                }

                ++j;
                while (tokens[j] && tokens[j].markup !== config.question_tag) {
                    answer += this.markdown.renderer.render([tokens[j]], {}, {});
                    j++;
                }

                questions.push(new Question(title, answer));
                i = j;
            } else {
                i++;
            }
        }

        return { title, questions };
    }
}
