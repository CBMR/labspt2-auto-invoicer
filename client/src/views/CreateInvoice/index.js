// import packages
import React, { Component } from "react";

//import styles
import "./CreateInvoice.css";

//import components
import CreateInvoiceForm from "../../components/CreateInvoiceForm";

export default class index extends Component {
  //No state held - views only render
  render() {
    return (
      <div>
        Views Only.
        <CreateInvoiceForm click={this.props.click} />
      </div>
    );
  }
}
