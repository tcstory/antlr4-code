import antlr4 from 'antlr4';
import MyGrammarLexer from './JSONLexer.js';
import MyGrammarParser from './JSONParser.js';
import MyGrammarListener from './JSONListener.js';

const input = `[1, "\u0049", 1.3e9]`
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.json();

console.log(tree.toStringTree())