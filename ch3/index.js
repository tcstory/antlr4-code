import antlr4 from 'antlr4';
import MyGrammarLexer from './ArrayInitLexer.js';
import MyGrammarParser from './ArrayInitParser.js';
import MyGrammerListener from './ArrayInitListener.js';

class MyCustomListener extends MyGrammerListener {
    constructor() {
        super();
    }

    enterInit(ctx) {
        console.log('"')
    }

    exitInit(ctx) {
        console.log('"')
    }

    enterValue(ctx) {
        console.log(ctx.INT()?.getText())
    }
}

const input = "{99,3, 45}"
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.init();
const listener = new MyCustomListener()
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree)

