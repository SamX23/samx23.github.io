import React from "react";
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div style={{ color: "purple"}}>
      <Header hText='Hello, this page is using Gatsby !' />
      <Footer/>
    </div>
  );
}
