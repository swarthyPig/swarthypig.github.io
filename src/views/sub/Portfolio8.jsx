import { React, useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import portfolio8Img from '@img/sub/sub-8.png'

function Portfolio8() {
  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Portfolio Details</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="/#/home">Home</a>
              </li>
              <li className="current">Portfolio Details</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="portfolio-details-media">
                <div className="main-image">
                  <div className="portfolio-details-slider swiper init-swiper" data-aos="zoom-in">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img src={portfolio8Img} alt="Portfolio Image" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tech-stack-badges" data-aos="fade-up" data-aos-delay="300">
                  <span>Egov Framework</span>
                  <span>Java</span>
                  <span>Spring Framework</span>
                  <span>REST API</span>
                  <span>MSA</span>
                  <span>JSP</span>
                  <span>jQuery</span>
                  <span>Bootstrap</span>
                  <span>MariaDB</span>
                  <span>MSSQL</span>
                  <span>Jeus</span>
                  <span>WebToB</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="portfolio-details-content">
                <div className="project-meta">
                  <div className="badge-wrapper">
                    <span className="project-badge">
                      <b>사기업</b>
                    </span>
                  </div>
                  <div className="date-client">
                    <div className="meta-item">
                      <i className="bi bi-buildings"></i>
                      <span>(주)KNN</span>
                    </div>
                  </div>
                </div>

                <h2 className="project-title">홈페이지 및 앱 구축</h2>

                <div className="project-overview">
                  <p className="lead">기업에서 운영 중이던 레거시 시스템을 분석하여 새로운 홈페이지 및 프로그램 시스템을 고도화 개발 하였습니다.</p>
                  <br />

                  <div className="accordion project-accordion" id="portfolio-details-projectAccordion">
                    <div className="accordion-item" data-aos="fade-up">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#portfolio-details-collapse-1" aria-expanded="true" aria-controls="collapseOne">
                          <i className="bi bi-clipboard-data me-2"></i> 프로젝트 정보
                        </button>
                      </h2>
                      <div id="portfolio-details-collapse-1" className="accordion-collapse collapse show" data-bs-parent="#portfolio-details-projectAccordion">
                        <div className="accordion-body">
                          <ul className="achievements">
                            <li>기간 : 2022-09-01 ~ 2022-12-01</li>
                            <li>개발 환경 : Egov3.9 Spring Framework, REST API, MSA, java1.8, jsp, javascript, jQuery, Bootstrap</li>
                            <li>DBMS : MariaDB, MSSQL</li>
                            <li>서버 및 배포 : Linux Ubuntu 18.04, Jeus, WebToB</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item" data-aos="fade-up" data-aos-delay="100">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#portfolio-details-collapse-2"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <i className="bi bi-award me-2"></i> 업무 및 역할
                        </button>
                      </h2>
                      <div id="portfolio-details-collapse-2" className="accordion-collapse collapse" data-bs-parent="#portfolio-details-projectAccordion">
                        <div className="accordion-body">
                          <ul className="achievements">
                            <li>KNN에서 진행하는 각종 뉴스, 기사, 프로그램 관리 기능 개발</li>
                            <li>클린센터 제보 기능 개발</li>
                            <li>VOD 재생 관련 기능 개발</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Portfolio8
