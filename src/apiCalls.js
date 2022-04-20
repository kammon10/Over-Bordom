const getData = () => {
     return fetch('https://www.boredapi.com/api/activity')
     .then(response => response.json())
     .catch(err => console.log(err))

}

export {getData}