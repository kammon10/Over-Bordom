const getData = () => {
     return fetch('https://www.boredapi.com/api/activity')
          .then(response => response.json())
          .catch(err => console.log(err))

}

const getDataByType = (type) => {
     return fetch(`https://www.boredapi.com/api/activity?type=${type}`)
          .then(response => response.json())
          .catch(err => console.log(err))
}

export { getData, getDataByType }