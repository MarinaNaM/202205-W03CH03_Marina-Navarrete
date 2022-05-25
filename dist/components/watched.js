import { series } from '../scripts/series.js';
import { Component } from './component.js';
export class Watched extends Component {
    series;
    constructor(selector) {
        super();
        this.series = series;
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        return `
        
        `;
    }
}
