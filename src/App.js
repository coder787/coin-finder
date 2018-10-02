import React from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Coin from "./components/Coin";

class App extends React.Component {
  state = {
    price: undefined,
    percentage: undefined,
    low: undefined,
    high: undefined,
    error: undefined
  }

  getCoin = async (e) => {
    e.preventDefault();
    const coin = e.target.elements.coin.value;
    const currency = e.target.elements.currency.value;
    const api_call = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=${currency}`);
    const data = await api_call.json();
    console.log("data is now ", data);
    console.log("message is now ", data['Message']);
    if (data.Response === 'Error') {
      this.setState({
        price: undefined,
        percentage: undefined,
        low: undefined,
        high: undefined,
        error: data['Message']
      });
    } else if (coin && currency) {
      this.setState({
        price: data['DISPLAY'][coin][currency]['PRICE'],
        percentage: data['DISPLAY'][coin][currency]['CHANGEPCT24HOUR'],
        low: data['DISPLAY'][coin][currency]['LOWDAY'],
        high: data['DISPLAY'][coin][currency]['HIGHDAY'],
        error: ""
      });
    } else {
      this.setState({
        price: undefined,
        percentage: undefined,
        low: undefined,
        high: undefined,
        error: "Please enter the values"
      });
    }
  }


  render() {
    return(
      <div>
      <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getCoin={this.getCoin} />
                    <Coin
                      price={this.state.price} 
                      percentage={this.state.percentage}
                     low={this.state.low}
                      high={this.state.high}
                     error={this.state.error}
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;