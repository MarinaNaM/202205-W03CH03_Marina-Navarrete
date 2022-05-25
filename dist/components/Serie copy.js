import { series } from '../scripts/series.js';
import { Component } from './component.js';
export class Serie extends Component {
    SERIES;
    constructor(selector) {
        super();
        this.SERIES = series;
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        let html = '';
        this.SERIES.forEach((item) => {
            html = `
        <li class="serie">
            <img
                class="serie__poster"
                src="${item.poster}"
                alt="${item.name} poster"
            />
            <h4 class="serie__title">${item.name}</h4>
            <p class="serie__info">${item.creator} (${item.year})</p>
            `;
            html += `<ul class="score">
                <li class="score__star">
                <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
            </ul>`;
            html += `
            <i class="fas fa-times-circle icon--delete"></i>
        </li>
        `;
        });
        return html;
    }
}
