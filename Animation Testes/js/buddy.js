class Buddy {
    constructor(x, y, id) {
        this.x= x;
        this.y= y;
        this.current_frame= 1;
        this.walked= 0;
        this.element= document.getElementById(id);
        this.element.style.left=`${this.x}px`;
        this.element.style.top=`${this.y}px`;
    };
    frame() {
        if (this.walked>= 30) {
            this.walked= 0;
            this.current_frame++;
            if (this.current_frame> 6) {this.current_frame= 1};
            this.element.src= frames[this.current_frame - 1];
        };
    };
    moveX(x) {
        this.x+= x;
        this.walked+= 10;
        this.element.style.left=`${this.x}px`;
        this.frame();
    };
    moveY(y) {
        this.y+= y;
        this.element.style.top=`${this.y}px`;
        this.walked+= 10;
        this.frame();
    };
    mirror(v) {
        if (v) {
            this.element.style.transform="scaleX(-1)";
        } else {
            this.element.style.transform="scaleX(1)";
        };
    };
};