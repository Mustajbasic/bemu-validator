import React from 'react';
import Gist from 'react-gist';
import './style.css';
import {
    Grid,
    Row,
    Col,
    Alert,
    Well
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

class BemuValidatorPage extends React.Component {
    componentDidMount() {
        document.title = 'Bemu Validator';
    }
    render() {
        return <Grid>
            <Row>
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h1>Bemu Validator</h1>
                </Col>
            </Row>
            <Row>
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>

                    <p>Bemu Validator is a simple, easy customizable JavaScript object validator. It contains many ways of validating predefined and also custom defined objects in a configurable manner. The package has no dependencies making it small and portable. Every method has multiple tests, with 100% code coverage making it somewhat well tested. </p>
                </Col>
            </Row>
            <Row>
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>Setting up</h2>
                    <p>To install the package simply do</p>
                    <Well>npm i --save bemu-validator</Well>
                    <p>After installaton you can require or import it to your project as</p>
                    <Well>const bemuValidator = require('bemu-validator');</Well>
                    <p>or</p>
                    <Well>import bemuValidator from 'bemu-validator';</Well>
                    <p>Or you can require any individual validator via the destructuring assignment syntax</p>
                    <Gist id="2641c01dcf60441106713577999b8067" />
                </Col>
            </Row>
            <Row>
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>Example usage</h2>
                    <p>This package provides many methods of validating strings, booleans, numbers, custom objects and array. All (except the bolean validator) validators are configurable,
                        for an example, we want to validate if a variable is an alphanumberic string including the '@' character, longer than 3 characters and shorted than 16, we do it in one of the following two ways</p>
                    <Gist id="90dd81a2ee7c1e330a3d82f4ac5fa9f0" />
                    <Alert bsStyle="info">
                    For more examples and documentation please refer to <strong><Link to="/bemu-validator/docs">/docs</Link></strong>
                    </Alert>
                </Col>
            </Row>
        </Grid>
    }
}

export default BemuValidatorPage;