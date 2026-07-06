export class Store<T> {

    private state: T;

    constructor(state: T) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    setState(next: T) {
        this.state = next;
    }

}