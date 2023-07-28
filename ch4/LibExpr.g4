grammar LibExpr;
import CommonLexerRules;

prog: stat+;

stat: expr NEWLINE # printExpr
    | ID '=' expr NEWLINE # assign
    | NEWLINE # blank
    ;

expr: expr op=(MUL|DIV) expr # mulDiv
    | expr op=(ADD|SUB) expr # addSub
    | INT # int
    | ID # id
    | '(' expr ')' # parens
    ;

MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
