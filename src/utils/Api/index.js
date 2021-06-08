export const getIp = async (value = "") => {
  return fetch(`https://ipapi.co/${value}/json/`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
};
