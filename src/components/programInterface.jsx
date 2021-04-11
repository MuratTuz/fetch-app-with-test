
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";

import addresseData from "../model/adressData.json";
import getFetchData from "../services/getFetchData";

import Exchange from "./helperComponents/exchange";
import FBIList from "./helperComponents/fbiList";
import ChuckNorris from "./helperComponents/chuckNorris";

const ProgramInterface = () => {

    const [apiAdresses] = useState(addresseData);
    const [currentSelection, setCurrentSelection] = useState('');
    const [apiDataHTML, setApiDataHTML] = useState('');

    useEffect(() => {
        currentSelection && showApiData(currentSelection);
        // eslint-disable-next-line 
    }, [currentSelection]);

    /*const getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value);
    }*/

    const showApiData = async (selectedApiName) => {
        try {
            const apiData = await getFetchData(apiAdresses[currentSelection]);
            switch (selectedApiName) {
                case "Döviz ceviri ve sorgulama":
                    setApiDataHTML(<Exchange data={apiData} />);
                    break;

                case "FBI arananlar listesi":
                    setApiDataHTML(<FBIList data={apiData} />);
                    break;

                case "Chuck Norris veciz sözleri icin API":
                    setApiDataHTML(<ChuckNorris data={apiData} />);
                    break;
                default:
                    setApiDataHTML(<p>There is no API selection yet</p>);
            }

        } catch (error) {
            console.log(error);
            setApiDataHTML(
                <Spinner animation="border" role="status">
                    <span className="sr-only">Cannot get API data ...</span>
                </Spinner>
            )
        }
    }


    const setOptionValues = (paramApiAdresses) => {
        const optionValues = Object.entries(paramApiAdresses).map(([addresseKey, adresseValue], index) => {
            return <option key={index} data-text={addresseKey} value={adresseValue}>{addresseKey}</option>
        })
        return optionValues;
    }

    const handleFormOptionChange = (event) => setCurrentSelection(event.target.options[event.target.selectedIndex].text);

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="selectAPI">
                            <Form.Label>Select an API</Form.Label>
                            <Form.Control as="select" custom value={-1} onChange={handleFormOptionChange}>
                                <option disabled value={-1} key={-1} />
                                {setOptionValues(apiAdresses)}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    {apiDataHTML}
                </Col>
            </Row>
        </Container>
    )

}

export default ProgramInterface;