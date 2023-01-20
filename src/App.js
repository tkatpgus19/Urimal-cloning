import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMessage, faBookBookmark, faPenToSquare, faThumbsUp, faNewspaper, faUser, faBullhorn, faComment, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content-box">
        <Sidebar/>

        <div className="content">
          <div className='grid1'>1</div>
          <div className='grid2'>1</div>
          <div className='grid3'>1</div>
          <div className='grid4'>1</div>
          <div className='grid5'>1</div>
          <div className='grid6'>
            <div>1</div>
            <div>1</div>
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