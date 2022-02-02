import './Home.scss';
import { useHistory } from 'react-router';

interface HomeProps {
  setName: any;
}

const Home: React.FC<HomeProps> = ( prop ) => {

  const history = useHistory()

  function goGame() {
    let inputValue = (document.getElementById("name") as HTMLInputElement).value;

    if (inputValue) {
      prop.setName(inputValue)
      history.push( "/game")
    } else {
      alert("닉네임을 입력해주세요.")
    }
  }

  return (
    <div className="Home">
      <div className='background'>
        <img src='/assets/우측나무.png' className='우측나무'/>
        <img src='/assets/좌측나무.png' className='좌측나무'/>
        <img src='/assets/우향구름.png' className='우향구름'/>
        <img src='/assets/좌향구름.png' className='좌향구름'/>
        <div className="sun"></div>
      </div>
      <div className='wrapper'>
        <div className='제목'>나는 얼마나<br/>더 살까?</div>
        <div className='작은제목'>떡국을 먹어서 내맘대로 늘리자!</div>
        <div className='떡국'><img src='/assets/BasicDg.png'/></div>
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
    </div>
  );
};

export default Home;
