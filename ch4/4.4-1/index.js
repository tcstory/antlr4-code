import fs from 'node:fs'
import antlr4 from 'antlr4';
import MyGrammarLexer from './RowsLexer.js';
import MyGrammarParser from './RowsParser.js';
import MyGrammarListener from './RowsListener.js';

class MyListener extends MyGrammarListener {
    constructor(col) {
        super();
        this.col = col
    }
    enterRow(ctx) {
        console.log(ctx.STUFF(this.col - 1).getText())
    }
}

const input = fs.readFileSync('./t.rows', 'utf-8')
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.file();

antlr4.tree.ParseTreeWalker.DEFAULT.walk(new MyListener(3), tree);
