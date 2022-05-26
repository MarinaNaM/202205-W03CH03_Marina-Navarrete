import { Component } from './component';
export class Button extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        return `
       <i class="icon--score fas fa-star" title= "1/5"></i>
        `;
    }
}
