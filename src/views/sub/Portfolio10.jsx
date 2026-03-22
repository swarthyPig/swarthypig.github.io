import { React, useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import portfolio10Img from '@img/sub/sub-10.jpg'

function Portfolio10() {
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
                        <img src={portfolio10Img} alt="Portfolio Image" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tech-stack-badges" data-aos="fade-up" data-aos-delay="300">
                  <span>Spring Boot</span>
                  <span>Java</span>
                  <span>DevExtreme</span>
                  <span>JSP</span>
                  <span>jQuery</span>
                  <span>Bootstrap</span>
                  <span>MS-SQL</span>
                  <span>Redis</span>
                  <span>Tomcat</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="portfolio-details-content">
                <div className="project-meta">
                  <div className="badge-wrapper">
                    <span className="project-badge">
                      <b>ERP & MES</b>
                    </span>
                  </div>
                  <div className="date-client">
                    <div className="meta-item">
                      <i className="bi bi-buildings"></i>
                      <span>부산자동차부품공업협동조합</span>
                    </div>
                  </div>
                </div>

                <h2 className="project-title">BAICA ERP 구축</h2>

                <div className="project-overview">
                  <p className="lead">부산자동차부품공업협동조합의 ERP를 구축하였습니다.</p>
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
                            <li>개발 환경 : Spring Boot 2.7.* , java 11, DevExtreme, jsp, javascript, jQuery, Bootstrap</li>
                            <li>DB : MSSQL</li>
                            <li>세션,캐시 : Redis</li>
                            <li>서버 및 배포 : Windows Server, Apache, Tomcat 10, Docker</li>
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
                            <li>ERP를 제로베이스 부터 구현하였습니다.</li>
                            <li>ERP에서 사용하는 대부분의 모듈들을 구현하였습니다.</li>
                            <li>ERP에 특화된 DevExtreme으로 구현하였습니다.</li>
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

export default Portfolio10
