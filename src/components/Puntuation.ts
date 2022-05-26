/* eslint-disable no-unused-vars */
import { Component } from './component.js';

export class Puntuation extends Component {
    constructor(public score: number, selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        let html = '';
        for (let i = 1; i <= this.score; i++) {
            html += `<li class="score__star">
                <i class="icon--score fas fa-star" title= "${i}/5"></i>
                </li>`;
        }
        for (let j = this.score + 1; j <= 5; j++) {
            html += `<li class="score__star">
                <i class="icon--score far fa-star" title="${j}/5"></i>
                </li>`;
        }
        return `<ul class="score">
                    ${html}
                </ul>`;
    }
}
