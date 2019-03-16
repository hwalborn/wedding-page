import React from 'react'

const MapMarker = ({text}) => {
    return (
      <div style={{
                  color: 'white',
                  background: 'grey',
                  padding: '5px 3px',
                  display: 'inline-flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10%'
                }}>
      {text}
      </div>
    )
}

export default MapMarker
