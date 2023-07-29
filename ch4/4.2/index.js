import antlr4 from 'antlr4';
import MyGrammarLexer from './LibExprLexer.js';
import MyGrammarParser from './LibExprParser.js';
import MyGrammarVisitor from './LibExprVisitor.js'

class EvalVisitor extends MyGrammarVisitor {
    constructor() {
        super();
        this.memory = new Map()
    }

    visitAssign(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expr())
        this.memory.set(id, value)
        return value
    }

    visitPrintExpr(ctx) {
        const value = this.visit(ctx.expr())
        console.log(value)
        return value
    }

    visitInt(ctx) {
        return Number(ctx.INT().getText())
    }

    visitId(ctx) {
        const id = ctx.ID().getText()
        if (this.memory.has(id)) {
            return this.memory.get(id)
        }

        return 0
    }

    visitMulDiv(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));

        if (ctx.op.type === MyGrammarParser.MUL) {
            return left * right
        }

        return left / right;
    }

    visitAddSub(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));

        if (ctx.op.type === MyGrammarParser.ADD) {
            return left + right
        }

        return left - right;
    }

    visitParens(ctx) {
        return this.visit(ctx.expr())
    }
}


const input = `
193
a=5
b=6
a+b*2
(1+2)*3
`
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.prog();


tree.accept(new EvalVisitor());
