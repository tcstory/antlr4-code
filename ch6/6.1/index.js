import fs from 'node:fs'
import antlr4 from 'antlr4';
import MyGrammarLexer from './CSVLexer.js';
import MyGrammarParser from './CSVParser.js';
import MyGrammarListener from './CSVListener.js';

const input = fs.readFileSync('./data.csv', 'utf-8')
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.file();

console.log(tree.toStringTree())