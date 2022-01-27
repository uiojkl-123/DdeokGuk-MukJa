import React from "react";

interface Props {
    kind: string,
    DgDict: any,
    setDgDict: any,
    children?: null
}

export const Dg: React.FC<Props> = ({ kind, DgDict, setDgDict }) => {

    function DgClick() {
        var score = 1;
        switch (kind as any) {
            case "BasicDg":
                score = 1
                break;
            case "GoldDg":
                score = 2
                break;
            case "DiamondDg":
                score = 2
                break;
            case "EmeraldDg":
                score = 3
                break;
            case "PoisonDg":
                score = -1
                break;
            case "ChocoDg":
                score = 2
                break;
            case "SpecialDg":
                score = 4
                break;
            case "CaviarDg":
                score = 5
                break;
            case "GinsengDg":
                score = 5
                break;
        }
        setDgDict(DgDict[kind] = DgDict[kind] + score)
    }

    return (
        <img onClick={DgClick} src={"/assets/" + kind + ".png"} />
    )
}