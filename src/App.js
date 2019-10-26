import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}

export default App;
