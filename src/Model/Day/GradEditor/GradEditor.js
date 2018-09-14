import React from 'react'
import './GradEditor.css'
import GradHour from "../../Hour/GradHour/GradHour";
import CellDay from "../CellDay/CellDay";

class GradEditor extends React.Component {

    constructor(props) {
        super(props);

        this.onClickGrad = this.onClickGrad.bind(this);
    }

    onClickGrad(time) {

        this.props.onClickGrad(time);
    }

    render() {
        const size = 14;
        const day_start_at = this.props.okey.substr(2);
        const day_data = this.props.day.data.map((time) => (Number.parseInt(time, 10)));

        //Je split la journée en 24h
        const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        //Je split chaque heure en 12 portions de 5 minutes
        const hour_splits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        //Je construits un tableau pour les 24 heurs,
        //Chaque heure étant elle même un tableau contenant les 12 portions de 5 minutes
        //Chaque portion de 5 minutes est représenté par un objet : { 'time' : timestamp auquel la portion commence, 'active' : ce timestamp est-il partie intégrante des données fournies }
        const all_hours = hours.map(
            (value) => {
                let start_index = 0;
                return (hour_splits.map(
                        (split) => {
                            const time = Number.parseInt(day_start_at, 10) + value * 3600 + split * 300;
                            const found_at = day_data.indexOf(time, start_index);
                            const active = found_at > -1;
                            start_index = active ? found_at : start_index;
                            return ({'time': time, 'active': active})
                        }
                    )
                );
            }
        );

        //@todo : passer ces informations à GradHour pour l'affichage

        const grad_hours = all_hours.map((value) => (<GradHour key={value} hour={value} size={size} onClickGrad={this.onClickGrad}/>));
        const axe = (
            <React.Fragment>
                <line x1={size / 2} y1={2 * size + size / 2}
                      x2={size * 12 * 24 + size / 2} y2={2 * size + size / 2}
                      strokeWidth={1} stroke={'gray'}
                />
            </React.Fragment>);
        return (
            <div className="grad-editor light-border">
                <CellDay day={day_start_at}/><br/>
                <svg width={size * 12 * 24 + size} height={4 * size}>
                    {grad_hours}
                    {axe}
                </svg>

            </div>
        );
    }
}

export default GradEditor;
