import './footer.css'

const Footer = () => {
  return (
      <div class="footer">
        <div class="address">
          <span class="logo">
            <img src="./img/logo.png" alt="" srcset="" />
          </span>
        </div>
        <div class="madeby">
          <p>
            designed and developed by
            <span class="developer-name"> TinyBig Studios</span>
          </p>
        </div>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Developer Contact</a>
          <a href="#">Documentation</a>
          <a href="#">Support</a>
        </div>
      </div>
  )
}

export default Footer
