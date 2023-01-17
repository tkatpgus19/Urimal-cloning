import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;