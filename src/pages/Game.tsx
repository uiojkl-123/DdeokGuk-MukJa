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
    var stateTime = 10;


    const [sec, setSec] = useState(stateTime + 1);

    //떡국 사전
    const [DgDict, setDgDict] = useState({
        BasicDg: 0,
        GoldDg: 0,
        SpecialDg: 0,
        ChocoDg: 0,
        PoisonDg: 0,
        EmeraldDg: 0,
        DiamondDg: 0,
        GinsengDg: 0,
        CaviarDg: 0
    });

    //결과 페이지로 넘어가기
    async function goResult() {
        setTimeout(() => {
            history.push({
                pathname: "/result",
                state: { DgDict: DgDict, name: name } //떡국 사전, 사용자 이름 넘겨주기
            });
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
    // if (sec == 10) {
    //     document.getElementById('game')!.style.display = 'flex';
    //     document.getElementById('startTimer')!.style.display = 'none';
    // }

    // if (sec == 1) {
    //     goResult()
    // }
    //타이머 끝

    function makeDg(getDgNum: number) {
        var DgRandom = Math.random()
        DgRandom.toFixed(3)

        var DgKind = "BasicDg";

        if (0 <= DgRandom && DgRandom < 68.5) {
            DgKind = "BasicDg"
        } else if (68.5 <= DgRandom && DgRandom < 78.5) {
            DgKind = "GoldDg"
        } else if (78.5 <= DgRandom && DgRandom < 86.5) {
            DgKind = "SpecialDg"
        } else if (86.5 <= DgRandom && DgRandom < 89.5) {
            DgKind = "ChocoDg"
        } else if (89.5 <= DgRandom && DgRandom < 92.5) {
            DgKind = "PoisonDg"
        } else if (92.5 <= DgRandom && DgRandom < 95.5) {
            DgKind = "EmeraldDg"
        } else if (95.5 <= DgRandom && DgRandom < 98.5) {
            DgKind = "DiamondDg"
        } else if (98.5 <= DgRandom && DgRandom < 99.5) {
            DgKind = "GinsengDg"
        } else if (99.5 <= DgRandom && DgRandom <= 100) {
            DgKind = "CaviarDg"
        }

        console.log(DgKind, DgDict)


        return <Dg DgDict={DgDict} setDgDict={setDgDict} kind={DgKind} DgNum={getDgNum}></Dg>
    }

    function setDgLocation(DgNum: number) {
        var Xrandom = Math.random()
        Xrandom = Xrandom * 100

        document.getElementById('DgContainer ' + DgNum.toString)!.style.display = 'flex';
        document.getElementById('DgContainer ' + DgNum.toString)!.style.position = 'absolute';
        document.getElementById('DgContainer ' + DgNum.toString)!.style.left = Xrandom.toString() + "%";
    }

    var DgNum = 1;
    return (
        <IonPage className="Game">
            <h1 id="startTimer">{sec - 4}</h1>
            <h1>{name}</h1>
            {makeDg(DgNum)}
        </IonPage>
    )
}

export default Game