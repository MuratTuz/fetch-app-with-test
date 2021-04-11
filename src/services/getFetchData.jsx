

const getFetchData = async (adresse, param) => {
    const apiData = await fetch(adresse);
    const dataJson = await apiData.json();

    return dataJson;

}


export default getFetchData;