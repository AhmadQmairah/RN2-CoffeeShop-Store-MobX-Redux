import React, { Component } from "react";

// NativeBase Components
import { List, Content, H1, Spinner } from "native-base";

// Store

// Component
import CoffeeItem from "./CoffeeItem";
import { connect } from "react-redux";

class CoffeeList extends Component {
  render() {
    let shops;
    if (this.props.coffeeShops) {
      shops = this.props.coffeeShops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    if (this.props.loading) {
      return <Spinner color="white" />;
    } else {
      return (
        <Content>
          <List>{shops}</List>
        </Content>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    items: state.cart.items,
    coffeeShops: state.coffee.coffeeShops,
    loading: state.coffee.loading
  };
};

export default connect(mapStateToProps)(CoffeeList);
