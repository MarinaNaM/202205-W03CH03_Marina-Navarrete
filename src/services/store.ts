import { iSerie } from '../interfaces/components.js';
import { series } from '../scripts/series.js';

const store = 'Series';

export function getData(): Array<iSerie> {
    return localStorage.getItem(store)
        ? JSON.parse(<string>localStorage.getItem(store))
        : series;
}

export function setData(series: Array<iSerie>) {
    localStorage.setItem(store, JSON.stringify(series));
}

export function deleteData() {
    localStorage.removeItem(store);
}
