import { IonButton, IonPage } from '@ionic/react';
import './Home.scss';
import { RouteComponentProps } from 'react-router';

const Home: React.FC<RouteComponentProps> = ({ history }) => {

  return (
    <IonPage className="Home">
      <div className='wrapper'>
      <div className='제목'>떡국 먹-기</div>
      <input placeholder="아이디"></input>
      <input placeholder="비밀번호"></input>
      <IonButton onClick={() => { history.push('/game') }}>으아아아아아악</IonButton>
      </div>
    </IonPage>
  );
};

export default Home;
