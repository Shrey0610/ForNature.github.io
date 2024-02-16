import React from 'react';

import './about.css'
const About = () => {
    return(
        <about id='about'>
<section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>ForNature
            <p>~It begins when you think and completes with our support.</p></h2>
          <p>
            {" "}
            Welcome to ForNature, your gateway to sustainable living through innovative AI solutions. At ForNature, we empower individuals to repurpose and recycle broken items, fostering a greener planet. Our AI-generated articles and blogs educate on recycling techniques and identify toxic materials, ensuring safe practices. With a commitment to environmental stewardship, our platform harnesses cutting-edge technology to transform waste into opportunity. Join us in our mission to reimagine consumption and preserve the Earth for future generations.
          </p>
          <br />
          <h1 style={{fontSize: '30px'}}>Future Scopes-</h1>
        </div>
        <div className="row content">
          <div className="col-lg-6">
            <p>
            1. <b>Using live camera</b> for detecting objects in the real world directly from our phones. This will help naive users to even use the website or even elderly can use it.
            One way in doing so is by using 'Pixellib' which helps in real-time object detection.
            </p>
            <br />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
            2. <b>Government</b> can largly help in promoting these kind of websites where people can easily get information they need for saving the nature. Government has the power to reach to a larger population of any country.
            </p>
          </div>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
           3. <b>Cloud-based</b> services like active NGOs or social groups maintaining themselves on it, can be a way to reach to people. For example if someone wants to <b>donate</b> anything or collect something for cheap which was previously donated, then they can use applications like this and connect with those on cloud.
            </p>
          </div>
      </div>
    </section>
    <section id="testimonials" className="testimonials section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Logo</h2>
    </div>
    <div
      className="testimonials-slider swiper"
      data-aos="fade-up"
      data-aos-delay={100}
      style={{ display: 'flex' }} // Add this inline style to make images side by side
      >
      <div className="swiper-wrapper">
        <div className="swiper-slide" style={{ flex: '0 0 50%' }}>
          <div className="testimonial-item">
        <center>
            <img
              src="/Screenshot 2024-02-15 at 22.00.50.png"
              className="testimonial-img"
              alt=""
              style={{ height: '500px', width: '100%' }}
            />
            </center>
          </div>
        </div>
        
      </div>
      <div className="swiper-pagination" />
    </div>
  </div>
</section>
</about>)
}

export default About;