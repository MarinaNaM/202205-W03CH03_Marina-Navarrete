/* eslint-disable no-unused-vars */
import { iSerie } from '../interfaces/components.js';
import { series } from '../scripts/series.js';
import { Component } from './component.js';
import { Puntuation } from './Puntuation.js';

export class Serie extends Component {
    SERIES: Array<iSerie>;
    constructor(public item: iSerie, selector: string) {
        super();
        this.SERIES = series;
        this.template = this.createTemplate();
        this.addRender(selector);
        new Puntuation(item, 'slot.puntuation');
    }
    createTemplate() {
        let html = `
        <li class="serie">
            <img
                class="serie__poster"
                src="${this.item.poster}"
                alt="${this.item.name} poster"
            />
            <h4 class="serie__title">${this.item.name}</h4>
            <p class="serie__info">${this.item.creator} (${this.item.year})</p>
            `;
        html += `<slot class=puntuation></slot>`;

        html += `
            <i class="fas fa-times-circle icon--delete"></i>
        </li>
        `;

        return html;
    }
}
