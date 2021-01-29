import React, {useState, useEffect} from 'react'
import './App.scss'
import HeaderSection from './components/HeaderSection'
import InfoSection from './components/InfoSection'
import MapSection from './components/MapSection'

function App() {

  const [ipData, setIpData] = useState();

  useEffect(() => {
    console.log(process.env.REACT_APP_IP_API)
    const url = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_API}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setIpData(data);
    })
    .catch(err => console.log(err))
  }, [])

  const changeIpData = (data) => {
    setIpData(data);
  }

  return (
    <div className="mainContainer">
        <HeaderSection changeIpData={changeIpData} />
        <InfoSection ipData={ipData} />
        <MapSection ipData={ipData} />
    </div>
  );
}

export default App;
