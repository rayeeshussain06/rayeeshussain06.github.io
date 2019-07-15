import React, { Component } from 'react';
import Header from './Components/header/header';
import About from './Components/about/about';
import Resume from './Components/resume/resume';
 import Portfolio from './Components/portfolio/portfolio';
import Testimonials from  './Components/testimonials/testimonials';
import ContactUs from './Components/contactus/contactus';
import Footer from './Components/footer/footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
         <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;