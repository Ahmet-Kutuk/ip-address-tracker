export const getIp = async (value="") => {
    return fetch(`https://ifconfig.co/json?ip=${value}`)
        .then(res => res.json())
        .then(data => data)
        .catch(error => error)
    }
  
