import { IonPage } from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import "./Game.scss"
import { useLocation } from "react-router";
import { Dg } from "../components/Dg";


const Game: React.FC<RouteComponentProps> = ({ history }) => {

    //history.push로 준 변수 받아오기
    const location: any = useLocation();
    const name = location.state.name;

    //전체 시간 설정
    var stateTime = 7;


    const [sec, setSec] = useState(stateTime + 1);

    //떡국 먹은 횟수 - 제거 예정
    const [count, setCount] = useState(0);

    //떡국 사전
    const [DgDict, setDgDict] = useState({});

    //결과 페이지로 넘어가기
    function disapear(id: string) {
        var go = document.getElementById(id)
        go!.style.display = "none";

        document.getElementById('share')!.style.display = 'flex';
        document.getElementById('re')!.style.display = 'flex';
        setTimeout(() => {
            history.push({
                pathname: "/result",
                state: { DgDict: DgDict, name: name } //떡국 사전, 사용자 이름 넘겨주기
            })
        }, 1000)
    }

    //타이머 
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

    //타이머 끝내는 함수
    useEffect(() => {
        if (time.current <= 0) {
            console.log("타임 아웃");
            clearInterval(timerId.current);
        }
    }, [sec]);

    //시간 마다 뭐할지.
    if (sec == 4) {
        document.getElementById('game')!.style.display = 'flex';
        document.getElementById('startTimer')!.style.display = 'none';
    }

    if (sec == 1) {
        disapear('clicker')
    }

    //타이머 끝

    //공유
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
                </div> {/* 없어질 예정 */}
                <Dg DgDict={DgDict} setDgDict={setDgDict} kind="BasicDg"></Dg>

                {
                    Math.random()
                }
                <div id="share" onClick={twitter}>트위터</div>
                <div id="share" onClick={facebook}>페이스북</div>
                <div id='re' onClick={() => {
                    setDgDict({})
                    window.location.reload()
                }}>다시하기</div>
            </div>
        </IonPage>
    )
}

export default Game