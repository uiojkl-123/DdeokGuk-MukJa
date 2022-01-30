import React, { useEffect, useState } from "react";
import "./Dg.scss"
interface Props {
    kind: string,
    DgDict: any,
    setDgDict: any,
    children?: null
    DgNum: number
}

const Dg: React.FC<Props> = ({ kind, DgDict, setDgDict, DgNum }) => {

    const [isShown, setIsShown] = useState(false);

    const waitBeforeShow = DgNum * 125

    var XRandom: number = Math.random()
    XRandom = Number(XRandom.toFixed(2)) * 70

    useEffect(() => {
        setTimeout(() => {
            setIsShown(true);
            document.getElementById('DgContainer ' + DgNum)!.style.left = String(XRandom) + "vw";
        }, waitBeforeShow);
    }, [waitBeforeShow]);

    function DgClick() {
        document.getElementById('DgContainer ' + DgNum)!.className = "clicked";
        document.getElementById('DgContainer ' + DgNum + 'img')!.style.display = "none";
        switch (kind) {
            case 'BasicDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    BasicDg: DgDict.BasicDg + 1
                }));
                document.getElementById('DgContainer ' + DgNum + ' ' + DgNum)!.innerText = "+ 1";
                break;
            case 'PoisonDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    PoisonDg: DgDict.PoisonDg - 1
                }));
                document.getElementById('DgContainer ' + DgNum + ' ' + DgNum)!.innerText = "- 1";
                break;
            case 'IceDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    IceDg: DgDict.IceDg - 1
                }));
                document.getElementById('DgContainer ' + DgNum + ' ' + DgNum)!.innerText = "- 1";
                break;
            case 'ChocoDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    ChocoDg: DgDict.ChocoDg + 10
                }));
                document.getElementById('DgContainer ' + DgNum + ' ' + DgNum)!.innerText = "+ 10";
                break;
            case 'TangerineDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    TangerineDg: DgDict.TangerineDg + 20
                }));
                document.getElementById('DgContainer ' + DgNum + ' ' + DgNum)!.innerText = "+ 20";
                break;
            case 'GinsengDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    GinsengDg: DgDict.GinsengDg + 30
                }));
                document.getElementById('DgContainer ' + DgNum + ' ' + DgNum)!.innerText = "+ 30";
                break;
            case 'GoldDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    GoldDg: DgDict.GoldDg + 50
                }));
                document.getElementById('DgContainer ' + DgNum + ' ' + DgNum)!.innerText = "+ 50";
                break;
            case 'RainbowDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    RainbowDg: DgDict.RainbowDg + 100
                }));
                document.getElementById('DgContainer ' + DgNum + ' ' + DgNum)!.innerText = "+ 100";
                break;
            case 'DiamondDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    DiamondDg: DgDict.DiamondDg + 500
                }));
                document.getElementById('DgContainer ' + DgNum + ' ' + DgNum)!.innerText = "+ 500";
                break;
        }
        document.getElementById('DgContainer ' + DgNum + ' ' + DgNum)!.style.display = "flex";
    }

    return (isShown ?
        <div id={'DgContainer ' + DgNum} className="DgCon" onClick={DgClick} >
            <img id={'DgContainer ' + DgNum + 'img'} src={"/assets/" + kind + ".png"} />
            <p id={'DgContainer ' + DgNum +' '+ DgNum} className="DgP">+ 10</p>
        </div> : null
    )

}


export default Dg