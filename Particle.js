class Particle {
    constructor(x, y, ctx, collider) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.size = Math.random() * 10 + 1;
        this.weight = 2;
        this.directionX = Math.random() * 4;; 
    }

    update() {
        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX;

        if (this.y > window.innerHeight) {
            this.y = 0;
            this.x = Math.random() * window.innerWidth;
            this.weight = 2;
        }
    }

    draw() {
        this.ctx.fillStyle = 'red';
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        this.ctx.closePath();
        this.ctx.fill();
    }
}