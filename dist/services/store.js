import { series } from '../scripts/series.js';
const store = 'Series';
export function getData() {
    return localStorage.getItem(store)
        ? JSON.parse(localStorage.getItem(store))
        : series;
}
export function setData(series) {
    localStorage.setItem(store, JSON.stringify(series));
}
export function deleteData() {
    localStorage.removeItem(store);
}
