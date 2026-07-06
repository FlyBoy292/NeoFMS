type Listener<T = unknown> = (payload: T) => void;

export class EventBus {

    private listeners = new Map<string, Listener[]>();

    subscribe<T>(event: string, listener: Listener<T>) {

        const list = this.listeners.get(event) ?? [];

        list.push(listener as Listener);

        this.listeners.set(event, list);

    }

    publish<T>(event: string, payload: T) {

        const list = this.listeners.get(event);

        if (!list) return;

        list.forEach(listener => listener(payload));

    }

}