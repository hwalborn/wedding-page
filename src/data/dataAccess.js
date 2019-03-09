import api from '../data/apiKey'

export default {
  googleSheets: (sheet) => {
    // lets do this async, build a new promise
    return new Promise((resolve, reject) => {
      // use the api key and the sheet passed in
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/14OsbtSgGtA911j16Y_QjX6P_etYEJ4sahge0iQn8mcw/values:batchGet?key=${api.apiKey}&ranges=${sheet}&majorDimension=ROWS`)
      .then((resp) => {
        // make some json, this also happens async
        resp.json()
        .then((data) => {
          // build our object to return
          var valueObjects = {}
          data.valueRanges[0].values.forEach((value) => {
            valueObjects[value[0]] = [value[1], value[2]]
          })
          // resolve with some awesome data from google sheets
          resolve(valueObjects)
        })
      })
    })
  }
}
