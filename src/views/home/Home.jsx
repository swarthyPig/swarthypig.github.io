import { useState, useEffect, useRef, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactTyped } from 'react-typed'
import { HashLink } from 'react-router-hash-link'

import PureCounter from '@srexi/purecounterjs'

import profileSquare1 from '@img/profile/profile-square-1.jpg'
import signature1 from '@img/misc/signature-1.png'

import portfolio1 from '@img/sub/sub-1.jpg'
import portfolio2 from '@img/sub/sub-2.jpg'
import portfolio3 from '@img/sub/sub-3.jpg'
import portfolio4 from '@img/sub/sub-4.jpg'
import portfolio5 from '@img/sub/sub-5.png'
import portfolio6 from '@img/sub/sub-6.jpg'
import portfolio7 from '@img/sub/sub-7.jpg'
import portfolio8 from '@img/sub/sub-8.png'
import portfolio9 from '@img/sub/sub-9.jpg'
import portfolio10 from '@img/sub/sub-10.jpg'
import portfolio11 from '@img/sub/sub-11.jpg'
import portfolio12 from '@img/sub/sub-12.png'

function Home(props) {
  let apiUrl = props.apiUrl
  let contextPath = props.contextPath
  let navigate = useNavigate()

  const today = new Date()
  const birthDate = new Date('1995-03-30')

  useEffect(() => {
    new PureCounter()
  }, [])

  return (
    <main className="main">
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 hero-content" data-aos="fade-right" data-aos-delay="100">
              <div className="content-wrapper">
                <h1 className="hero-title">
                  Full-Stack Developer
                  <span className="typed" data-typed-items="Designer, Developer, Freelancer, Artist">
                    <ReactTyped strings={['<br> 정영관 입니다.']} typeSpeed={100} backSpeed={50} loop={false} />
                  </span>
                </h1>
                <p className="lead">
                  저는 6년의 기간 동안
                  <br /> 대학교, 관공서, 사기업의 홈페이지 및 시스템을 개발 하였으며
                  <br /> 생산업에 종사하는 기업의 ERP, MES를 구축하였습니다.
                </p>
                <div className="hero-stats" data-aos="fade-up" data-aos-delay="200">
                  <div className="stat-item">
                    <span className="purecounter" data-purecounter-start="0" data-purecounter-end="21" data-purecounter-duration="2">
                      0
                    </span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat-item">
                    <span className="purecounter" data-purecounter-start="0" data-purecounter-end="6" data-purecounter-duration="2">
                      0
                    </span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="purecounter" data-purecounter-start="0" data-purecounter-end={today.getFullYear() - birthDate.getFullYear()} data-purecounter-duration="2">
                      0
                    </span>
                    <span className="stat-label">Age</span>
                  </div>
                </div>

                <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
                  <HashLink smooth to="/#portfolio" className="btn btn-primary">
                    View My Projects
                  </HashLink>
                  <HashLink smooth to="/#resume" className="btn btn-outline">
                    Go Resume
                  </HashLink>
                </div>

                <div className="social-links" data-aos="fade-up" data-aos-delay="400">
                  {/* <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a> */}
                  {/* <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a> */}
                  <a href="https://github.com/swarthyPig" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="mailto:rhks12345@naver.com" target="_blank">
                    <i className="bi bi-envelope"></i>
                  </a>
                  <a href="tel:010-2037-2229" target="_blank">
                    <i className="bi bi-telephone"></i>
                  </a>
                  {/* <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6 hero-image" data-aos="fade-left" data-aos-delay="200">
              <div className="image-container">
                <div className="floating-elements">
                  <div className="floating-card card-1" data-aos="zoom-in" data-aos-delay="300">
                    <i className="bi bi-code-slash"></i>
                    <span>Front-End</span>
                  </div>
                  <div className="floating-card card-2" data-aos="zoom-in" data-aos-delay="400">
                    <i className="bi bi-server"></i>
                    <span>Back-End</span>
                  </div>
                  <div className="floating-card card-3" data-aos="zoom-in" data-aos-delay="500">
                    <i className="bi bi-lightning"></i>
                    <span>Deployment</span>
                  </div>
                </div>
                <img src={profileSquare1} alt="Portfolio Hero" className="img-fluid hero-main-image" />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about section">
        <div className="container section-title">
          <h2>About</h2>
          <p>경력 & 기술스택</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
              <div className="profile-image-wrapper">
                <div className="profile-image">
                  <img src={profileSquare1} alt="Profile" className="img-fluid" />
                </div>
                <div className="signature-section">
                  <img src={signature1} alt="Signature" className="signature" />
                  {/* <p className="quote">Building meaningful digital experiences through creative code.</p> */}
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
              <div className="about-content">
                <div className="intro">
                  <h2>Hi, I'm Jeong - a Full Stack Developer</h2>
                  <p>
                    저는 풀스택 개발자로서 개발, 배포, 운영, 유지보수 경험을 통해 서비스의 라이프사이클 전체 과정을 경험하였습니다. 그 동안 쌓아온 경험을 바탕으로 신규 서비스의 빠른 시장 안착과
                    안정적인 운영에 기여하고싶습니다.
                  </p>
                </div>

                <div className="skills-grid">
                  <div className="skill-item" data-aos="zoom-in" data-aos-delay="400">
                    <div className="skill-icon">
                      <i className="bi bi-code-slash"></i>
                    </div>
                    <h4>Frontend Dev</h4>
                    <p>
                      사용자 중심의 <br />
                      직관적인 인터페이스
                    </p>
                  </div>
                  <div className="skill-item" data-aos="zoom-in" data-aos-delay="450">
                    <div className="skill-icon">
                      <i className="bi bi-server"></i>
                    </div>
                    <h4>Backend Dev</h4>
                    <p>
                      효율적인 데이터 모델링 <br />
                      안정적인 API 서버
                    </p>
                  </div>
                  <div className="skill-item" data-aos="zoom-in" data-aos-delay="500">
                    <div className="skill-icon">
                      <i className="bi bi-lightning"></i>
                    </div>
                    <h4>Deployment</h4>
                    <p>
                      안정적인 배포 프로세스 <br />
                      운영 및 유지보수
                    </p>
                  </div>
                </div>

                <div className="journey-timeline" data-aos="fade-up" data-aos-delay="300">
                  <div className="timeline-item">
                    <div className="year">2023.01</div>
                    <div className="description">(주)BSP솔루션 입사 </div>
                  </div>
                  <div className="timeline-item">
                    <div className="year">2020.02</div>
                    <div className="description">(주)엑스아이커뮤니케이션즈 입사</div>
                  </div>
                  <div className="timeline-item">
                    <div className="year">2020.02</div>
                    <div className="description">인제대학교 컴퓨터 시뮬레이션 학과 졸업</div>
                  </div>
                </div>

                {/* <div className="cta-section" data-aos="fade-up" data-aos-delay="400">
                  <div className="fun-fact">
                    <span className="emoji">☕</span>
                    <span className="text">Coffee-fueled designer based in Portland</span>
                  </div>
                  <div className="action-buttons">
                    <a href="#portfolio" className="btn btn-primary">
                      View My Work
                    </a>
                    <a href="#" className="btn btn-outline">
                      Download Resume
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-8">
              <div className="skills-grid">
                <div className="row g-4">
                  <div className="col-md-6" data-aos="flip-left" data-aos-delay="200">
                    <div className="skill-card">
                      <div className="skill-header">
                        <i className="bi bi-code-slash"></i>
                        <h3>Frontend Development</h3>
                      </div>
                      <div className="skills-animation">
                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">React</span>
                            <span className="skill-percentage">65%</span>
                          </div>
                          <div className="skill-bar progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">Jquery</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <div className="skill-bar progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">JSP & Thymeleaf</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <div className="skill-bar progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="flip-left" data-aos-delay="300">
                    <div className="skill-card">
                      <div className="skill-header">
                        <i className="bi bi-server"></i>
                        <h3>Backend Development</h3>
                      </div>
                      <div className="skills-animation">
                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">Spring Boot</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <div className="skill-bar progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">JPA</span>
                            <span className="skill-percentage">65%</span>
                          </div>
                          <div className="skill-bar progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">Android & Flutter</span>
                            <span className="skill-percentage">65%</span>
                          </div>
                          <div className="skill-bar progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="flip-left" data-aos-delay="400">
                    <div className="skill-card">
                      <div className="skill-header">
                        <i className="bi bi-hdd-stack"></i>
                        <h3>RDBMS</h3>
                      </div>
                      <div className="skills-animation">
                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">MS-SQL</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <div className="skill-bar progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">Mysql & MariaDB</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <div className="skill-bar progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">Oracle</span>
                            <span className="skill-percentage">75%</span>
                          </div>
                          <div className="skill-bar progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="flip-left" data-aos-delay="500">
                    <div className="skill-card">
                      <div className="skill-header">
                        <i className="bi bi-lightning"></i>
                        <h3>DevOps</h3>
                      </div>
                      <div className="skills-animation">
                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">Nginx & Tomcat</span>
                            <span className="skill-percentage">85%</span>
                          </div>
                          <div className="skill-bar progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">Docker</span>
                            <span className="skill-percentage">75%</span>
                          </div>
                          <div className="skill-bar progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">TeamCity</span>
                            <span className="skill-percentage">75%</span>
                          </div>
                          <div className="skill-bar progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="skills-summary" data-aos="fade-left" data-aos-delay="200">
                <h3>Professional Expertise</h3>
                <p>Spring Boot와 Mybatis & JPA를 활용한 REST API 설계에 능숙하며, JWT와 Redis를 활용한 세션 관리 경험으로 대규모 트래픽에서도 안정적인 인증 시스템을 기대할 수 있습니다.</p>

                <div className="summary-stats">
                  <div className="stat-item" data-aos="zoom-in" data-aos-delay="300">
                    <div className="stat-circle">
                      <i className="bi bi-trophy"></i>
                    </div>
                    <div className="stat-info">
                      <span className="stat-number">6+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                  </div>

                  <div className="stat-item" data-aos="zoom-in" data-aos-delay="400">
                    <div className="stat-circle">
                      <i className="bi bi-diagram-3"></i>
                    </div>
                    <div className="stat-info">
                      <span className="stat-number">21+</span>
                      <span className="stat-label">Projects Completed</span>
                    </div>
                  </div>

                  <div className="stat-item" data-aos="zoom-in" data-aos-delay="500">
                    <div className="stat-circle">
                      <i className="bi bi-person"></i>
                    </div>
                    <div className="stat-info">
                      <span className="stat-number">{today.getFullYear() - birthDate.getFullYear()}</span>
                      <span className="stat-label">Age</span>
                    </div>
                  </div>
                </div>

                <div className="skills-badges" data-aos="fade-up" data-aos-delay="600">
                  <h4>My favorite skill</h4>
                  <div className="badge-list">
                    <div className="skill-badge">React</div>
                    <div className="skill-badge">Spring Boot</div>
                    <div className="skill-badge">MS-SQL</div>
                    <div className="skill-badge">Docker</div>
                    <div className="skill-badge">SI & SM</div>
                    <div className="skill-badge">ERP</div>
                    <div className="skill-badge">CI & CD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="resume section">
        <div className="container section-title">
          <h2>Resume</h2>
          <p>경력 & 개선점</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <div className="experience-section">
                <div className="section-header">
                  <h2>
                    <i className="bi bi-briefcase"></i> Professional Journey
                  </h2>
                  <p className="section-subtitle">현재까지 재직하였던 회사에서의 역할, 업무 및 개선하였던 점</p>
                </div>

                <div className="experience-cards">
                  <div className="experience-card" data-aos="zoom-in" data-aos-delay="300">
                    <div className="card-header">
                      <div className="role-info">
                        <h3>(주)BSP Solution</h3>
                        <h4>R&D팀 선임연구원</h4>
                      </div>
                      <span className="duration">2023.01 ~ 2025.11</span>
                    </div>
                    <div className="card-body">
                      <p>생산업에 종사하는 기업의 ERP, MES 및 기업을 위한 MRO를 구축하였으며 운영 및 유지보수를 같이 진행하였습니다.</p>
                      <ul className="achievements">
                        <li>업무 외적으로 사내 개발서버 시스템 시각화 및 Docker관리</li>
                        <li>개발서버 강제 셧다운 이슈로 발생한 문제 해결 및 대처 지침서 작성 </li>
                        <li>React를 도입하여 기존 자사홈페이지 마이그레이션 </li>
                      </ul>
                    </div>
                  </div>

                  <div className="experience-card" data-aos="zoom-in" data-aos-delay="300">
                    <div className="card-header">
                      <div className="role-info">
                        <h3>(주)엑스아이커뮤니케이션즈</h3>
                        <h4>SI개발팀 대리</h4>
                      </div>
                      <span className="duration">2020.02 ~ 2023.01</span>
                    </div>
                    <div className="card-body">
                      <p>대학교, 관공서, 사기업의 홈페이지 및 시스템을 개발하였으며 운영 및 유지보수를 같이 진행하였습니다.</p>
                      <ul className="achievements">
                        <li>홈페이지 템플릿 빌더 프로젝트 진행 중 메인페이지 로딩시간을 20초 -&gt; 1초로 개선</li>
                        <li>당시 회사의 기술스택에 없던 JPA를 신규 도입하여 성공적으로 프로젝트 마무리</li>
                        <li>전자정부 프레임워크의 경험을 통해 공공기관에서 요구하는 표준&보안에 대한 이해</li>
                        <li>업무 외적으로 배포 시스템 재구축 및 Docker & 배포 관련 통합 안내서 작성</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="education-section">
                <div className="section-header">
                  <h2>
                    <i className="bi bi-mortarboard"></i> Academic Excellence
                  </h2>
                  <p className="section-subtitle">학력 및 교육과 자격증</p>
                </div>

                <div className="education-timeline">
                  <div className="timeline-track"></div>

                  <div className="education-item" data-aos="slide-up" data-aos-delay="300">
                    <div className="timeline-marker"></div>
                    <div className="education-content">
                      <div className="degree-header">
                        <h3>Computer Simulation 학사 졸업</h3>
                        <span className="year">2014.03 ~ 2020.02</span>
                      </div>
                      <h4 className="institution">인제대학교</h4>
                      <p>
                        * 학점 4.05/4.5 <br /> * 논문/작품 - [머신러닝, 데이터 분석]라즈베리파이와 온습도 센서를 사용하여 얻은 데이터와 실제 사용자가 제출한 쾌적도 간의 상관계수를 구하였습니다. 해당
                        변인들을 사용하여 머신러닝을 통해 특정 온습도에서 느끼는 쾌적도를 산출해 낼 수 있습니다.
                      </p>
                    </div>
                  </div>

                  <div className="education-item" data-aos="slide-up" data-aos-delay="400">
                    <div className="timeline-marker"></div>
                    <div className="education-content">
                      <div className="degree-header">
                        <h3>정보처리기사 취득</h3>
                        <span className="year">2019.08</span>
                      </div>
                      <h4 className="institution">한국산업인력공단</h4>
                      <p>3학년 겨울방학부터 준비하여 자격이 생기던 해에 바로 취득하였습니다.</p>
                    </div>
                  </div>

                  <div className="education-item" data-aos="slide-up" data-aos-delay="500">
                    <div className="timeline-marker"></div>
                    <div className="education-content">
                      <div className="degree-header">
                        <h3>비트교육센터 JAVA & C & Algorithm 과정 수료</h3>
                        <span className="year">2019.07 ~ 2019.09</span>
                      </div>
                      <h4 className="institution">비트교육센터</h4>
                      <p>대학교 재학 당시 여름방학 기간동안 진행하였던 교육으로 현재 경험의 토대나 기초가 될 만큼 배울 것이 많은 과정이었습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="services" className="services section">
        <div className="container section-title">
          <h2>Services</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item">
                <div className="icon">
                  <i className="bi bi-stack"></i>
                </div>
                <h3>Digital Solutions</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.</p>
                <div className="card-links">
                  <a href="#" className="link-item">
                    Learn More
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item">
                <div className="icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h3>Secure Systems</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                <div className="card-links">
                  <a href="#" className="link-item">
                    Learn More
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item">
                <div className="icon">
                  <i className="bi bi-graph-up"></i>
                </div>
                <h3>Growth Strategy</h3>
                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem.</p>
                <div className="card-links">
                  <a href="#" className="link-item">
                    Learn More
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item">
                <div className="icon">
                  <i className="bi bi-cpu"></i>
                </div>
                <h3>AI Integration</h3>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>
                <div className="card-links">
                  <a href="#" className="link-item">
                    Learn More
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item">
                <div className="icon">
                  <i className="bi bi-cloud-arrow-up"></i>
                </div>
                <h3>Cloud Services</h3>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.</p>
                <div className="card-links">
                  <a href="#" className="link-item">
                    Learn More
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item">
                <div className="icon">
                  <i className="bi bi-gear"></i>
                </div>
                <h3>Process Automation</h3>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                <div className="card-links">
                  <a href="#" className="link-item">
                    Learn More
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="portfolio" className="portfolio section">
        <div className="container section-title">
          <h2>Portfolio</h2>
          <p>현재 까지 진행한 여러 프로젝트를 소개합니다.</p>
        </div>

        <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="200">
              <li data-filter="*" className="filter-active">
                <i className="bi bi-grid-3x3"></i> All Projects
              </li>
              <li data-filter=".filter-unigov">
                <b>대학교 & 관공서</b>
              </li>
              <li data-filter=".filter-com">
                <b>사기업</b>
              </li>
              <li data-filter=".filter-erp">
                <b>ERP</b>
              </li>
            </ul>

            <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">
              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-unigov">
                <article className="portfolio-entry">
                  <figure className="entry-image">
                    <img src={portfolio1} className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">국립 부경대학교</div>
                        <h3 className="entry-title">학생역량개발과 인재관리플랫폼 구축</h3>
                        <div className="entry-links">
                          {/* <a
                            href={portfolio1}
                            className="glightbox"
                            data-gallery="portfolio-gallery-ui"
                            data-glightbox="title: Mobile Banking App; description: Praesent commodo cursus magna, vel scelerisque nisl consectetur."
                          >
                            <i className="bi bi-arrows-angle-expand"></i>
                          </a> */}
                          <a href="/#/sub/1">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-unigov">
                <article className="portfolio-entry">
                  <figure className="entry-image">
                    <img src={portfolio2} className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">국립 부경대학교</div>
                        <h3 className="entry-title">BK21 사업관리 시스템 구축</h3>
                        <div className="entry-links">
                          {/* <a
                            href={portfolio2}
                            className="glightbox"
                            data-gallery="portfolio-gallery-development"
                            data-glightbox="title: E-Learning Platform; description: Nulla vitae elit libero, a pharetra augue mollis interdum."
                          >
                            <i className="bi bi-arrows-angle-expand"></i>
                          </a> */}
                          <a href="/#/sub/2">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-unigov">
                <article className="portfolio-entry">
                  <figure className="entry-image">
                    <img src={portfolio3} className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">국립 부경대학교</div>
                        <h3 className="entry-title">비교과 플랫폼 개발</h3>
                        <div className="entry-links">
                          {/* <a
                            href={portfolio3}
                            className="glightbox"
                            data-gallery="portfolio-gallery-photography"
                            data-glightbox="title: Urban Architecture; description: Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
                          >
                            <i className="bi bi-arrows-angle-expand"></i>
                          </a> */}
                          <a href="/#/sub/3">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-unigov">
                <article className="portfolio-entry">
                  <figure className="entry-image">
                    <img src={portfolio4} className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">국립 울산대학교</div>
                        <h3 className="entry-title">홈페이지 템플릿 빌더 시스템 개발</h3>
                        <div className="entry-links">
                          {/* <a
                            href={portfolio4}
                            className="glightbox"
                            data-gallery="portfolio-gallery-marketing"
                            data-glightbox="title: Social Media Campaign; description: Quis autem vel eum iure reprehenderit qui in ea voluptate."
                          >
                            <i className="bi bi-arrows-angle-expand"></i>
                          </a> */}
                          <a href="/#/sub/4">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-unigov">
                <article className="portfolio-entry">
                  <figure className="entry-image">
                    <img src={portfolio5} className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">동남정보보호지원센터</div>
                        <h3 className="entry-title">컨설팅 관리 시스템 제작</h3>
                        <div className="entry-links">
                          {/* <a
                            href={portfolio5}
                            className="glightbox"
                            data-gallery="portfolio-gallery-ui"
                            data-glightbox="title: Smart Home Interface; description: At vero eos et accusamus et iusto odio dignissimos ducimus."
                          >
                            <i className="bi bi-arrows-angle-expand"></i>
                          </a> */}
                          <a href="/#/sub/5">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-com">
                <article className="portfolio-entry">
                  <figure className="entry-image">
                    <img src={portfolio6} className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">(주)한국콩스버그마리타임</div>
                        <h3 className="entry-title">근무관리 시스템 개발</h3>
                        <div className="entry-links">
                          {/* <a
                            href={portfolio6}
                            className="glightbox"
                            data-gallery="portfolio-gallery-development"
                            data-glightbox="title: Cloud Management System; description: Temporibus autem quibusdam et aut officiis debitis."
                          >
                            <i className="bi bi-arrows-angle-expand"></i>
                          </a> */}
                          <a href="/#/sub/6">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-com">
                <article className="portfolio-entry">
                  <figure className="entry-image">
                    <img src={portfolio7} className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">예비창업자</div>
                        <h3 className="entry-title">VAN대리점 통합관리플랫폼 개발</h3>
                        <div className="entry-links">
                          {/* <a
                            href={portfolio7}
                            className="glightbox"
                            data-gallery="portfolio-gallery-photography"
                            data-glightbox="title: Nature Collection; description: Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
                          >
                            <i className="bi bi-arrows-angle-expand"></i>
                          </a> */}
                          <a href="/#/sub/7">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-com">
                <article className="portfolio-entry">
                  <figure className="entry-image">
                    <img src={portfolio8} className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">(주)KNN</div>
                        <h3 className="entry-title">홈페이지 및 앱 구축</h3>
                        <div className="entry-links">
                          {/* <a
                            href={portfolio8}
                            className="glightbox"
                            data-gallery="portfolio-gallery-marketing"
                            data-glightbox="title: Brand Strategy; description: Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum."
                          >
                            <i className="bi bi-arrows-angle-expand"></i>
                          </a> */}
                          <a href="/#/sub/8">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-com">
                <article className="portfolio-entry">
                  <figure className="entry-image">
                    <img src={portfolio9} className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">(주)글로티스</div>
                        <h3 className="entry-title">호흡근 강화 연계 및 모니터링</h3>
                        <div className="entry-links">
                          {/* <a
                            href={portfolio9}
                            className="glightbox"
                            data-gallery="portfolio-gallery-ui"
                            data-glightbox="title: Smart Home Interface; description: At vero eos et accusamus et iusto odio dignissimos ducimus."
                          >
                            <i className="bi bi-arrows-angle-expand"></i>
                          </a> */}
                          <a href="/#/sub/9">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-erp">
                <article className="portfolio-entry">
                  <figure className="entry-image">
                    <img src={portfolio10} className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">부산자동차부품공업협동조합</div>
                        <h3 className="entry-title">BAICA ERP 구축</h3>
                        <div className="entry-links">
                          {/* <a
                            href={portfolio10}
                            className="glightbox"
                            data-gallery="portfolio-gallery-development"
                            data-glightbox="title: Cloud Management System; description: Temporibus autem quibusdam et aut officiis debitis."
                          >
                            <i className="bi bi-arrows-angle-expand"></i>
                          </a> */}
                          <a href="/#/sub/10">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-erp">
                <article className="portfolio-entry">
                  <figure className="entry-image">
                    <img src={portfolio11} className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">(주)한림인텍</div>
                        <h3 className="entry-title">한림 ERP 구축</h3>
                        <div className="entry-links">
                          {/* <a
                            href={portfolio11}
                            className="glightbox"
                            data-gallery="portfolio-gallery-photography"
                            data-glightbox="title: Nature Collection; description: Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
                          >
                            <i className="bi bi-arrows-angle-expand"></i>
                          </a> */}
                          <a href="/#/sub/11">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-erp">
                <article className="portfolio-entry">
                  <figure className="entry-image">
                    <img src={portfolio12} className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">(주)BSP솔루션</div>
                        <h3 className="entry-title">DAON MRO 구축</h3>
                        <div className="entry-links">
                          {/* <a
                            href={portfolio12}
                            className="glightbox"
                            data-gallery="portfolio-gallery-marketing"
                            data-glightbox="title: Brand Strategy; description: Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum."
                          >
                            <i className="bi bi-arrows-angle-expand"></i>
                          </a> */}
                          <a href="/#/sub/12">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
