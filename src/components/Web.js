import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';


export default class Web extends React.Component {
    render() {
        return (
          <div>Mi primer componente
          <ButtonToolbar>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
          </ButtonToolbar>
          </div>
        );
    }
}