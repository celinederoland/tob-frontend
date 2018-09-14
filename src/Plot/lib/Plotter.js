import Range from "./Range";
import Vector from "./Vector";
import CoordinateSystem from "./CoordinateSystem";

class Plotter {

    constructor(values, getX, getY, width, height, xStep, xMajorStep, yStep, yMajorStep, margin, xDirection = null, yDirection = null) {

        if (!xDirection) xDirection = new Vector(1, 0); else xDirection.scale(1 / xDirection.norm());
        if (!yDirection) yDirection = new Vector(0, 1); else yDirection.scale(1 / yDirection.norm());

        this.values = values;
        this.getX = getX;
        this.getY = getY;
        this.width = width;
        this.height = height;


        const getAllY = value => getY.map(selector => selector(value));
        const xValues = values.map(getX);
        const yValues = values.map(getAllY).reduce((acc, val) => acc.concat(val), []).filter(value => (typeof value !== "undefined"));

        this.xRange = new Range(xValues, xStep, xMajorStep);
        this.yRange = new Range(yValues, yStep, yMajorStep);

        const origin = new Vector(margin, margin + height);
        xDirection.scale(width / (this.xRange.end - this.xRange.start));
        yDirection.scale(-height / (this.yRange.end - this.yRange.start));

        this.system = new CoordinateSystem(origin, xDirection, yDirection);

        this.plots = this.getY.map(selector => this.values.map(value => new Vector(getX(value), selector(value))));
    }
}

export default Plotter;