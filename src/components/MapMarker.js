import React from 'react'

const MapMarker = ({text, handleClick, isMain}) => {
    let style = isMain ? {
                  color: 'white',
                  background: 'grey',
                  padding: '5px 3px',
                  display: 'inline-flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10%'
                } :
                {
                  color: 'red',
                  background: '#ff4f00',
                  padding: '5px 3px',
                  display: 'inline-flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '100%',
                  height: window.innerWidth < 1000 ? '2.5em' : '1em',
                  width: window.innerWidth < 1000 ? '2.5em' : '1em'
                }
    return (
      <div style={style}
           onClick={handleClick}
           data-name={text}>
      {isMain ? text : ''}
      </div>
    )
}

export default MapMarker
