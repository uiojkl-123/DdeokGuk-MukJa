import { async } from "@firebase/util";
import { IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { RouteComponentProps, useLocation } from "react-router";
import { callbackify } from "util";

const Result: React.FC<RouteComponentProps> = ({ history }) => {

    const location: any = useLocation();

    const [resultAge, setResultAge] = useState<any>();

    const name = location.state.name;

    const [DgDict, setDgDict] = useState<object>();

    //나이 계산
    function callBack() {
        if (DgDict) {
            let DgArray: number[] = Object.values(DgDict)
            let sum = 0;
            for (let i = 0; i < DgArray.length; i++) {
                sum += DgArray[i];
            }
            setResultAge(() => {
                return sum
            })
        }
    }

    useEffect(() => {
        setDgDict(location.state.DgDict);
        callBack()
    })

    //공유 함수
    function twitter() {
        var sendText = "나는 얼마나 더 살까? 떡국을 먹어서 내맘대로 늘려보자!"; // 전달할 텍스트
        var sendUrl = "localhost"; // 전달할 URL
        window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
    }

    function facebook() {
        var sendUrl = "localhost"; // 전달할 URL
        window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
    }

    return (
        <div className="Result">
            <h1 className="name">{name}님이 더 드실 나이는</h1>
            <h1 className="age">{resultAge}살!</h1>
            <div className=""></div>
            <p>같이 나이먹고 싶은 친구가 있다면?</p>
            <div id="share" onClick={twitter}>트위터</div>
            <div id="share" onClick={facebook}>페이스북</div>
            <div id='re' onClick={() => {
                history.replace({
                    pathname: "/game",
                    state: name
                })
            }}>다시하기</div>
        </div>
    )
}

export default Result