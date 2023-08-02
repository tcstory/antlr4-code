grammar JSON;

json: object
    | array
    ;

object
    : '{' pair (',' pair)* '}'
    | '{' '}'
    ;

array
    : '[' value (',' value)* ']'
    | '[' ']'
    ;

pair: STRING ':' value;

value
    : 'true'
    | 'false'
    | 'null'
    | object
    | array
    | STRING
    | NUMBER
    ;

STRING: '"' (ESC | ~["\\])* '"';

fragment ESC: '\\' (["\\/bfnrt] | UNICODE);
fragment UNICODE: 'u' HEX HEX HEX HEX;
fragment HEX: [0-9a-fA-F];

NUMBER
    : '-'? INT '.' INT EXP?
    | '-'? INT EXP
    | '-'? INT
    ;

fragment INT: '0' | [1-9] [0-9]*;
fragment EXP: [Ee] [+\-]? INT;

WS: [ \t\n\r]+ -> skip;
