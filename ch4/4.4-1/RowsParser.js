// Generated from Rows.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import RowsListener from './RowsListener.js';
const serializedATN = [4,1,3,17,2,0,7,0,2,1,7,1,1,0,1,0,1,0,4,0,8,8,0,11,
0,12,0,9,1,1,4,1,13,8,1,11,1,12,1,14,1,1,0,0,2,0,2,0,0,16,0,7,1,0,0,0,2,
12,1,0,0,0,4,5,3,2,1,0,5,6,5,2,0,0,6,8,1,0,0,0,7,4,1,0,0,0,8,9,1,0,0,0,9,
7,1,0,0,0,9,10,1,0,0,0,10,1,1,0,0,0,11,13,5,3,0,0,12,11,1,0,0,0,13,14,1,
0,0,0,14,12,1,0,0,0,14,15,1,0,0,0,15,3,1,0,0,0,2,9,14];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RowsParser extends antlr4.Parser {

    static grammarFileName = "Rows.g4";
    static literalNames = [ null, "'\\t'" ];
    static symbolicNames = [ null, "TAB", "NL", "STUFF" ];
    static ruleNames = [ "file", "row" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RowsParser.ruleNames;
        this.literalNames = RowsParser.literalNames;
        this.symbolicNames = RowsParser.symbolicNames;
    }



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RowsParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 4;
	            this.row();
	            this.state = 5;
	            this.match(RowsParser.NL);
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	row() {
	    let localctx = new RowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RowsParser.RULE_row);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 11;
	            this.match(RowsParser.STUFF);
	            this.state = 14; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RowsParser.EOF = antlr4.Token.EOF;
RowsParser.TAB = 1;
RowsParser.NL = 2;
RowsParser.STUFF = 3;

RowsParser.RULE_file = 0;
RowsParser.RULE_row = 1;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RowsParser.RULE_file;
    }

	row = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RowContext);
	    } else {
	        return this.getTypedRuleContext(RowContext,i);
	    }
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RowsParser.NL);
	    } else {
	        return this.getToken(RowsParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RowsListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RowsListener ) {
	        listener.exitFile(this);
		}
	}


}



class RowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RowsParser.RULE_row;
    }

	STUFF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RowsParser.STUFF);
	    } else {
	        return this.getToken(RowsParser.STUFF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RowsListener ) {
	        listener.enterRow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RowsListener ) {
	        listener.exitRow(this);
		}
	}


}




RowsParser.FileContext = FileContext; 
RowsParser.RowContext = RowContext; 
