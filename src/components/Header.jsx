import { useState, useEffect, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import profileSquare1 from '@img/profile/profile-square-1.jpg'

function Header(props) {
  useEffect(() => {
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function (e) {
        e.preventDefault()
        this.parentNode.classList.toggle('active')
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active')
        e.stopImmediatePropagation()
      })
    })

    document.addEventListener('scroll', toggleScrolled)
    window.addEventListener('load', toggleScrolled)
    //window.addEventListener('load', navmenuScrollspy)
    //document.addEventListener('scroll', navmenuScrollspy)

    return () => {
      document.addEventListener('scroll', toggleScrolled)
      window.addEventListener('load', toggleScrolled)
      // window.addEventListener('load', navmenuScrollspy)
      // document.addEventListener('scroll', navmenuScrollspy)
    }
  }, [])

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <a href="/home" className="logo d-flex align-items-center"></a>

        <nav id="navmenu" className="navmenu">
          <div className="profile-img">
            <img src={profileSquare1} alt="" className="img-fluid rounded-circle" />
          </div>

          <a href="/" className="logo d-flex align-items-center justify-content-center">
            <h1 className="sitename">정영관</h1>
          </a>

          <div className="social-links text-center">
            <a href="https://github.com/swarthyPig" target="_blank" className="gitHub">
              <i className="bi bi-github"></i>
            </a>
            <a href="mailto:rhks12345@naver.com" target="_blank" className="email">
              <i className="bi bi-envelope"></i>
            </a>
            <a href="tel:010-2037-2229" target="_blank" className="tel">
              <i className="bi bi-telephone"></i>
            </a>
          </div>

          <ul>
            <li>
              <HashLink smooth to="/#hero">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#resume">
                Resume
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#portfolio">
                Portfolio
              </HashLink>
            </li>
            {/* <li>
              <a href="#services">Services</a>
            </li> */}
            {/* <li className="dropdown">
              <a href="#">
                <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li> */}
          </ul>
          <i
            className="mobile-nav-toggle d-xl-none bi bi-list"
            onClick={() => {
              let mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle')

              document.querySelector('body').classList.toggle('mobile-nav-active')
              mobileNavToggleBtn.classList.toggle('bi-list')
              mobileNavToggleBtn.classList.toggle('bi-x')
            }}
          ></i>
        </nav>
      </div>
    </header>
  )
}

function toggleScrolled() {
  const selectBody = document.querySelector('body')
  const selectHeader = document.querySelector('#header')
  if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return
  window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled')
}

function navmenuScrollspy() {
  let navmenulinks = document.querySelectorAll('.navmenu a')

  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return
    let section = document.querySelector(navmenulink.hash)
    if (!section) return
    let position = window.scrollY + 200
    if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'))
      navmenulink.classList.add('active')
    } else {
      navmenulink.classList.remove('active')
    }
  })
}
export default Header
