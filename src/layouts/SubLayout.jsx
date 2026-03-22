import { React, useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Footer from '../components/Footer'

import routes from '../routes.jsx'

function SubLayout(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <a href="/home" className="logo d-flex align-items-center"></a>
        </div>
      </header>
      <Routes>
        {routes.map((a, i) => {
          return <Route path={a.path} element={a.component} key={i} exact />
        })}
      </Routes>
      <Footer contextPath={props.contextPath} />
    </>
  )
}

export default SubLayout
