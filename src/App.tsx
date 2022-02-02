import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Game from './pages/Game';
import './App.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Result from './pages/Result';
import { useState } from 'react';

setupIonicReact();

const App: React.FC = () => {

  const [DgDict, setDgDict] = useState<object>({
    BasicDg: 0,
    PoisonDg: 0,
    IceDg: 0,
    ChocoDg: 0,
    TangerineDg: 0,
    GinsengDg: 0,
    GoldDg: 0,
    RainbowDg: 0,
    DiamondDg: 0
  });

  const [name, setName] = useState<string>();

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path='/home' component={Home}></Route>
          {/* <Route
            path='/home'
            render={() => <Home setName={setName}/>} /> */}
          <Route
            path='/game'
            render={() => <Game DgDict={DgDict} setDgDict={setDgDict} />} />
          <Route
            path='/result'
            render={() => <Result name={name} DgDict={DgDict}/>} />
          <Route path="/"><Redirect to="/home" /></Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
