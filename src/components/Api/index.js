export const getIp = async (value="") => {
    return fetch(`http://ip-api.com/json/${value}`)
        .then(res => res.json())
        .then(data => data)
        .catch(error => error)
    }
  
