import { Map } from './components/Map'
import { useJsApiLoader } from '@react-google-maps/api'
import './App.css'

const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)

const defaultcenter = {
  lat: 30.28,
  lng: 9.55,
}

const libraries = ['places']

function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries,
  })
  return (
    <div className="App">
      {isLoaded ? <Map center={defaultcenter} /> : <h2>Loading</h2>}
    </div>
  )
}

export default App
