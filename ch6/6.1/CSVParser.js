// Generated from CSV.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import CSVListener from './CSVListener.js';
const serializedATN = [4,1,5,35,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
4,0,11,8,0,11,0,12,0,12,1,1,1,1,1,2,1,2,1,2,5,2,20,8,2,10,2,12,2,23,9,2,
1,2,3,2,26,8,2,1,2,1,2,1,3,1,3,1,3,3,3,33,8,3,1,3,0,0,4,0,2,4,6,0,0,35,0,
8,1,0,0,0,2,14,1,0,0,0,4,16,1,0,0,0,6,32,1,0,0,0,8,10,3,2,1,0,9,11,3,4,2,
0,10,9,1,0,0,0,11,12,1,0,0,0,12,10,1,0,0,0,12,13,1,0,0,0,13,1,1,0,0,0,14,
15,3,4,2,0,15,3,1,0,0,0,16,21,3,6,3,0,17,18,5,1,0,0,18,20,3,6,3,0,19,17,
1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,25,1,0,0,0,23,21,1,
0,0,0,24,26,5,2,0,0,25,24,1,0,0,0,25,26,1,0,0,0,26,27,1,0,0,0,27,28,5,3,
0,0,28,5,1,0,0,0,29,33,5,4,0,0,30,33,5,5,0,0,31,33,1,0,0,0,32,29,1,0,0,0,
32,30,1,0,0,0,32,31,1,0,0,0,33,7,1,0,0,0,4,12,21,25,32];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CSVParser extends antlr4.Parser {

    static grammarFileName = "CSV.g4";
    static literalNames = [ null, "','", "'\\r'", "'\\n'" ];
    static symbolicNames = [ null, null, null, null, "TEXT", "STRING" ];
    static ruleNames = [ "file", "hdr", "row", "field" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CSVParser.ruleNames;
        this.literalNames = CSVParser.literalNames;
        this.symbolicNames = CSVParser.symbolicNames;
    }



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CSVParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.hdr();
	        this.state = 10; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 9;
	            this.row();
	            this.state = 12; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 62) !== 0));
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



	hdr() {
	    let localctx = new HdrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CSVParser.RULE_hdr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.row();
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
	    this.enterRule(localctx, 4, CSVParser.RULE_row);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.field();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 17;
	            this.match(CSVParser.T__0);
	            this.state = 18;
	            this.field();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 24;
	            this.match(CSVParser.T__1);
	        }

	        this.state = 27;
	        this.match(CSVParser.T__2);
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



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CSVParser.RULE_field);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.match(CSVParser.TEXT);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.match(CSVParser.STRING);
	            break;
	        case 1:
	        case 2:
	        case 3:
	            this.enterOuterAlt(localctx, 3);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
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

CSVParser.EOF = antlr4.Token.EOF;
CSVParser.T__0 = 1;
CSVParser.T__1 = 2;
CSVParser.T__2 = 3;
CSVParser.TEXT = 4;
CSVParser.STRING = 5;

CSVParser.RULE_file = 0;
CSVParser.RULE_hdr = 1;
CSVParser.RULE_row = 2;
CSVParser.RULE_field = 3;

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
        this.ruleIndex = CSVParser.RULE_file;
    }

	hdr() {
	    return this.getTypedRuleContext(HdrContext,0);
	};

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

	enterRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.exitFile(this);
		}
	}


}



class HdrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSVParser.RULE_hdr;
    }

	row() {
	    return this.getTypedRuleContext(RowContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.enterHdr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.exitHdr(this);
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
        this.ruleIndex = CSVParser.RULE_row;
    }

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.enterRow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.exitRow(this);
		}
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSVParser.RULE_field;
    }

	TEXT() {
	    return this.getToken(CSVParser.TEXT, 0);
	};

	STRING() {
	    return this.getToken(CSVParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.exitField(this);
		}
	}


}




CSVParser.FileContext = FileContext; 
CSVParser.HdrContext = HdrContext; 
CSVParser.RowContext = RowContext; 
CSVParser.FieldContext = FieldContext; 
