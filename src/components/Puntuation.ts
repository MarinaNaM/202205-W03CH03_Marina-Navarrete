/* eslint-disable no-unused-vars */
import { iSerie } from '../interfaces/components.js';
import { Component } from './component.js';

export class Puntuation extends Component {
    constructor(public item: iSerie, selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        let html = '';
        for (let i = 1; i <= this.item.score; i++) {
            html += `<li class="score__star">
                <span class="button" role="button id="${this.item.id}"><i class="icon--score fas fa-star" title= "${i}/5"></i></span>
                </li>`;
        }
        for (let j = this.item.score + 1; j <= 5; j++) {
            html += `<li class="score__star">
                <span class="button" role="button" id="${this.item.id}"><i class="icon--score far fa-star" title="${j}/5"></i></span>
                </li>`;
        }
        return `<ul class="score">
                    ${html}
                </ul>`;
    }
}
