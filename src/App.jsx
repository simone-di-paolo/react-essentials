import './App.css'
import Header from './components/header/Header'
import CoreConcepts from './components/coreconcepts/CoreConcepts'
import Examples from './components/examples/examples'

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  )
}

export default App
