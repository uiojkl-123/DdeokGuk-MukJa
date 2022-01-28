import React, { useEffect } from "react";
import "./Dg.scss"
interface Props {
    kind: string,
    DgDict: any,
    setDgDict: any,
    children?: null
    score: number
    DgNum: number
}

export const Dg: React.FC<Props> = ({ kind, DgDict, setDgDict, score, DgNum }) => {

    function DgClick() {
        document.getElementById('DgContainer '+ DgNum)!.style.display = "none";
        setDgDict(DgDict[kind] + score)
    }

    return (
        <div id={'DgContainer '+ DgNum} className="DgCon" onClick={DgClick} >
            <img src={"/assets/" + kind + ".png"} />
        </div>
    )
}