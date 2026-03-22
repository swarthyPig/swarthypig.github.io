import { React, useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import portfolio4Img from '@img/sub/sub-4.jpg'

function Portfolio4() {
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
                        <img src={portfolio4Img} alt="Portfolio Image" className="img-fluid" />
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
                  <span>MS-SQL</span>
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
                      <b>대학교 & 관공서</b>
                    </span>
                  </div>
                  <div className="date-client">
                    <div className="meta-item">
                      <i className="bi bi-buildings"></i>
                      <span>울산대학교</span>
                    </div>
                  </div>
                </div>

                <h2 className="project-title">홈페이지 템플릿 빌더 시스템 개발</h2>

                <div className="project-overview">
                  <p className="lead">
                    울산대학교 전산팀과 협업하여 대표 홈페이지 및 템플릿 빌더 시스템을 개발하였습니다.
                    <br /> 템플릿 빌더 시스템이란? 학과의 홈페이지와 교수 홈페이지를 포함하여 총 100개 이상의 홈페이지 제작 수요가 있을 때 관리자가 드래그 앤 드롭 방식으로 간편하게 홈페이지를 제작 할
                    수 있는 솔루션 입니다.
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
                            <li>기간 : 2022-05-01 ~ 2022-09-01</li>
                            <li>개발 환경 : Egov3.9 Spring Framework, java1.8, jsp, javascript, jQuery, Bootstrap</li>
                            <li>DB : MariaDB, MSSQL</li>
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
                            <li>템플릿을 적용하여 제작한 페이지의 초기 로딩 속도를 20초 -&gt; 1초로 개선</li>
                            <li>드래그 앤 드롭 방식을 사용한 홈페이지 제작 기능 구현</li>
                            <li>서브(2차) 도메인을 사용하여 100개 이상의 홈페이지를 추가 비용없이 제작</li>
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

export default Portfolio4
