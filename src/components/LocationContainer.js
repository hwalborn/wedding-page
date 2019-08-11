import React from 'react'

import '../style/LocationContainer.css';

const ListContainer = ({positionClass, aboutValues, onlyMains, handleLocationClick}) => {
    var listItemByHeader = {}
    var listItems = []
    Object.keys(aboutValues).forEach((key, index) => {
        let value = aboutValues[key]
        let isMain = value[3];
        if(onlyMains && !isMain){
            return;
        }
        let listItemText = `${key} ${value[4] || ""}`
        let headerLine = value[5]
        let listItem = <li className="link-item-location"><a href="#" item-key={key} onClick={handleLocationClick}>{listItemText}</a></li>
        if(listItemByHeader[headerLine] === undefined){
            listItemByHeader[headerLine] = [listItem]
        } else {
            listItemByHeader[headerLine].push(listItem)
        }
    })
    for (var header in listItemByHeader) {
        let aboutLine = <li className="link-item-header">{header}<ul>{listItemByHeader[header]}</ul></li>
        listItems.push(aboutLine)
    }
    return (
    <div className={positionClass} id="location-container">
        <ul>
            {listItems}
        </ul>
    </div>
    )
  }
  
  export default ListContainer