var buddy= {
    1: new Buddy(400, 200, "buddy1"),
    2: new Buddy(550, 200, "buddy2")
};
const move= function(event) {
    const moves= {
        ArrowUp: () => buddy[1].moveY(-10),
        ArrowDown: () => buddy[1].moveY(10),
        ArrowLeft: function() {
            buddy[1].moveX(-10)
            buddy[1].mirror(true);
        },
        ArrowRight: function() {
            buddy[1].moveX(10)
            buddy[1].mirror(false);
        },
        w: () => buddy[2].moveY(-10),
        s: () => buddy[2].moveY(10),
        a: function() {
            buddy[2].moveX(-10)
            buddy[2].mirror(true);
        },
        d: function() {
            buddy[2].moveX(10)
            buddy[2].mirror(false);
        }
    };
    if (moves[event.key]) {
        moves[event.key]();
    };
};
document.addEventListener("keydown", move);