class Range {

    constructor(values, step, majorStep) {

        this.start = Math.min(...values);
        this.end = Math.max(...values);
        this.step = step;
        this.majorStep = majorStep;

        this.values = [];
        for (let i = this.start; i <= this.end; i += step) {
            this.values.push(i);
        }
    }
}

export default Range;