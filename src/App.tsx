import { Theme } from "./styles";
export default function App() {
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
                <h1>NeoFMS</h1>

                <p>Learn the system.</p>

                <p>Not the buttons.</p>

                <button>Start Academy</button>

                <button>Open MCDU</button>
            </div>
        </main>
    );
}