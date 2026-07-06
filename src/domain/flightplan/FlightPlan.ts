import type { Airport } from "./Airport";
import type { Waypoint } from "./Waypoint";

export class FlightPlan {

    origin: Airport | null = null;

    destination: Airport | null = null;

    alternate: Airport | null = null;

    private waypoints: Waypoint[] = [];

    setOrigin(origin: Airport) {
        this.origin = origin;
    }

    setDestination(destination: Airport) {
        this.destination = destination;
    }

    setAlternate(alternate: Airport) {
        this.alternate = alternate;
    }

    addWaypoint(waypoint: Waypoint) {
        this.waypoints.push(waypoint);
    }

    removeWaypoint(index: number) {
        this.waypoints.splice(index, 1);
    }

    clear() {
        this.origin = null;
        this.destination = null;
        this.alternate = null;
        this.waypoints = [];
    }

    getWaypoints(): readonly Waypoint[] {
        return this.waypoints;
    }

}