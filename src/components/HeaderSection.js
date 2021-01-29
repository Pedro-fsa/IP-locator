import React, {useState} from 'react'
import arrow from '../images/icon-arrow.svg';

const HeaderSection = (props) => {

  const [ip, setIp] = useState('');

  const handleInput = (e) => {
    setIp(e.target.value);
  }
  
  const handlesubmit = (e) => {
    e.preventDefault();
    const url = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_API}&ipAddress=${ip}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      props.changeIpData(data);
    })
    .catch(err => console.log(err))
  }
  
  return (
        <header className="headerSection">
          <h1>IP Address Tracker</h1>
          <form onSubmit={handlesubmit} className="inputForm">
            <input onChange={handleInput} spellcheck="false" autocorrect="off" type="text" name="ipAddress" id="ipInput" placeholder="Search for any IP address or domain" />
            <button type="submit"><img src={arrow} alt="submit"/></button>
          </form>
        </header>
  )
}

export default HeaderSection
