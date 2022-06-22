import React from 'react';
import { useState, useEffect, useRef } from 'react';
import '../style/Product.css';
import {Product} from '../world';
import MyProgressbar from "./MyProgressbar";

export enum Orientation {
    horizontal = "horizontal",
    vertical   = "vertical"
}
type ProductProps = {
    prod: Product
    //onProductionDone: (product: Produit) => void
}


function ProductComponent ({ prod} : ProductProps) {

    let [run, setRun] = useState(false);
    let imgProd = undefined;

    if (prod) {
        imgProd = 'https://isiscapitalistgraphql.kk.kurasawa.fr/' + prod.logo; //'http://localhost:4000/'
    } else {
        imgProd = "error";
    }

    const calcScore = () =>{

    }

    const savedCallback = useRef(calcScore)
    useEffect(() => savedCallback.current = calcScore)
    useEffect(() => {
        let timer = setInterval(() => savedCallback.current(), 100)
        return function cleanup() {
            if (timer) clearInterval(timer)
        }
    }, [])


    const startFabrication = () => {
        setRun(true);
    }

    const onProgressbarCompleted = () => {
        setRun(false);
    }

    return (
        <div className="Product">
            <div className="labelProduit">
                <h3>{prod.name}</h3>
            </div>
            <div className="img-bar">
                <img className="imgProduit" src={imgProd} alt="logo du produit" onClick={() => startFabrication()} />
                <MyProgressbar className="barstyle" vitesse={prod.vitesse} initialvalue={prod.vitesse - prod.timeleft}
                               run={run} frontcolor="#65DEF1" backcolor="#E4CA73" auto={prod.managerUnlocked} orientation={Orientation.horizontal}
                               onCompleted={onProgressbarCompleted} />
            </div>
        </div>
    );
}
export default ProductComponent;