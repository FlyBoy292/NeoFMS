import { Services } from "./core";
import type { FlightPlan } from "./domain/flightplan";
import { Theme } from "./styles";
export default function App() {
    const flightPlan = Services.get<FlightPlan>("flightplan");

if (!flightPlan.origin) {

    flightPlan.setOrigin({
        icao: "LEMD",
        name: "Madrid-Barajas",
        latitude: 40.472,
        longitude: -3.561
    });

}
    return (
        <main
            style={{
                background: Theme.colors.background,
                color: Theme.colors.text,
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div>
                <h1>{flightPlan.origin?.icao}</h1>

                <p>Learn the system.</p>

                <p>Not the buttons.</p>

                <button>Start Academy</button>

                <button>Open MCDU</button>
            </div>
        </main>
    );
}