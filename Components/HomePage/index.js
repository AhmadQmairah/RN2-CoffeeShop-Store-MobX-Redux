import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import {
  getCoffeeShops,
  setCoffeeShopsLoading
} from "../../store/actions/coffeeActions";
// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

class HomePage extends Component {
  componentDidMount() {
    this.props.loading();
    this.props.getCoffeShops();
  }

  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeList />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCoffeShops: () => dispatch(getCoffeeShops()),
    loading: () => dispatch(setCoffeeShopsLoading())
  };
};

const mapStateToProps = state => {
  return {
    items: state.cart.items,
    coffeeShops: state.coffee.coffeeShops,
    loading: state.coffee.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
