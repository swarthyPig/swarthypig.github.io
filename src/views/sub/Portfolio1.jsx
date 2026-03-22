import { React, useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import portfolio1Img from '@img/sub/sub-1.jpg'

function Portfolio1() {
  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Portfolio Details</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="/home">Home</a>
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
                        <img src={portfolio1Img} alt="Portfolio Image" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tech-stack-badges" data-aos="fade-up" data-aos-delay="300">
                  <span>Egov Framework</span>
                  <span>Java</span>
                  <span>Spring Framework</span>
                  <span>JSP</span>
                  <span>jQuery</span>
                  <span>Bootstrap</span>
                  <span>MariaDB</span>
                  <span>Oracle</span>
                  <span>Tomcat</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="portfolio-details-content">
                <div className="project-meta">
                  <div className="badge-wrapper">
                    <span className="project-badge">
                      <b>대학교 & 관공서</b>
                    </span>
                  </div>
                  <div className="date-client">
                    <div className="meta-item">
                      <i className="bi bi-buildings"></i>
                      <span>부경대학교</span>
                    </div>
                  </div>
                </div>

                <h2 className="project-title">학생역량개발과 인재관리플랫폼 구축</h2>

                <div className="project-overview">
                  <p className="lead">
                    부경대학교 전산팀과 협업하여 인재관리플랫폼을 구축하였습니다.
                    <br /> 해당 프로젝트는 학생들의 취업 지원을 위한 시스템으로, 학사정보시스템과 연동하여 학생 개인의 인적정보를 표시하고, 개별 취업공고 등록 및 입사지원 프로그램을 개발하였습니다.
                    또한, 사람인, 잡코리아, 워크넷 등 외부 채용사이트와의 연동 프로그램도 개발하여 학생들이 다양한 채용 정보를 쉽게 확인할 수 있도록 하였습니다.
                  </p>
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
                            <li>기간 : 2021-01-01 ~ 2021-03-01</li>
                            <li>개발 환경 : Egov3.9 Spring Framework, java1.8, jsp, javascript, jQuery, Bootstrap</li>
                            <li>DB : MariaDB, Oracle</li>
                            <li>서버 및 배포 : Windows Server, Tomcat8.5</li>
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
                            <li>학사정보시스템과 연동하여 학생개인 인적정보 표시</li>
                            <li>개별 취업공고 등록 및 입사지원 프로그램 개발</li>
                            <li>사람인, 잡코리아, 워크넷 등 외부 채용사이트와의 연동 프로그램 개발</li>
                            <li>적성검사, 이력서 작성 등의 관련기능 개발</li>
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

export default Portfolio1
