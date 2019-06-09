import React from 'react'

import '../style/LocationContainer.css';

const ListContainer = ({positionClass, aboutValues, onlyMains, handleLocationClick}) => {
    let listItems = Object.keys(aboutValues).map((key, index) => {
        let value = aboutValues[key]
        let isMain = value[3];
        if(onlyMains && !isMain){
            return;
        }
        return <li className="link-item"><a href="#" onClick={handleLocationClick}>{key}</a></li>
    })
    return (
    <div className={positionClass} id="location-container">
        <ul>
            {listItems}
        </ul>
    </div>
    )
  }
  
  export default ListContainer