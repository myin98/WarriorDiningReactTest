import React from 'react';
import Header from './/components/Header';
import NavBar from './/components/NavBar';
import HeroSection from './/components/HeroSection';
import MainContent from './/components/MainContent';
import ReviewSection from './/components/ReviewSection';
import Footer from './/components/Footer';

//import './App.css'; // 스타일 시트 연결
import './/css/home.css';
import './/css/default.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <HeroSection />
      <MainContent />
      <ReviewSection />
      <Footer />
    </div>
  );
}

export default App;
