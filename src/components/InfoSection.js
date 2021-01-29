import React from 'react'

const InfoSection = (props) => {

  

  return (
    <div className="infoSection">
      <div>
        <h4>IP ADDRESS</h4>
        <p>{props?.ipData?.ip}</p>
      </div>
      <div className="middle">
        <h4>LOCATION</h4>
        <p>{`${props?.ipData?.location?.city}, ${props?.ipData?.location?.region}, ${props?.ipData?.location?.country}`}</p>
      </div>
      <div className="middle second">
        <h4>TIMEZONE</h4>
        <p>{`GMT${props?.ipData?.location?.timezone}`}</p>
      </div>
      <div>
        <h4>ISP</h4>
        <p>{props?.ipData?.isp}</p>
      </div>
    </div>
  )
}

export default InfoSection
