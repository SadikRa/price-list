
import './App.css'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/Navbar/Navbar'
import Phone from './components/Phone/Phone'
import PriceOptions from './components/PriceOptions/PriceOptions'


function App() {


  return (
    <>
    <div className='container mx-auto'>
    <Navbar></Navbar>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <Phone></Phone>
    </div>
    </>
  )
}

export default App
