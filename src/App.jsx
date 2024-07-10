import React from "react";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product.jsx";
import BillingForm from "./components/BillingForm/BillingForm.jsx";



const App = () => {
  return (
    <>
      <Header />

      <Product />

      <BillingForm />
    </>
  );
};

export default App;
