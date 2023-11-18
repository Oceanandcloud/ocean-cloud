import React, {useEffect} from 'react'
import './contactsection.css'
import gsap from 'gsap'

const ContactSection = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      var tl = gsap.timeline();
      tl.from('.contact-image img', {opacity: 0, duration:1})
      .from('.addresses', {opacity: 0, y: 50, duration: 1})
      .from('.phone', {opacity: 0, y: 50, duration: 1})
      .from('.email', {opacity: 0, y: 50, duration: 1})


    });
    return () => ctx.revert();

  }, [])  

  return (
    <div class="contact-container">
      <div class="contact-section">
        <div class="contact-image">
          <img src="./img/qr.png" />
          <h3>Scan this qr code to go to our Whatsapp</h3>
        </div>
        <div class="contact-details">
          <h1>You can also reach out via:</h1>
          <div class="addresses">
            <h3>Socials</h3>
            <div className='social-icons'>
              <a href="https://www.facebook.com/OceanandCloud?mibextid=ZbWKwL" target='_blank'><img src="./img/facebook.svg" alt=""/></a>
              <a href="https://instagram.com/oceanandcloud?igshid=ZGUzMzM3NWJiOQ==" target='_blank'><img src="./img/instagram.svg" alt=""/></a>
              <a href="https://wa.me/message/7OHBKDUWTYLMB1" target='_blank'><img src="./img/whatsapp.svg" alt="" /></a>
            </div>
          </div>
          <div class="phone">
            <h3>Phone</h3>
            <p>
            +2347041826946
            </p>
          </div>
          <div class="email">
            <h3>Email</h3>
            <p>cc@oceanandcloud.store</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
