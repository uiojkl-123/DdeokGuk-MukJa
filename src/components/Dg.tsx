import React, { useEffect, useState } from "react";
import "./Dg.scss"
interface Props {
    kind: string,
    DgDict: any,
    setDgDict: any,
    children?: null
    DgNum: number
}

const Dg: React.FC<Props> = ({ kind, DgDict, setDgDict, DgNum}) => {


    const [isShown, setIsShown] = useState(false);

    const waitBeforeShow = DgNum * 125

    useEffect(() => {
        setTimeout(() => {
          setIsShown(true);
        }, waitBeforeShow);
      }, [waitBeforeShow]);

    function DgClick() {
        document.getElementById('DgContainer ' + DgNum)!.style.display = "none";
        switch (kind) {
            case 'BasicDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    BasicDg: DgDict.BasicDg + 1
                }));
                break;
            case 'GoldDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    GoldDg: DgDict.GoldDg + 5
                }));
                break;
            case 'SpecialDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    SpecialDg: DgDict.SpecialDg + 5
                }));
                break;
            case 'ChocoDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    ChocoDg: DgDict.ChocoDg + 2
                }));
                break;
            case 'PoisonDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    PoisonDg: DgDict.PoisonDg - 1
                }));
                break;
            case 'EmeraldDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    EmeraldDg: DgDict.EmeraldDg + 30
                }));
                break;
            case 'DiamondDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    DiamondDg: DgDict.DiamondDg + 50
                }));
                break;
            case 'GinsengDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    GinsengDg: DgDict.GinsengDg + 50
                }));
                break;
            case 'CaviarDg':
                setDgDict((prevState: any) => ({
                    ...prevState,
                    CaviarDg: DgDict.CaviarDg + 500
                }));
                break;
        }
    }

    return (isShown ? 
        <div id={'DgContainer ' + DgNum} className="DgCon" onClick={DgClick} >
            <img src={"/assets/" + kind + ".png"} />
        </div>: null
    )

}


export default Dg