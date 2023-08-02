// Generated from JSON.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import JSONListener from './JSONListener.js';
const serializedATN = [4,1,12,58,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,3,0,13,8,0,1,1,1,1,1,1,1,1,5,1,19,8,1,10,1,12,1,22,9,1,1,1,1,1,1,
1,1,1,3,1,28,8,1,1,2,1,2,1,2,1,2,5,2,34,8,2,10,2,12,2,37,9,2,1,2,1,2,1,2,
1,2,3,2,43,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,56,8,4,1,
4,0,0,5,0,2,4,6,8,0,0,63,0,12,1,0,0,0,2,27,1,0,0,0,4,42,1,0,0,0,6,44,1,0,
0,0,8,55,1,0,0,0,10,13,3,2,1,0,11,13,3,4,2,0,12,10,1,0,0,0,12,11,1,0,0,0,
13,1,1,0,0,0,14,15,5,1,0,0,15,20,3,6,3,0,16,17,5,2,0,0,17,19,3,6,3,0,18,
16,1,0,0,0,19,22,1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,23,1,0,0,0,22,20,
1,0,0,0,23,24,5,3,0,0,24,28,1,0,0,0,25,26,5,1,0,0,26,28,5,3,0,0,27,14,1,
0,0,0,27,25,1,0,0,0,28,3,1,0,0,0,29,30,5,4,0,0,30,35,3,8,4,0,31,32,5,2,0,
0,32,34,3,8,4,0,33,31,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,
36,38,1,0,0,0,37,35,1,0,0,0,38,39,5,5,0,0,39,43,1,0,0,0,40,41,5,4,0,0,41,
43,5,5,0,0,42,29,1,0,0,0,42,40,1,0,0,0,43,5,1,0,0,0,44,45,5,10,0,0,45,46,
5,6,0,0,46,47,3,8,4,0,47,7,1,0,0,0,48,56,5,7,0,0,49,56,5,8,0,0,50,56,5,9,
0,0,51,56,3,2,1,0,52,56,3,4,2,0,53,56,5,10,0,0,54,56,5,11,0,0,55,48,1,0,
0,0,55,49,1,0,0,0,55,50,1,0,0,0,55,51,1,0,0,0,55,52,1,0,0,0,55,53,1,0,0,
0,55,54,1,0,0,0,56,9,1,0,0,0,6,12,20,27,35,42,55];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JSONParser extends antlr4.Parser {

    static grammarFileName = "JSON.g4";
    static literalNames = [ null, "'{'", "','", "'}'", "'['", "']'", "':'", 
                            "'true'", "'false'", "'null'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "STRING", "NUMBER", "WS" ];
    static ruleNames = [ "json", "object", "array", "pair", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JSONParser.ruleNames;
        this.literalNames = JSONParser.literalNames;
        this.symbolicNames = JSONParser.symbolicNames;
    }



	json() {
	    let localctx = new JsonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JSONParser.RULE_json);
	    try {
	        this.state = 12;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 10;
	            this.object();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 11;
	            this.array();
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



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JSONParser.RULE_object);
	    var _la = 0;
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 14;
	            this.match(JSONParser.T__0);
	            this.state = 15;
	            this.pair();
	            this.state = 20;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 16;
	                this.match(JSONParser.T__1);
	                this.state = 17;
	                this.pair();
	                this.state = 22;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 23;
	            this.match(JSONParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.match(JSONParser.T__0);
	            this.state = 26;
	            this.match(JSONParser.T__2);
	            break;

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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JSONParser.RULE_array);
	    var _la = 0;
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.match(JSONParser.T__3);
	            this.state = 30;
	            this.value();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 31;
	                this.match(JSONParser.T__1);
	                this.state = 32;
	                this.value();
	                this.state = 37;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 38;
	            this.match(JSONParser.T__4);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.match(JSONParser.T__3);
	            this.state = 41;
	            this.match(JSONParser.T__4);
	            break;

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



	pair() {
	    let localctx = new PairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JSONParser.RULE_pair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(JSONParser.STRING);
	        this.state = 45;
	        this.match(JSONParser.T__5);
	        this.state = 46;
	        this.value();
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JSONParser.RULE_value);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.match(JSONParser.T__6);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.match(JSONParser.T__7);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 50;
	            this.match(JSONParser.T__8);
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 51;
	            this.object();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 52;
	            this.array();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 53;
	            this.match(JSONParser.STRING);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 54;
	            this.match(JSONParser.NUMBER);
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

JSONParser.EOF = antlr4.Token.EOF;
JSONParser.T__0 = 1;
JSONParser.T__1 = 2;
JSONParser.T__2 = 3;
JSONParser.T__3 = 4;
JSONParser.T__4 = 5;
JSONParser.T__5 = 6;
JSONParser.T__6 = 7;
JSONParser.T__7 = 8;
JSONParser.T__8 = 9;
JSONParser.STRING = 10;
JSONParser.NUMBER = 11;
JSONParser.WS = 12;

JSONParser.RULE_json = 0;
JSONParser.RULE_object = 1;
JSONParser.RULE_array = 2;
JSONParser.RULE_pair = 3;
JSONParser.RULE_value = 4;

class JsonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_json;
    }

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterJson(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitJson(this);
		}
	}


}



class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_object;
    }

	pair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PairContext);
	    } else {
	        return this.getTypedRuleContext(PairContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitObject(this);
		}
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_array;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitArray(this);
		}
	}


}



class PairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_pair;
    }

	STRING() {
	    return this.getToken(JSONParser.STRING, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterPair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitPair(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_value;
    }

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	STRING() {
	    return this.getToken(JSONParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(JSONParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitValue(this);
		}
	}


}




JSONParser.JsonContext = JsonContext; 
JSONParser.ObjectContext = ObjectContext; 
JSONParser.ArrayContext = ArrayContext; 
JSONParser.PairContext = PairContext; 
JSONParser.ValueContext = ValueContext; 
