import React from 'react';
import { useState } from 'react';
import '../world';
import { World } from '../world';
import '../style/main.css';
// @ts-ignore
import { transform } from '../untils';
import ProductComponent from './ProductComponent';

type MainProps = {
    loadworld: World
    username: string
}

function Main({loadworld, username}: MainProps) {
    const [world, setWorld] = useState(JSON.parse(JSON.stringify(loadworld)) as World)

    let logo = undefined;
    let money= undefined;

    if (loadworld) {
        logo = <img className='logo' src={'http://localhost:4000/'+ world.logo} alt="" /> //'http://localhost:4000/'
        money = <span dangerouslySetInnerHTML={{ __html: transform(loadworld?.money) }}></span>
    }
    else{
        logo = <div> logo monde </div>
        money = 0;
    }

    return (
        <div className="game">
            <div className="header">
                <div> {logo} </div>
                <div> {username} </div>
            </div>
            <div className="parent_corps">
                <div className="colonne-gauche">
                    <div> {money} </div>
                    <div> multiplicateur </div>
                </div>
                <div className="corps">
                    <div className="main">
                        <div className="product">
                            <ProductComponent prod={world.products[0]} />
                            <ProductComponent prod={world.products[1]} />
                            <ProductComponent prod={world.products[2]} />
                            <ProductComponent prod={world.products[3]} />
                            <ProductComponent prod={world.products[4]} />
                            <ProductComponent prod={world.products[5]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
