class Particle {
    constructor(x, y, ctx, collider) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.collider = collider;
        this.size = Math.random() * 50 + 1;
        this.weight = 10;
        this.directionX = Math.random() * 4;

        this.initialColor = 1
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
        this.ctx.fillStyle = `rgba(${255}, ${this.initialColor + 1}, ${this.initialColor + 1}, 1)`;
        this.ctx.beginPath();
        //this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        //Pythagorean theorem to calculate the height of the triangle
        let h = Math.sqrt((Math.pow(this.size, 2)) - (Math.pow(this.size / 2, 2) ^ 2))

        ctx.moveTo(this.x - (this.size / 2), this.y + (h / 2));
        ctx.lineTo(this.x + this.size, this.y + (h / 2));
        ctx.lineTo(this.x + (this.size / 4), this.y - h / 2);
        this.ctx.closePath();
        this.ctx.fill();
    }
}