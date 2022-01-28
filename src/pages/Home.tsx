import { IonButton, IonPage } from '@ionic/react';
import './Home.scss';
import { RouteComponentProps } from 'react-router';

const Home: React.FC<RouteComponentProps> = ({ history }) => {

  function goGame() {
    let inputValue = (document.getElementById("name") as HTMLInputElement).value;

    if (inputValue) {
      history.push({
        pathname: "/game",
        state: { name: inputValue }
      })
    } else {
      alert("닉네임을 입력해주세요.")
    }
  }

  return (
    <IonPage className="Home">
      <div className='wrapper'>
        <div className='제목'>나는 얼마나<br/>더 살까?</div>
        <div className='작은제목'>떡국을 먹어서 내맘대로 늘리자!</div>
        <div className='떡국'>떡국자리</div>
        <div className='nameInput'>
          <img src='/assets/떡국 입력.svg'/>
          <input spellCheck="false" type="text" placeholder="닉네임을 입력해주세요" id="name"></input>
        </div>
        <div className='goButton' onMouseUp={goGame} >
          <img src='/assets/떡국 시작.svg'/>
          <p>떡국 먹으러 가기</p>
        </div>
      </div>
      <footer>
        <span>team 귤</span>
        <span>비즈니스 문의 : aa187523@gmail.com</span>
      </footer>
    </IonPage>
  );
};

export default Home;
