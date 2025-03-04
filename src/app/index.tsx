import { EditSeminar } from '@modules/EditSeminar';
import { SeminarsList } from '@modules/SeminarsList';

function App() {
    return (
        <main>
            <h1>Семинары от IT-Start</h1>
            <EditSeminar />
            <SeminarsList />
        </main>
    );
}

export default App;
