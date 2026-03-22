import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer(props) {
  let navigate = useNavigate()
  let contextPath = props.contextPath

  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="copyright text-center ">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">Style</strong> <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="social-links d-flex justify-content-center">
          <a href="">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="credits">
          Designed by <a href="#">Bootstrap</a> | <a href="">React</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
