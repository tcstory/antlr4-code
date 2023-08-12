import fs from 'node:fs'
import antlr4 from 'antlr4';
import MyGrammarLexer from './JSONLexer.js'
import MyGrammarParser from './JSONParser.js';
import MyGrammarVisitor from './JSONVisitor.js'

class MyVisitor extends MyGrammarVisitor {
    visitAtom(ctx) {
        const value = ctx.getText()
        return value
    }
    visitString(ctx) {
        const value = ctx.getText().replace(/"/g,'')
        return value
    }

    visitEmptyObject(ctx) {
        return ""
    }

    visitAnObject(ctx) {
        return ctx.pair().map((v) => {
            return this.visit(v)
        }).join('')
    }

    visitEmptyArray(ctx) {
        return ""
    }

    visitAnArray(ctx) {
        return ctx.value().map((v) => {
            return `<element>${this.visit(v)}</element>`
        }).join('')
    }

    visitPair(ctx) {
        const tag = ctx.STRING().getText().replace(/"/g, '')
        const value = this.visit(ctx.value())
        const result = `<${tag}>${value}</${tag}>`
        return result
    }
}

const input = fs.readFileSync('./t.json', 'utf-8')

const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.value();

const [result] = tree.accept(new MyVisitor())
fs.writeFileSync("./out.xml", `<out>${result}</out>`)
