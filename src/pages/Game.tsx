import { IonPage } from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import "./Game.scss"
import { useLocation } from "react-router";
import Dg from "../components/Dg";


const Game: React.FC<RouteComponentProps> = ({ history }) => {

    //history.push로 준 변수 받아오기
    const location: any = useLocation();
    const name = location.state.name;

    //전체 시간 설정
    var stateTime = 48;

    const [sec, setSec] = useState(stateTime);

    var DgArray:string[] = []


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
            DgArray = DgArray.concat(RandomKind())
            console.log(DgArray)
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

    //조건 시간에 뭐할지.
    // if (sec == 10) {
    //     document.getElementById('game')!.style.display = 'flex';
    //     document.getElementById('startTimer')!.style.display = 'none';
    // }

    // if (sec == 1) {
    //     goResult()
    // }
    //타이머 끝

    function RandomKind() {
        var DgRandom: number = Math.random()
        DgRandom = Number(DgRandom.toFixed(3)) * 100

        console.log(DgRandom)

        let DgKind = "BasicDg";

        if (0 <= DgRandom && DgRandom < 80.5) {
            DgKind = "BasicDg"
        } else if (80.5 <= DgRandom && DgRandom < 83.5) {
            DgKind = "GoldDg"
        } else if (83.5 <= DgRandom && DgRandom < 88.5) {
            DgKind = "SpecialDg"
        } else if (88.5 <= DgRandom && DgRandom < 90.5) {
            DgKind = "ChocoDg"
        } else if (90.5 <= DgRandom && DgRandom < 92.5) {
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

        return DgKind
    }

    function setDgLocation(DgNum: number) {
        var Xrandom = Math.random()
        Xrandom = Xrandom * 100
        document.getElementById('DgContainer ' + DgNum.toString)!.style.left = Xrandom.toString() + "%";
    }

    const array = ['BasicDg','ChocoDg']

    if (DgArray) {
        return (
            <IonPage className="Game">
                <h1 id="startTimer">{Number((sec / 10).toFixed(0))}</h1>
                <h1>{name}</h1>
                { array.map((value, idx) => <Dg kind={value} DgDict={DgDict} setDgDict={setDgDict} DgNum={idx + 1}></Dg>)}
            </IonPage >
        )
    } else {
        return <h1>바보</h1>
    }
}
export default Game