:- module app.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.

:- implementation.
:- import_module int.

:- type expr
    ---> int(int)
    ; add(expr, expr)
    ; sub(expr, expr)
    ; mul(expr, expr)
    ; div(expr, expr).

:- pred eval(expr::in, int::out) is det.
eval(int(N), N).
eval(add(E1, E2), N1 + N2) :-
eval(E1, N1),
eval(E2, N2).
eval(sub(E1, E2), N1 - N2) :-
eval(E1, N1),
eval(E2, N2).
eval(mul(E1, E2), N1 * N2) :-
eval(E1, N1),
eval(E2, N2).
eval(div(E1, E2), N1 / N2) :-
eval(E1, N1),
eval(E2, N2).

main(!IO) :-
Expr = add(int(3), mul(int(4), int(5))),
eval(Expr, N),
write_int(N, !IO),
nl(!IO).