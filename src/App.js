import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMessage, faBookBookmark, faPenToSquare, faThumbsUp, faNewspaper, faUser, faBullhorn, faComment, faMagnifyingGlass, faAngleRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function App() {

  var timer = 0;
  useEffect(()=>{
    const carousel = setInterval(() => {
      timer == 0 ? timer += 33.3 : (timer == 33.3 ? timer += 33.3 : timer -= 66.6)
      document.querySelector('.test1').style.transitionDuration = '500ms';
      document.querySelector('.test1').style.transform = `translateX(-${timer}%)`;

      document.querySelector('.test2').style.transitionDuration = '500ms';
      document.querySelector('.test2').style.transform = `translateX(-${timer}%)`;
    }, 2500)

    return ()=> clearInterval(carousel);
  },[]);

  return (
    <div className="App">
      <Navbar/>
      <div className="content-box">
        <Sidebar/>
        <div style={{'float': 'left'}}>
          <img src='/img/img_visual.png'></img>
        </div>
        <div className="content">
          
          <div className='grid1'>
            <div className='grid-title'>사전</div>
            <div className='grid-table'>
              <table>
                <tr>
                  <td>우리말샘 <i><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></i></td>
                  <td>표준국어대사전 <i><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></i></td>
                </tr>
                <tr>
                  <td>한국어기초사전 <i><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></i></td>
                  <td>한국수어사전 <i><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></i></td>
                </tr>
              </table>
            </div>
          </div>



          <div className='grid2'>
            <div className='grid-title'>국어 <strong>상담</strong></div>
            <div className='grid-table'>
              <table>
                <tr>
                  <td>온라인 상담<span>(온라인가나다)</span> <i><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></i></td>
                  <td style={{'border' : '0px'}}></td>
                  <div className='phone'>
                    <div className='phone-icon'>
                      <i><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></i>
                    </div>
                    <div className='phone-text'>
                      <div className='phone-text-s'>전화 상담(가나다전화)</div>
                      <div>1234-5678</div>
                    </div>
                  </div>
                </tr>
              </table>
            </div>
          </div>

          <div className='grid3'>
            <div className='grid-title'>어문 <strong>규범</strong></div>
            <div className='grid-table'>
              <table>
                <tr>
                  <td>어문 규정 보기<i><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></i></td>
                  <td style={{'border' : '0px'}}></td>
                </tr>
                <tr>
                  <td>용례 찾기 <i><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></i></td>
                  <td style={{'border' : '0px'}}></td>
                </tr>
              </table>
            </div>
          </div>

          <div className='grid4'>
          <div className='grid-title'>공공언어 <strong>개선</strong></div>
            <div className='grid-table'>
              <table>
                <tr>
                  <td>다듬은 말<i><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></i></td>
                  <td>공공 용어 번역<i><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></i></td>
                </tr>
                <tr>
                  <td>공공언어 국민제보<i><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></i></td>
                  <td>정책용어 사전 상담<i><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></i></td>
                </tr>
              </table>
            </div>
          </div>

          <div className='grid5'>
            <div className='grid-table'>
              <div className='grid-title'><strong>교육</strong></div>
              <div className='grid-table'>
                <table>
                  <tr>
                    <td>국어문화학교<i><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></i></td>
                    <td style={{'border' : '0px'}}></td>
                  </tr>
                  <tr>
                    <td>한국어교원 자격<i><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></i></td>
                    <td style={{'border' : '0px'}}></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className='grid6'>
            
            <div className='carousel-btn1'>
              <div className='btn'></div>
              <div className='btn'></div>
              <div className='btn'></div>
              <div className='btn'></div>
              <div className='btn'></div>
            </div>
            <div className='test1'>
              <img src="img/banner1.png"></img>
              <img src="img/banner2.png"></img>
              <img src="img/banner3.png"></img>
            </div>

            <div className='carousel-btn2'>
              <div className='btn'></div>
              <div className='btn'></div>
              <div className='btn'></div>
              <div className='btn'></div>
              <div className='btn'></div>
            </div>
            <div className='test2'>
              <img src="img/banner4.png"></img>
              <img src="img/banner5.jpg"></img>
              <img src="img/banner6.png"></img>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function Navbar(){
  return(
    <div class="header">

        <div class="logo">
          <img src="/img/logo.png"></img>
        </div>
      
        <div class="search">
          <input type="text" placeholder="검색어를 입력하세요"></input>
          <div><i><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></i></div>
        </div>
      
        <div class="menu">
          <ul>
            <li>
              <div class="menu-btn">
                <button>-</button>
                <button>+</button>
              </div>
            </li>
            <li><a href="#">누리집 안내 지도</a></li>
            <li><span>|</span></li>
            <li><a href="#">ENGLISH</a></li>
            <li className='list'><i><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></i></li>
          </ul>
        
        </div>
      </div>
  )
}

function Sidebar(){
  return(

        <div className="sidebar">
          <ul>
            <li>
              <div className='popup'>
                <ul>
                  <li>사전</li>
                  <li>사전</li>
                  <li>사전</li>
                </ul>
              </div>
              <i><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon></i>
              <a>지식</a>
            </li>
            
            <li>
              <div className='popup'>
                <ul>
                  <li>사전</li>
                  <li>사전</li>
                  <li>사전</li>
                </ul>
              </div>
              <i><FontAwesomeIcon icon={faBookBookmark}></FontAwesomeIcon></i>
              <a>개선</a>
            </li>

            <li>
              <div className='popup'>
                <ul>
                  <li>사전</li>
                  <li>사전</li>
                  <li>사전</li>
                </ul>
              </div>              
              <i><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></i><a>교육</a></li>
            <li><i><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></i><a>수어/점자</a></li>
            <li><i><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon></i><a>참여</a></li>
            <li><i><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></i><a>알림</a></li>
            <li><i><FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon></i><a>자료</a></li>
            <li><i><FontAwesomeIcon icon={faComment}></FontAwesomeIcon></i><a>소개</a></li>
          </ul>
        </div>
        
  )
}
export default App;