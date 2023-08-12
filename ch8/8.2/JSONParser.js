// Generated from JSON.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import JSONVisitor from './JSONVisitor.js';

const serializedATN = [4,1,12,52,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,3,0,16,8,0,1,1,1,1,1,1,1,1,5,1,22,8,1,10,1,12,1,25,9,
1,1,1,1,1,1,1,1,1,3,1,31,8,1,1,2,1,2,1,2,1,2,5,2,37,8,2,10,2,12,2,40,9,2,
1,2,1,2,1,2,1,2,3,2,46,8,2,1,3,1,3,1,3,1,3,1,3,0,0,4,0,2,4,6,0,0,57,0,15,
1,0,0,0,2,30,1,0,0,0,4,45,1,0,0,0,6,47,1,0,0,0,8,16,5,10,0,0,9,16,5,11,0,
0,10,16,3,2,1,0,11,16,3,4,2,0,12,16,5,1,0,0,13,16,5,2,0,0,14,16,5,3,0,0,
15,8,1,0,0,0,15,9,1,0,0,0,15,10,1,0,0,0,15,11,1,0,0,0,15,12,1,0,0,0,15,13,
1,0,0,0,15,14,1,0,0,0,16,1,1,0,0,0,17,18,5,8,0,0,18,23,3,6,3,0,19,20,5,4,
0,0,20,22,3,6,3,0,21,19,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,
0,24,26,1,0,0,0,25,23,1,0,0,0,26,27,5,5,0,0,27,31,1,0,0,0,28,29,5,8,0,0,
29,31,5,5,0,0,30,17,1,0,0,0,30,28,1,0,0,0,31,3,1,0,0,0,32,33,5,9,0,0,33,
38,3,0,0,0,34,35,5,4,0,0,35,37,3,0,0,0,36,34,1,0,0,0,37,40,1,0,0,0,38,36,
1,0,0,0,38,39,1,0,0,0,39,41,1,0,0,0,40,38,1,0,0,0,41,42,5,6,0,0,42,46,1,
0,0,0,43,44,5,9,0,0,44,46,5,6,0,0,45,32,1,0,0,0,45,43,1,0,0,0,46,5,1,0,0,
0,47,48,5,10,0,0,48,49,5,7,0,0,49,50,3,0,0,0,50,7,1,0,0,0,5,15,23,30,38,
45];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JSONParser extends antlr4.Parser {

    static grammarFileName = "JSON.g4";
    static literalNames = [ null, "'true'", "'false'", "'null'", "','", 
                            "'}'", "']'", "':'", "'{'", "'['" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "LCURLY", "LBRACK", "STRING", "NUMBER", "WS" ];
    static ruleNames = [ "value", "object", "array", "pair" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JSONParser.ruleNames;
        this.literalNames = JSONParser.literalNames;
        this.symbolicNames = JSONParser.symbolicNames;
    }



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JSONParser.RULE_value);
	    try {
	        this.state = 15;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 8;
	            this.match(JSONParser.STRING);
	            break;
	        case 11:
	            localctx = new AtomContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 9;
	            this.match(JSONParser.NUMBER);
	            break;
	        case 8:
	            localctx = new ObjectValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 10;
	            this.object();
	            break;
	        case 9:
	            localctx = new ArrayValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 11;
	            this.array();
	            break;
	        case 1:
	            localctx = new AtomContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 12;
	            this.match(JSONParser.T__0);
	            break;
	        case 2:
	            localctx = new AtomContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 13;
	            this.match(JSONParser.T__1);
	            break;
	        case 3:
	            localctx = new AtomContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 14;
	            this.match(JSONParser.T__2);
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
	        this.state = 30;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AnObjectContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 17;
	            this.match(JSONParser.LCURLY);
	            this.state = 18;
	            this.pair();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 19;
	                this.match(JSONParser.T__3);
	                this.state = 20;
	                this.pair();
	                this.state = 25;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 26;
	            this.match(JSONParser.T__4);
	            break;

	        case 2:
	            localctx = new EmptyObjectContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.match(JSONParser.LCURLY);
	            this.state = 29;
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JSONParser.RULE_array);
	    var _la = 0;
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AnArrayContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.match(JSONParser.LBRACK);
	            this.state = 33;
	            this.value();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 34;
	                this.match(JSONParser.T__3);
	                this.state = 35;
	                this.value();
	                this.state = 40;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 41;
	            this.match(JSONParser.T__5);
	            break;

	        case 2:
	            localctx = new EmptyArrayContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.match(JSONParser.LBRACK);
	            this.state = 44;
	            this.match(JSONParser.T__5);
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
	        this.state = 47;
	        this.match(JSONParser.STRING);
	        this.state = 48;
	        this.match(JSONParser.T__6);
	        this.state = 49;
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


}

JSONParser.EOF = antlr4.Token.EOF;
JSONParser.T__0 = 1;
JSONParser.T__1 = 2;
JSONParser.T__2 = 3;
JSONParser.T__3 = 4;
JSONParser.T__4 = 5;
JSONParser.T__5 = 6;
JSONParser.T__6 = 7;
JSONParser.LCURLY = 8;
JSONParser.LBRACK = 9;
JSONParser.STRING = 10;
JSONParser.NUMBER = 11;
JSONParser.WS = 12;

JSONParser.RULE_value = 0;
JSONParser.RULE_object = 1;
JSONParser.RULE_array = 2;
JSONParser.RULE_pair = 3;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ObjectValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JSONVisitor ) {
	        return visitor.visitObjectValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONParser.ObjectValueContext = ObjectValueContext;

class StringContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(JSONParser.STRING, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JSONVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONParser.StringContext = StringContext;

class ArrayValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JSONVisitor ) {
	        return visitor.visitArrayValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONParser.ArrayValueContext = ArrayValueContext;

class AtomContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(JSONParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JSONVisitor ) {
	        return visitor.visitAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONParser.AtomContext = AtomContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AnObjectContext extends ObjectContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LCURLY() {
	    return this.getToken(JSONParser.LCURLY, 0);
	};

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

	accept(visitor) {
	    if ( visitor instanceof JSONVisitor ) {
	        return visitor.visitAnObject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONParser.AnObjectContext = AnObjectContext;

class EmptyObjectContext extends ObjectContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LCURLY() {
	    return this.getToken(JSONParser.LCURLY, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JSONVisitor ) {
	        return visitor.visitEmptyObject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONParser.EmptyObjectContext = EmptyObjectContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EmptyArrayContext extends ArrayContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LBRACK() {
	    return this.getToken(JSONParser.LBRACK, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JSONVisitor ) {
	        return visitor.visitEmptyArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONParser.EmptyArrayContext = EmptyArrayContext;

class AnArrayContext extends ArrayContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LBRACK() {
	    return this.getToken(JSONParser.LBRACK, 0);
	};

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

	accept(visitor) {
	    if ( visitor instanceof JSONVisitor ) {
	        return visitor.visitAnArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONParser.AnArrayContext = AnArrayContext;

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

	accept(visitor) {
	    if ( visitor instanceof JSONVisitor ) {
	        return visitor.visitPair(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JSONParser.ValueContext = ValueContext; 
JSONParser.ObjectContext = ObjectContext; 
JSONParser.ArrayContext = ArrayContext; 
JSONParser.PairContext = PairContext; 
