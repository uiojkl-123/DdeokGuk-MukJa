import { IonPage } from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import "./Game.scss"
import { useLocation } from "react-router";
import Dg from "../components/Dg";


const Game: React.FC<RouteComponentProps> = ({ history }) => {


    const stateTime = 10;

    //history.push로 준 변수 받아오기
    const location: any = useLocation();
    const name = location.state.name;

    var DgArray: string[] = []
    const DgArrayLength = (stateTime) * 8

    const [DgArrayState, setDgArrayState] = useState<string[]>([]);

    useEffect(() => {
        for (var i = 1; i <= DgArrayLength; i++) {
            DgArray.push(RandomKind())
        }
        setDgArrayState(DgArray)
    }, [])



    //떡국 사전
    const [DgDict, setDgDict] = useState({
        BasicDg: 0,
        GoldDg: 0,
        TangerineDg: 0,
        ChocoDg: 0,
        PoisonDg: 0,
        RainbowDg: 0,
        DiamondDg: 0,
        GinsengDg: 0,
        IceDg: 0
    });

    //결과 페이지로 넘어가기
    async function goResult() {
        setTimeout(() => {
            history.push({
                pathname: "/result",
                state: { DgDict: DgDict, name: name } //떡국 사전, 사용자 이름 넘겨주기
            });
        }, 125)
    }

    //타이머 

    const [sec, setSec] = useState(stateTime);

    const time: any = useRef(stateTime);
    const timerId: any = useRef('startTimer');

    useEffect(() => {
        timerId.current = setInterval(() => {
            setSec(time.current);
            time.current -= 1;
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


    if (sec == 1) {
        document.getElementById('startTimer')!.innerText = '끝!';
        goResult()
    }
    //타이머 끝

    function RandomKind() {
        var DgRandom: number = Math.random()
        DgRandom = Number(DgRandom.toFixed(3)) * 100

        let DgKind = "BasicDg";

        if (0 <= DgRandom && DgRandom < 80.5) {
            DgKind = "BasicDg"
        } else if (80.5 <= DgRandom && DgRandom < 83.5) {
            DgKind = "PoisonDg"
        } else if (83.5 <= DgRandom && DgRandom < 88.5) {
            DgKind = "IceDg"
        } else if (88.5 <= DgRandom && DgRandom < 90.5) {
            DgKind = "ChocoDg"
        } else if (90.5 <= DgRandom && DgRandom < 92.5) {
            DgKind = "TangerineDg"
        } else if (92.5 <= DgRandom && DgRandom < 95.5) {
            DgKind = "GinsengDg"
        } else if (95.5 <= DgRandom && DgRandom < 98.5) {
            DgKind = "GoldDg"
        } else if (98.5 <= DgRandom && DgRandom < 99.5) {
            DgKind = "RainbowDg"
        } else if (99.5 <= DgRandom && DgRandom <= 100) {
            DgKind = "DiamondDg"
        }
        return DgKind
    }

    return (
        <div className="Game">
            <h1 id="startTimer">{Number((sec).toFixed(0))}</h1>
            {DgArrayState.map((value, idx) => <Dg key={value + idx} kind={value} DgDict={DgDict} setDgDict={setDgDict} DgNum={idx}></Dg>)}
        </div >
    )
}

export default Game