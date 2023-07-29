import fs from 'node:fs'
import antlr4 from 'antlr4';
import MyGrammarLexer from './RowsLexer.js';
import MyGrammarParser from './RowsParser.js';
import MyGrammarListener from './RowsListener.js';


const input = fs.readFileSync('./t.rows', 'utf-8')
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens, 3);
parser.buildParseTrees = false;
const tree = parser.file();