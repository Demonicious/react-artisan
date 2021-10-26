import { ArtisanProvider } from "./ArtisanContext";

import Toolbar from "./Components/Toolbar";

const App = () => {
    return (
        <main className="artisan h-screen w-screen overflow-hidden">
            <ArtisanProvider>
                <Toolbar />
            </ArtisanProvider>
        </main>
    );
}

export default App;