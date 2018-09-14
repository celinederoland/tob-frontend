import Range from "./Range";
import Vector from "./Vector";
import CoordinateSystem from "./CoordinateSystem";

class Plotter {

    constructor(values, getX, getY, width, height, xStep, xMajorStep, yStep, yMajorStep, margin, xDirection = null, yDirection = null, filterX = null, filterY = null) {

        if (!xDirection) xDirection = new Vector(1, 0); else xDirection.scale(1 / xDirection.norm());
        if (!yDirection) yDirection = new Vector(0, 1); else yDirection.scale(1 / yDirection.norm());
        if (!filterX) filterX = value => true;
        const filterT = filterY ? (value => (typeof value !== "undefined" && filterY(value))) : (value => (typeof value !== "undefined"));

        this.values = values;
        this.getX = getX;
        this.getY = getY;
        this.width = width;
        this.height = height;


        const getAllY = value => getY.map(selector => selector(value));
        const xValues = values.map(getX).filter(filterX);
        const yValues = values.map(getAllY).reduce((acc, val) => acc.concat(val), []).filter(filterT);

        this.xRange = new Range(xValues, xStep, xMajorStep, filterX);
        this.yRange = new Range(yValues, yStep, yMajorStep, filterY);

        const origin = new Vector(margin, margin + height);
        xDirection.scale(width / (this.xRange.end - this.xRange.start));
        yDirection.scale(-height / (this.yRange.end - this.yRange.start));

        this.system = new CoordinateSystem(origin, xDirection, yDirection);

        this.plots = this.getY.map(selector => this.values.map(value => new Vector(getX(value), selector(value))));
    }
}

export default Plotter;