import axios from "axios"

export const getArticeBySport = async () => {
    const data = await axios.get('https://newsdata.io/api/1/news?apikey=pub_65517959beb24c9d37f12bd576f3d42a4ad3d&country=vi&category=sports');
    
    return data;
}

export const getArticeByPolitic = async () => {
    const data = await axios.get('https://newsdata.io/api/1/news?apikey=pub_65517959beb24c9d37f12bd576f3d42a4ad3d&country=vi&language=vi&category=politics');
    
    return data;
}
export const getArticeByBusiness = async () => {
    const data = await axios.get('https://newsdata.io/api/1/news?apikey=pub_65517959beb24c9d37f12bd576f3d42a4ad3d&country=vi&language=vi&category=business');
    
    return data;
}
export const getArticeByEntertainment = async () => {
    const data = await axios.get('https://newsdata.io/api/1/news?apikey=pub_65517959beb24c9d37f12bd576f3d42a4ad3d&country=vi&language=vi&category=entertainment');
    
    return data;
}
export const getArticeByTechnology = async () => {
    const data = await axios.get('https://newsdata.io/api/1/news?apikey=pub_65517959beb24c9d37f12bd576f3d42a4ad3d&country=vi&language=vi&category=technology');
    
    return data;
}
export async function getArticeBysportt() {
    const data = await axios.get('https://newsdata.io/api/1/news?apikey=pub_65517959beb24c9d37f12bd576f3d42a4ad3d&country=vi&language=vi&category=sports');

    return data;
}
export const getArticeByHealth = async () => {
    const data = await axios.get('https://newsdata.io/api/1/news?apikey=pub_65517959beb24c9d37f12bd576f3d42a4ad3d&country=vi&language=vi&category=health');
    
    return data;
}

export const getArticeBySearch = async (keyword: string) => {
    const data = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_65517959beb24c9d37f12bd576f3d42a4ad3d&${keyword}&language=vi`);
    
    return data;
}