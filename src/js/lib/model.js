import {EventEmitter2} from 'eventemitter2';

export default class Model {
    constructor() {
        this._items = {};
        this._emitter = new EventEmitter2;
    }

    createOrUpdate(item) {
        const action = item.id in this._items ? 'updated' : 'created';
        this._items[item.id] = Object.assign({}, this._items[item.id], item);
        this._emitter.emit(action, item);
    }

    find(id) {
        return this._items[id];
    }

    all() {
        return Object.keys(this._items).map(id => this._items[id]);
    }
}