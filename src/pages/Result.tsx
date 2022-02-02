import { IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Result.scss"

interface Result {
    DgDict: any
    name: any
}

const Result: React.FC<Result> = (prop) => {

    const [DgShow, setDgShow] = useState<string[]>([]);
    const [resultAge, setResultAge] = useState<any | null>();

    useEffect(() => {
        if (prop.DgDict) {
            let DgArray: number[] = Object.values(prop.DgDict)
            let DgKeyArray: string[] = Object.keys(prop.DgDict)

            for (let i = 0; i < DgKeyArray.length; i++) {
                (DgArray[i] == 0) ? DgKeyArray[i] = "/assets/HiddenDg.png" : DgKeyArray[i] = "/assets/" + DgKeyArray[i] + ".png"
            }
            let sum = 0;
            for (let i = 0; i < DgArray.length; i++) {
                sum += DgArray[i];
            }
            setDgShow(DgKeyArray);
            setResultAge(sum);
        }
    }, [])

    //공유 함수
    function twitter() {
        var sendText = "나는 얼마나 더 살까? 떡국을 먹어서 내맘대로 늘려보자!"; // 전달할 텍스트
        var sendUrl = "https://tangerine-ddeokguk.web.app"; // 전달할 URL
        window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
    }
    function facebook() {
        var sendUrl = "https://tangerine-ddeokguk.web.app"; // 전달할 URL
        window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
    }
    function copyToClipboard(val: string) {
        const element = document.createElement('textarea');
        element.value = val;
        element.setAttribute('readonly', '');
        element.style.position = 'absolute';
        element.style.left = '-9999px';
        document.body.appendChild(element);
        element.select();
        var returnValue = document.execCommand('copy');
        document.body.removeChild(element);
        if (!returnValue) {
            throw new Error('copied nothing');
        }
    }

    return (
        <IonPage className="Result">
            <h1 className="name">{prop.name}님이 더 드실 나이는</h1>
            <h1 className="age">{resultAge}살!</h1>
            <div className="DgGallery">
                <div tabIndex={0} className="DG"><img src={DgShow[0]} /><p className="DGP">기본 떡국<br />+1</p></div>
                <div tabIndex={0} className="DG"><img src={DgShow[1]} /><p className="DGP">독 떡국<br />-1</p></div>
                <div tabIndex={0} className="DG"><img src={DgShow[2]} /><p className="DGP">아이스 떡국<br />-1</p></div>
                <div tabIndex={0} className="DG"><img src={DgShow[3]} /><p className="DGP">초코 떡국<br />+10</p></div>
                <div tabIndex={0} className="DG"><img src={DgShow[4]} /><p className="DGP">귤 떡국<br />+20</p></div>
                <div tabIndex={0} className="DG"><img src={DgShow[5]} /><p className="DGP">홍삼 떡국<br />+30</p></div>
                <div tabIndex={0} className="DG"><img src={DgShow[6]} /><p className="DGP">금 떡국<br />+50</p></div>
                <div tabIndex={0} className="DG"><img src={DgShow[7]} /><p className="DGP">무지개 떡국<br />+100</p></div>
                <div tabIndex={0} className="DG"><img src={DgShow[8]} /><p className="DGP">다이아 떡국<br />+500</p></div>
            </div>
            <p className="dgShare">같이 떡국 먹고 싶은 친구가 있다면?</p>
            <div className="shareContainer">
                <div id="shareTw" onClick={twitter}><img src="/assets/Tw.png" /></div>
                <div id="shareFb" onClick={facebook}><img src="/assets/Fb.png" /></div>
                <div id="shareKa" onClick={() => { }}><img src="/assets/ka.png" /></div>
                <div id="shareLk" onClick={() => copyToClipboard("https://tangerine-ddeokguk.web.app")}><img src="/assets/Lk.png" /></div>
            </div>

            <a href="localhost:8100/home"><div id='re'>다시하기{"  >"}</div></a>
        </IonPage>
    )
}

export default Result