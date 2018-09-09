class Range {

    constructor(values, size, tickHeight, margin, minorStepSize, majorStepSize, selector) {

        this.size = size;
        this.minorStepSize = minorStepSize;
        this.majorStepSize = majorStepSize;
        this.selector = selector;

        this.start = Math.min(...values.map(selector));
        this.end = Math.max(...values.map(selector)) + minorStepSize;

        this.rValues = [];
        for (let i = this.start; i <= this.end; i += minorStepSize) {
            this.rValues.push(i);
        }

        this.depth = size / (this.end - this.start);
        this.tickHeight = tickHeight;
        this.margin = margin;
    }
}

export default Range;