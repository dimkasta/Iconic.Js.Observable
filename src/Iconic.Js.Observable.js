export class Observable {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyAll() {
        this.observers.forEach((observer) => observer.update(this));
    }
}
