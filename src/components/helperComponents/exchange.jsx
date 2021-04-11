

const Exchange = (props) => {
    const rates = props.data.rates ?
        Object.entries(props.data.rates).map(([key, value]) => { return <li key={key}><b>{key}</b>:<i>{value}</i></li> })
        : '';

    return (
        <>
            <h3>Base : {props.data.base}</h3>
            <h3>Date : {props.data.date}</h3>
            <br />
            <h3><u>Rates</u></h3>
            <ul>
                {rates}
            </ul>
        </>
    )
}


export default Exchange;