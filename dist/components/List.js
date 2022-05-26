import { getData, setData } from '../services/store.js';
import { Component } from './component.js';
import { Serie } from './Serie.js';
export class List extends Component {
    selector;
    SERIES;
    constructor(selector) {
        super();
        this.selector = selector;
        this.SERIES = getData();
        this.template = this.createTemplate();
        this.render(selector);
        this.SERIES.forEach((item) => {
            if (item.watched === true) {
                new Serie(item, 'slot.watched');
            }
            else {
                new Serie(item, 'slot.pending');
            }
        });
        this.manageComponent();
    }
    createTemplate() {
        return `<section class="series">
                    <h2 class="section-title">Series list</h2>
                    <section class="series-pending">
                        <h3 class="subsection-title">Pending series</h3>
                        <p class="info">You have 4 series pending to watch</p>
                        <!--<p class="info">Congrats! You've watched all your series</p>-->
                        <ul class="series-list">
                        <slot class="pending"></slot>
                        </ul>
                    </section>
                    <section class="series-watched">
                        <h3 class="subsection-title">Watched series</h3>
                        <p class="info">You have watched 4 series</p>
                        <!--<p class="info">You already have not watched any serie</p>-->
                        <ul class="series-list series-list--watched"> 
                        <slot class="watched"></slot> 
                        </ul>
                    </section>
                </section>`;
    }
    manageComponent() {
        document
            .querySelectorAll('.button')
            .forEach((item) => item.addEventListener('click', this.handlerButton.bind(this)));
        // document
        //     .querySelectorAll('[type=checkbox]')
        //     .forEach((item) =>
        //         item.addEventListener('change', this.handlerChange.bind(this))
        //     );
    }
    handlerButton(ev) {
        const star = ev.target.title[0];
        const id = ev.target.parentElement.id;
        this.SERIES = this.SERIES.map((item) => {
            if (item.id === Number(id)) {
                item.score = Number(star);
                item.watched = true;
                return item;
            }
            else {
                return item;
            }
        });
        this.template = this.createTemplate();
        this.render(this.selector);
        this.SERIES.forEach((item) => {
            if (item.watched === true) {
                new Serie(item, 'slot.watched');
            }
            else {
                new Serie(item, 'slot.pending');
            }
        });
        setData(this.SERIES);
        this.manageComponent();
    }
}
