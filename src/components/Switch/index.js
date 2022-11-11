import React, { Component } from 'react';
import Switch from 'react-switch';
import { Container } from './styles';

export class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <Container>
        <span>Deseja receber Notificações via WhatsApp?</span>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </Container>
    );
  }
}
