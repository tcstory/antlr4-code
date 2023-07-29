// Generated from Rows.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,3,21,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,1,0,
1,0,1,1,3,1,13,8,1,1,1,1,1,1,2,4,2,18,8,2,11,2,12,2,19,0,0,3,1,1,3,2,5,3,
1,0,1,2,0,9,10,13,13,22,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,1,7,1,0,0,0,
3,12,1,0,0,0,5,17,1,0,0,0,7,8,5,9,0,0,8,9,1,0,0,0,9,10,6,0,0,0,10,2,1,0,
0,0,11,13,5,13,0,0,12,11,1,0,0,0,12,13,1,0,0,0,13,14,1,0,0,0,14,15,5,10,
0,0,15,4,1,0,0,0,16,18,8,0,0,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,
19,20,1,0,0,0,20,6,1,0,0,0,3,0,12,19,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class RowsLexer extends antlr4.Lexer {

    static grammarFileName = "Rows.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'\\t'" ];
	static symbolicNames = [ null, "TAB", "NL", "STUFF" ];
	static ruleNames = [ "TAB", "NL", "STUFF" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

RowsLexer.EOF = antlr4.Token.EOF;
RowsLexer.TAB = 1;
RowsLexer.NL = 2;
RowsLexer.STUFF = 3;



