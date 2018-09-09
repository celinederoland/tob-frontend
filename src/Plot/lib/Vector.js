class Vector {

    constructor(x, y) {

        this.x = x;
        this.y = y;
    }

    norm() {

        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    add(v) {

        return new Vector(this.x + v.x, this.y + v.y);
    }

    absoluteCoordinates(system) {

        return system.o.add(system.u.clone().scale(this.x)).add(system.v.clone().scale(this.y));
    }

    scale(lambda) {

        this.x *= lambda;
        this.y *= lambda;
        return this;
    }

    normalize(lambda) {

        const norm = this.norm();
        return this.scale(lambda / norm);
    }

    ortho(lambda = 1) {

        return (new Vector(this.y, -this.x)).scale(lambda);
    }

    clone() {

        return new Vector(this.x, this.y);
    }
}

export default Vector;