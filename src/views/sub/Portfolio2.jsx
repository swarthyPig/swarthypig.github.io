import { React, useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import portfolio2Img from '@img/sub/sub-2.jpg'

function Portfolio2() {
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
                        <img src={portfolio2Img} alt="Portfolio Image" className="img-fluid" />
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

                <h2 className="project-title">BK21 사업관리 시스템 제작/구축</h2>

                <div className="project-overview">
                  <p className="lead">
                    부경대학교 대학원의 BK21 사업관리 시스템 구축하였습니다.
                    <br /> 해당 프로젝트는 대학원 연구원들의 과제, 사업등의 공고등록을 시작으로 신청부터 평가까지 전체적으로 관리하는 시스템입니다.
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
                            <li>기간 : 2021-05-01 ~ 2021-08-01</li>
                            <li>개발 환경 : Egov3.9 Spring Framework, java1.8, jsp, javascript, jQuery, Bootstrap</li>
                            <li>DB : MariaDB, Oracle</li>
                            <li>서버 및 배포 : Linux Ubuntu 18.04, Tomcat8.5</li>
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
                            <li>사업 및 과제의 등록, 신청, 심사, 선정, 완료까지 전체적인 업무 프로세스 관리</li>
                            <li>사업 및 과제의 대시보드 제작 및 참여연구원, 평가, 과제 관리</li>
                            <li>복잡한 반려 프로세스 구현 및 데이터의 무결성 유지</li>
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

export default Portfolio2
