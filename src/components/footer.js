import React from 'react'

export default function Footer() {
  return (
    <footer>
    <div className="social">
      <p>
        <span>
          <i className="fab fa-facebook"></i>
          <a style={{color: "rgb(95, 95, 255)"}} href="https://web.facebook.com/SamiKalamallah">Facebook</a>
          |
          <i className="fab fa-instagram"></i>
          <a style={{color: "orange"}} href="https://www.instagram.com/samikalamallah/">Instagram</a>
          |
          <i className="fab fa-linkedin"></i>
          <a style={{color: "skyblue"}} href="https://www.linkedin.com/in/samikalamallah/">LinkedIn</a>
          |
          <i className="fab fa-whatsapp "></i>
          <a style={{color: "green"}} href="https://wa.me/+6289657511134">WhatsApp</a>
        </span>
      </p>
    </div>
    <div className="copyright">
      <p>
        `Copyright &copy; 2020 | Made with ❤️ by Sami Kalammallah`
      </p>
    </div>
  </footer>
  )
}
