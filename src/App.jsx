import { useEffect } from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'

import MainLayout from '/src/layouts/MainLayout.jsx'
import SubLayout from '/src/layouts/SubLayout.jsx'
import { useSelector, shallowEqual } from 'react-redux'

import '@vendor/bootstrap/js/bootstrap.bundle.min.js'
import AOS from 'aos'
import GLightbox from 'glightbox'
import ImagesLoaded from 'imagesloaded'
import Isotope from 'isotope-layout'

import '@vendor/bootstrap/css/bootstrap.min.css'
import '@vendor/bootstrap-icons/bootstrap-icons.css'
import 'aos/dist/aos.css'
import '@vendor/glightbox/css/glightbox.min.css'
import '@css/main.css'

function App() {
  const { contextPath, apiUrl } = useSelector(state => state.global, shallowEqual)

  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle')

  useEffect(() => {
    aosInit()

    new GLightbox({
      selector: '.glightbox',
    })

    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle(mobileNavToggleBtn)
        }
      })
    })

    document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry'
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*'
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order'

      let initIsotope
      ImagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        })
      })

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
        filters.addEventListener(
          'click',
          function () {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active')
            this.classList.add('filter-active')
            initIsotope.arrange({
              filter: this.getAttribute('data-filter'),
            })
            if (typeof aosInit === 'function') {
              aosInit()
            }
          },
          false
        )
      })
    })

    window.addEventListener('load', function (e) {
      if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
          setTimeout(() => {
            let section = document.querySelector(window.location.hash)
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth',
            })
          }, 100)
        }
      }
    })

    return () => {}
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<MainLayout contextPath={contextPath} apiUrl={apiUrl} />} exact />
      <Route path="/*" element={<SubLayout contextPath={contextPath} apiUrl={apiUrl} />} />
      <Route path="*" element={<div>없는 페이지에요</div>} />
    </Routes>
  )
}

function aosInit() {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  })
}

function mobileNavToogle(mobileNavToggleBtn) {
  document.querySelector('body').classList.toggle('mobile-nav-active')
  mobileNavToggleBtn.classList.toggle('bi-list')
  mobileNavToggleBtn.classList.toggle('bi-x')
}

export default App
