import React, { Component } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ButtonAppBar from "./components/AppBar";
import InputForm from "./components/InputForm";
import Map from "./components/Map";
import styled from "styled-components";
import { Route, Switch, withRouter } from "react-router-dom";
import Submit from "./components/Submit";

const MapWrapper = styled.div`
  width: 100%;
  // justify-content: center;
  // align-items: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: "Jaren",
        birthMonth: "1",
        birthDay: "1",
        birthYear: "1",
        lastName: "Lynch",
        zip: "94109",
        address: "745 hyde street",
        phoneNumber: "1122298",
        email: "jaren.d.lynch@gmail.com",
      },
    };
  }

  // history = useHistory();
  onSubmit = (data) => {
    console.log(data);
    this.setState({
      formData: data,
    });
    this.props.history.push("/submit");
  };

  render() {
    return (
      <div className="App">
        <Route component={ButtonAppBar} />
        <Switch>
          <Route
            exact
            path="/"
            // onChange={this.handleNotifications()}
            component={() => <InputForm submit={this.onSubmit} />}
          />
          <Route
            path="/submit"
            // onChange={this.handleNotifications()}
            component={() => (
              <>
                <Submit data={this.state.formData} />
                <MapWrapper>
                  <Map formData={this.state.formData} />
                </MapWrapper>
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
