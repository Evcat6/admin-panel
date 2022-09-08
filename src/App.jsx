import { Header, Widgets, Credits, LeftMenu, AddWidget } from './components'

function App() {

  return (
    <div className="App">
      <Header/>
      <div className='app-container' >
        <div>
        <LeftMenu/>
        <Credits/>
        </div>
        <Widgets/>
        <AddWidget/>
      </div>
    </div>
  )
}

export default App;
