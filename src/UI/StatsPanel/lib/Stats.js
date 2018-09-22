import moment from "moment";

class Stats {

    constructor(weeks) {

        const week_keys = Object.keys(weeks);
        const start_at = Number.parseInt(week_keys[0].substr(2), 10);
        this.day_values = [];
        this.day_details = [];
        this.max_by_day = 0;
        week_keys.map(week_index => {
                const day_keys = Object.keys(weeks[week_index].data);

                this.day_values.push(...day_keys.map(day_index => {
                    const timestamp = Number.parseInt(day_index.substr(2), 10);
                    const object = {
                        x: timestamp - start_at,
                        count: weeks[week_index].data[day_index].stats.count,
                        duration: weeks[week_index].data[day_index].stats.duration,
                        min_gap: weeks[week_index].data[day_index].stats.min_gap,
                        max_gap: weeks[week_index].data[day_index].stats.max_gap,
                        average_gap: weeks[week_index].data[day_index].stats.average_gap
                    };
                    if (timestamp === Number.parseInt(week_index.substr(2), 10)) {
                        Object.assign(object, {
                            w_count: weeks[week_index].stats.count,
                            w_duration: weeks[week_index].stats.duration,
                            w_min_gap: weeks[week_index].stats.min_gap,
                            w_max_gap: weeks[week_index].stats.max_gap,
                            w_average_gap: weeks[week_index].stats.average_gap
                        });
                    }
                    return object;
                }));

                this.day_details.push(...day_keys.map(day_index => {
                    const timestamp = Number.parseInt(day_index.substr(2), 10);
                    const list = weeks[week_index].data[day_index].data;
                    if (list.length > this.max_by_day) this.max_by_day = list.length;
                    const object = {
                        x: timestamp - start_at
                    };
                    list.map((value, i) => {
                        object[i + 1] = value % (3600 * 24);
                        return null;
                    });
                    return object;
                }));
                return null;
            }
        );

        this.labelX = value => moment.unix(value + start_at).format('DD/MM');
        this.labelY = value => {
            const duration = moment.duration(value * 1000);
            return duration.hours().toString().padStart(2, '0') + ':' + duration.minutes().toString().padStart(2, '0');
        }
    }
}

export default Stats;