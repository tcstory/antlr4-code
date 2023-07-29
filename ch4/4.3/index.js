import fs from 'node:fs'
import antlr4 from 'antlr4';
import MyGrammarLexer from './JavaLexer.js';
import MyGrammarParser from './JavaParser.js';
import MyGrammarListener from './JavaListener.js';

class MyListener extends MyGrammarListener {
    constructor() {
        super();
    }

    enterClassDeclaration(ctx) {
        console.log('interface I', ctx.Identifier(), " {")
    }

    exitClassDeclaration(ctx) {
        console.log(' }')
    }

    enterMethodDeclaration(ctx) {
        const tokens = this.parser.getTokenStream()
        let type = 'void'

        if (ctx.type() !== null) {
            type = tokens.getType(ctx.type())
        }

        const args = tokens.getText(ctx.formalParameters())
        console.log('    ', type, ' ', ctx.Identifier(), args, ';')
    }
}

const input = fs.readFileSync("./IDemo.java", 'utf-8')
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.compilationUnit();

antlr4.tree.ParseTreeWalker.DEFAULT.walk(new MyListener(), tree);