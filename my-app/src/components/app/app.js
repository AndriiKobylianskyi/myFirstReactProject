import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css'


function App() {

    const data = [
        { name: `Andrew`, surname: `Koba`, salary: 600, increase: false, id: 0 },
        { name: `Ilya`, surname: `Vusliukh`, salary: 300, increase: true, id: 1 },
        { name: `Vlad`, surname: `Sperkach`, salary: 400, increase: false, id: 2 },
    ]


    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployersList data={data} />
            <EmployersAddForm />
        </div>
    );
}

export default App;