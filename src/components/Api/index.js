export const getIp = async () => {
    return fetch("http://ip-api.com/json/")
        .then(res => res.json())
        .then(data => data)
        .catch(error => error)
    }
  