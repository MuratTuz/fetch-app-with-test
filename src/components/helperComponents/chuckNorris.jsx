

const ChuckNorris = (props) => {

    return (
        <>
            {/* eslint-disable-next-line jsx-a11y/alt-text*/}
            <img src={props.data.icon_url} />
            <br />
            <h2><u>The Word</u></h2>
            <h3>{props.data.value}</h3>
            <br />
            <h3>Created at : {props.data.created_at}</h3>
            <h3>Updated at : {props.data.updated_at}</h3>
            <br />

        </>
    )
}


export default ChuckNorris;