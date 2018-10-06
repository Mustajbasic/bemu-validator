import React from 'react';
import Gist from 'react-gist';
import './style.css';
import {
    Grid,
    Row,
    Col,
    Table,
    Panel,
    ListGroup,
    ListGroupItem,
    Button
} from 'react-bootstrap';


class BemuValidatorDocs extends React.Component {
    componentDidMount() {
        document.title = 'Bemu Validator - Docs';
    }
    render() {
        return <Grid id="bemu-validator-documentation">
            <Row>
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h1>Documentation for Bemu Validator</h1>
                </Col>
            </Row>
            <Row>
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <Panel>
                        <Panel.Heading>
                            <Panel.Title toggle>
                                Page contents (click here)
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                            <ListGroup>
                                <ListGroupItem href="#isString">isString</ListGroupItem>
                                <ListGroupItem href="#isNumber">isNumber</ListGroupItem>
                                <ListGroupItem href="#isBoolean">isBoolean</ListGroupItem>
                                <ListGroupItem href="#isUrl">isUrl</ListGroupItem>
                                <ListGroupItem href="#isEmail">isEmail</ListGroupItem>
                                <ListGroupItem href="#isArray">isArray</ListGroupItem>
                                <ListGroupItem href="#bundleWithConfig">bundleWithConfig</ListGroupItem>
                                <ListGroupItem href="#stringValidator">stringValidator</ListGroupItem>
                                <ListGroupItem href="#numberValidator">numberValidator</ListGroupItem>
                                <ListGroupItem href="#booleanValidator">booleanValidator</ListGroupItem>
                                <ListGroupItem href="#urlValidator">urlValidator</ListGroupItem>
                                <ListGroupItem href="#emailValidator">emailValidator</ListGroupItem>
                                <ListGroupItem href="#arrayValidator">arrayValidator</ListGroupItem>
                                <ListGroupItem href="#customValidator">customValidator</ListGroupItem>
                                <ListGroupItem href="#objectValidator">objectValidator</ListGroupItem>
                            </ListGroup>
                        </Panel.Collapse>
                    </Panel>
                    
                </Col>
            </Row>
            <Row id="isString">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>isString(object [, config])</h2>
                    <p>This method check if the given object is a valid string and checks if it satisfies given config fields</p>
                    <h3>Config fields</h3>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>Value</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>minLength</td>
                                <td>number</td>
                                <td>Checks if the string is longer than the given number.</td>
                            </tr>
                            <tr>
                                <td>maxLength</td>
                                <td>number</td>
                                <td>Checks if the string is shorter than the given number.</td>
                            </tr>
                            <tr>
                                <td>reduceSpaces</td>
                                <td>boolean</td>
                                <td>Trims the string and reduces multiple space to only one before checking for minLength and maxLength.</td>
                            </tr>
                            <tr>
                                <td>alphaOnly</td>
                                <td>boolean</td>
                                <td>Checks if the string is letters only.</td>
                            </tr>
                            <tr>
                                <td>alphanumericOnly</td>
                                <td>boolean</td>
                                <td>Checks if the string is letters and numbers only.</td>
                            </tr>
                            <tr>
                                <td>allowedCharacters</td>
                                <td>object</td>
                                <td>Object containing the definitions for allowedCharacters.</td>
                            </tr>
                            <tr>
                                <td>allowedCharacters.allowLetters</td>
                                <td>boolean</td>
                                <td>If true, letters will be allowed in string. Required in allowedCharacters.</td>
                            </tr>
                            <tr>
                                <td>allowedCharacters.allowNumbers</td>
                                <td>boolean</td>
                                <td>If true, numbers will be allowed in string. Required in allowedCharacters.</td>
                            </tr>
                            <tr>
                                <td>allowedCharacters.specialCharacters</td>
                                <td>array</td>
                                <td>characters from array will be allowed in the string. NOTE: The array can only contain strings of length 1(single character). Required in allowedCharacters.</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h3>Example usage</h3>
                    <Gist id="85b6f0836348baf46585e19de39ce35d"/>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="isNumber">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>isNumber(object [, config])</h2>
                    <p>This method check if the given object is a valid number and checks if it satisfies given config fields</p>
                    <h3>Config fields</h3>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>Value</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>min</td>
                                <td>number</td>
                                <td>Checks if the number is bigger than the given number.</td>
                            </tr>
                            <tr>
                                <td>max</td>
                                <td>number</td>
                                <td>Checks if the number is smaller than the given number.</td>
                            </tr>
                            <tr>
                                <td>integer</td>
                                <td>boolean</td>
                                <td>Checks if the number is an integer.</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h3>Example usage</h3>
                    <Gist id="d8046443e0090e0baf0b51720c5b0476"/>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="isBoolean">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>isBoolean(object)</h2>
                    <p>This method check if the given object is a valid boolean</p>
                    <h3>Example usage</h3>
                    <Gist id="658363c5744d67b1ab85991d9f8d3d5a"/>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="isUrl">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>isUrl(object [, config])</h2>
                    <p>This method check if the given object is a valid url and checks if it satisfies given config fields</p>
                    <p>NOTE: This method may have give some false positives, if you find any please report them at the <a href="https://github.com/Mustajbasic/bemu-validator/issues">GitHub repo</a> so I can investigate them and fix them asap. </p>
                    <h3>Config fields</h3>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>Value</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>httpsOnly</td>
                                <td>boolean</td>
                                <td>Allows only https urls</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h3>Example usage</h3>
                    <Gist id="c18f8e5741a3b7e256374ceaab7dc7c1"/>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="isEmail">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>isEmail(object [, config])</h2>
                    <p>This method check if the given object is a valid email and checks if it satisfies given config fields</p>
                    <h3>Config fields</h3>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>Value</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>minNameLength</td>
                                <td>number</td>
                                <td>Defines the minimum length of the email name (everything before @, not really sure what is the propper name for this)</td>
                            </tr>
                            <tr>
                                <td>maxNameLength</td>
                                <td>number</td>
                                <td>Defines the maximum length of the email name (everything before @, not really sure what is the propper name for this)</td>
                            </tr>
                            <tr>
                                <td>domains</td>
                                <td>array</td>
                                <td>Defines the allowed domains, eg. ['gmail.com', 'yahoo.com']</td>
                            </tr>
                            <tr>
                                <td>domainNames</td>
                                <td>array</td>
                                <td>Defines the allowed domain names but does not care about extension, eg. ['gmail', 'yahoo']</td>
                            </tr>
                            <tr>
                                <td>domainExtensions</td>
                                <td>array</td>
                                <td>Defines the allowed domain extensions but does not care about names, eg. ['com', 'io']</td>
                            </tr>
                        </tbody>

                    </Table>
                    <p>NOTE: Some email domains like 'email.co.uk' may be problematic to use with domainNames and domainExtensions so please for that matter use domains while I work on the fix</p>
                    <h3>Example usage</h3>
                    <Gist id="eda76ba574c81e345ce408ea0f3c8f58"/>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="isArray">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>isArray(object [, config])</h2>
                    <p>This method check if the given object is a valid array and checks if it satisfies given config fields</p>
                    <h3>Config fields</h3>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>Value</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>minLength</td>
                                <td>number</td>
                                <td>Defines the minimum amount of elements that the array has to have.</td>
                            </tr>
                            <tr>
                                <td>maxLength</td>
                                <td>number</td>
                                <td>Defines the maximum amount of elements that the array can have.</td>
                            </tr>
                            <tr>
                                <td>elementType</td>
                                <td>function</td>
                                <td>Function that every element of the array is tested against. The prototype of the function is (object) => boolean. 
                                    For this you can use any of the built in validation functions like 'isString', 'isNumber' ..., 
                                    but if you want to add config to the function you have to bundle it with <a href="#bundleWithConfig">bundleWithConfig</a> function.</td>
                            </tr>
                        </tbody>

                    </Table>
                    <h3>Example usage</h3>
                    <Gist id="9590c73cfb0b823c4749b6726f8a1c1a"/>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="bundleWithConfig">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>bundleWithConfig(validator, config)</h2>
                    <p>This method bundles the validation function with config fo enable easy custom validation functions. 
                        Also this method is used for passing config to to the 'elementType' config property of <a href="#isArray">isArray</a> method.</p>
                    <h3>Example usage</h3>
                    <Gist id="0b863803327ad19474b9bddcd30c4360"/>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="stringValidator">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>stringValidator(isRequired [, config])</h2>
                    <p>Creates a string validator object which is used in <a href="#objectValidator">objectValidator</a></p>
                    <p>The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from <a href="#isString">isString</a> method</p>
                    <h3>Example usage</h3>
                    <p>The example uage is provided in the <a href="#objectValidatorExample">Example usage</a> of objectValidator</p>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="numberValidator">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>numberValidator(isRequired [, config])</h2>
                    <p>Creates a number validator object which is used in <a href="#objectValidator">objectValidator</a></p>
                    <p>The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from <a href="#isNumber">isNumber</a> method</p>
                    <h3>Example usage</h3>
                    <p>The example uage is provided in the <a href="#objectValidatorExample">Example usage</a> of objectValidator</p>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="booleanValidator">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>booleanValidator(isRequired [, config])</h2>
                    <p>Creates a boolean validator object which is used in <a href="#objectValidator">objectValidator</a></p>
                    <p>The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from <a href="#isBoolean">isBoolean</a> method</p>
                    <h3>Example usage</h3>
                    <p>The example uage is provided in the <a href="#objectValidatorExample">Example usage</a> of objectValidator</p>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="urlValidator">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>urlValidator(isRequired [, config])</h2>
                    <p>Creates a url validator object which is used in <a href="#objectValidator">objectValidator</a></p>¸
                    <p>The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from <a href="#isUrl">isUrl</a> method</p>
                    <h3>Example usage</h3>
                    <p>The example uage is provided in the <a href="#objectValidatorExample">Example usage</a> of objectValidator</p>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="emailValidator">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>emailValidator(isRequired [, config])</h2>
                    <p>Creates a email validator object which is used in <a href="#objectValidator">objectValidator</a></p>
                    <p>The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from <a href="#isEmail">isEmail</a> method</p>
                    <h3>Example usage</h3>
                    <p>The example uage is provided in the <a href="#objectValidatorExample">Example usage</a> of objectValidator</p>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="arrayValidator">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>arrayValidator(isRequired [, config])</h2>
                    <p>Creates a array validator object which is used in <a href="#objectValidator">objectValidator</a></p>
                    <p>The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from <a href="#isArray">isArray</a> method</p>
                    <h3>Example usage</h3>
                    <p>The example uage is provided in the <a href="#objectValidatorExample">Example usage</a> of objectValidator</p>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="customValidator">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>customValidator(isRequired, isValid [, config])</h2>
                    <p>The 'isRequired' argument is a boolean and indicates if the field is required. </p>
                    <p>In case you need a custom validator, create a function that takes one object (and config if you desire), and returns true or false. Pass the function as the 'isValid' argument and add any aditional config.</p>
                    <h3>Example usage</h3>
                    <p>The example uage is provided in the <a href="#objectValidatorExample">Example usage</a> of objectValidator</p>
                    <Button href="#bemu-validator-documentation">Return to top</Button>
                </Col>
            </Row>
            <Row id="objectValidator">
                <Col mdOffset={2} md={8} lgOffset={2} lg={8} smOffset={1} sm={10}>
                    <h2>objectValidator(properties)</h2>
                    <p>This method allows you to crreate a validation function for any kind of object. The 'properties' argument is an object which is a reflection of the object we want to test.
                        This means that propery names of the object are the same as in the object we want to test but the values are validators (stringValidator, numberValidator, booleanValidator, urlValidator, emailValidator, arrayValidator and customValidator).
                    </p>
                    <h3 id="objectValidatorExample">Example usage</h3>
                    <p>In this first example we create an object validator and test an object against it</p>
                    <Gist id="f7bc36e4cac7bdbee3068479cc2d127e"/>
                    <p>If a fied is not required we simply set the isRequired flag to false as seen in this simple example</p>
                    <Gist id="baf04173743233da9f4a966e3d72984f"/>
                    <p>We can create more complex validators like in the following example. Lets combine isBook and isPerson from the last two examples.</p>
                    <Gist id="1c33f16e45bfa0a2cf23224beb6e1758"/>
                </Col>
            </Row>
        </Grid>
    }
}

export default BemuValidatorDocs;