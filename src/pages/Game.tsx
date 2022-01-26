import { IonPage } from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import "./Game.scss"
import { useLocation } from "react-router";

const Game: React.FC<RouteComponentProps> = ({ history }) => {

    const location:any = useLocation();

    const name = location.state.name;

    var stateTime = 7;

    const [sec, setSec] = useState(stateTime + 1);
    const [count, setCount] = useState(0);

    function disapear(id: string) {
        var go = document.getElementById(id)
        go!.style.display = "none";

        document.getElementById('share')!.style.display = 'flex';
        document.getElementById('re')!.style.display = 'flex';
        setTimeout(() => { 
            history.push({
                pathname: "/result",
                // state: 
            }) 
        }, 1000)
    }

    const time: any = useRef(stateTime);
    const timerId: any = useRef('startTimer');

    useEffect(() => {
        timerId.current = setInterval(() => {
            setSec(time.current);
            time.current -= 1;
            console.log(time.current)
        }, 1000);

        return () => clearInterval(timerId.current);
    }, []);

    useEffect(() => {
        if (time.current <= 0) {
            console.log("타임 아웃");
            clearInterval(timerId.current);
        }
    }, [sec]);

    if (sec == 4) {
        document.getElementById('game')!.style.display = 'flex';
        document.getElementById('startTimer')!.style.display = 'none';
    }

    if (sec == 1) {
        disapear('clicker')
    }

    function twitter() {
        var sendText = "떡국게임"; // 전달할 텍스트
        var sendUrl = "localhost"; // 전달할 URL
        window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
    }

    function facebook() {
        var sendUrl = "localhost"; // 전달할 URL
        window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
    }

    return (
        <IonPage className="Game">
            <h1 id="startTimer">{sec - 4}</h1>
            <h1>{name}</h1>
            <div id="game">
                <p>{count}</p>
                <div id="clicker" onClick={() => setCount(count + 1)}>
                    떡국이야
                </div>
                <div id="share" onClick={twitter}>트위터</div>
                <div id="share" onClick={facebook}>페이스북</div>
                <div id='re' onClick={() => window.location.reload()}>다시하기</div>
            </div>
        </IonPage>
    )
}

export default Game