import { React, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../views/home/Home'

import '@vendor/waypoints/noframework.waypoints.js'

function MainLayout(props) {
  let contextPath = props.contextPath
  let apiUrl = props.apiUrl

  useEffect(() => {
    skillsProgress()

    window.addEventListener('load', toggleScrollTop)
    window.addEventListener('scroll', toggleScrollTop)

    return () => {
      window.removeEventListener('load', toggleScrollTop)
      window.removeEventListener('scroll', toggleScrollTop)
    }
  }, [])

  return (
    <>
      <Header contextPath={contextPath} apiUrl={apiUrl} />
      <Home contextPath={contextPath} apiUrl={apiUrl} />
      <Footer contextPath={contextPath} apiUrl={apiUrl} />

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
        onClick={e => {
          e.preventDefault()
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  )
}

function toggleScrollTop() {
  let scrollTop = document.querySelector('.scroll-top')
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active')
  }
}

const skillsProgress = () => {
  let skillsAnimation = document.querySelectorAll('.skills-animation')

  skillsAnimation.forEach(item => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar')
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        })
      },
    })
  })
}

export default MainLayout

// return으로 이벤트 해제 해주면서 쓰는 방법
/* useEffect(() => {
    window.addEventListener('scroll', function () {
        console.log('스크롤 움직움직');
        if (document.documentElement.scrollTop >= 50) {
            document.querySelector('header').classList.add('active');
            document.getElementsByClassName('goBtn')[0].style.display = 'block';
        } else {
            document.querySelector('header').classList.remove('active');
            document.getElementsByClassName('goBtn')[0].style.display = 'none';
        }
    });

    return () => {
        window.removeEventListener('scroll', function () {});
    };
}, []); */

// 디바운스 방법
// 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것
// 버튼이 살짝 늦게 뜨는 현상
// 페이지가 전체 렌더링 됨 부하 심함 최적화 필요
/* const [currScroll, setCurrScroll] = useState('');
const [tmpQuery, setTmpQuery] = useState(currScroll);

window.addEventListener('scroll', function () {
	console.log('스크롤 움직움직');

	setTmpQuery(document.documentElement.scrollTop);
});

useEffect(() => {
	const debounce = setTimeout(() => {
		console.log('호호호출');
		if (tmpQuery >= 50) {
			document.querySelector('header').classList.add('active');
			document.getElementsByClassName('goBtn')[0].style.display = 'block';
		} else {
			document.querySelector('header').classList.remove('active');
			document.getElementsByClassName('goBtn')[0].style.display = 'none';
		}
		return setCurrScroll(tmpQuery);
	}, 300); //->setTimeout 설정
	return () => clearTimeout(debounce); //->clearTimeout 바로 타이머 제거
}, [tmpQuery]); */

// 쓰로틀링 방법
// 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 것
/* const [currScroll, setCurrScroll] = useState('');
const [throttle, setThrottle] = useState(false);

window.addEventListener('scroll', function () {
	console.log('스크롤 움직움직');
	if (throttle) return;
	if (!throttle) {
		setThrottle(true);
		setTimeout(async () => {
			setCurrScroll(document.documentElement.scrollTop);
			setThrottle(false);
		}, 300);
	}
});

useEffect(() => {
	(async () => {
		console.log('스크롤 움직움직');
		if (document.documentElement.scrollTop >= 50) {
			document.querySelector('header').classList.add('active');
			document.getElementsByClassName('goBtn')[0].style.display = 'block';
		} else {
			document.querySelector('header').classList.remove('active');
			document.getElementsByClassName('goBtn')[0].style.display = 'none';
		}
	})();
}, [currScroll]); */
