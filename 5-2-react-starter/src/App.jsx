import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <StudentCard name="Norah ALharbi" id="S12345" dept="Computer Science" />
          <StudentCard name="Fahad ALharbi" id="S67890" dept="Mathematics" />
        </div>
      </main>
    </div>
  )
}

export default App
