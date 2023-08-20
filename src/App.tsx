import './App.css'
import footer from './components/footer'
import nav from './components/nav'

function App() {
  return (
    <>
    <nav>{nav()}</nav>
    <footer>{footer()}</footer>
    </>
    
  )
}

export default App
