import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import "./Game.scss"
import Dg from "../components/Dg";

interface DgGet {
    DgDict: any,
    setDgDict: any,
    children?: ReactNode
}

const Game: React.FC<DgGet> = ( prop ) => {

    const history = useHistory();

    const stateTime = 10;

    var DgArray: string[] = []
    const DgArrayLength = (stateTime) * 8

    const [DgArrayState, setDgArrayState] = useState<string[]>([]);

    useEffect(() => {
        for (var i = 1; i <= DgArrayLength; i++) {
            DgArray.push(RandomKind())
        }
        setDgArrayState(DgArray)
    }, [])

    //결과 페이지로 넘어가기
    async function goResult() {
        setTimeout(() => {
            prop.setDgDict()
            history.push("/result");
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
        setTimeout(() => goResult(), 1000)
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
            <h1 id="startTimer">{Number((sec).toFixed(0)) - 1}</h1>
            {DgArrayState.map((value, idx) => <Dg key={value + idx} kind={value} DgDict={prop.DgDict} setDgDict={prop.setDgDict} DgNum={idx}></Dg>)}
        </div >
    )
}

export default Game;