import { IonPage } from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router";

const Result: React.FC<RouteComponentProps> = ({ history }) => {

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
        <IonPage>
            <h1>범기바보</h1>
            <div id="share" onClick={twitter}>트위터</div>
            <div id="share" onClick={facebook}>페이스북</div>
            <div id='re' onClick={() => {
                history.replace("/game")
            }}>다시하기</div>
        </IonPage>
    )
}

export default Result