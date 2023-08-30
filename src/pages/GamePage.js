import React from 'react';
import {useDispatch, useSelector,} from "react-redux";
import { buyAsset, movePlayer, sellAsset, removeAsset} from "../features/game";
import {useState} from "react";

const GamePage = () => {

    const [diceNumber, setDiceNumber] = useState(1);

    const selectBoughtAssets = (state) => state.game.boughtAssets;

    // Use the useSelector hook to get the boughtAssets array from the Redux store
    const boughtAssets = useSelector(selectBoughtAssets);

    // Log the boughtAssets array to the console
    console.log(boughtAssets);

    const isAssetBought = (assetId) => {
        return boughtAssets.some(boughtAsset => boughtAsset.id === assetId);
    };


    const selectMoney = (state) => state.game.money;

    // Use the useSelector hook to get the boughtAssets array from the Redux store
    const money = useSelector(selectMoney);

    // Log the boughtAssets array to the console
    console.log(money);


    const getPlayerImg = (state) => state.game.player;
    const player = useSelector(getPlayerImg);
    console.log(player);

    const getPlayerPlace = (state) => state.game.playerPlace;
    const playerPlace = useSelector(getPlayerPlace);




    function diceRoll() {
        const roll = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(roll)
        if (playerPlace + roll > (allAssets.length)) {
            dispatch(movePlayer(roll-(allAssets.length)))
            dispatch(sellAsset(200))
            return
        }
            dispatch(movePlayer(roll))
    }

    const dices = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/557px-Dice-1.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dice-2.svg/557px-Dice-2.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dice-3.svg/1200px-Dice-3.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dice-4.svg/557px-Dice-4.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Dice-5.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dice-6a.svg/557px-Dice-6a.svg.png",
    ]


    const dispatch = useDispatch();

    const allAssets = [
        {
            id: 1,
            streetName: "Start",
            color: "#F5DEB3",
            price: 0,
        },
        {
            id: 2,
            streetName: "Vilniaus st.",
            color: "#4682B4",
            price: 220,
        },
        {
            id: 3,
            streetName: "Pilies st.",
            color: "pink",
            price: 220,
        },
        {
            id: 4,
            streetName: "Didžioji st.",
            color: "blue",
            price: 240,
        },
        {
            id: 5,
            streetName: "Universiteto st.",
            color: "green",
            price: 260,
        },
        {
            id: 6,
            streetName: "Stiklių st.",
            color: "#FFDEAD",
            price: 230,
        },
        {
            id: 7,
            streetName: "Vokiečių st.",
            color: "Teal",
            price: 28,
        },
        {
            id: 8,
            streetName: "Rotušės st.",
            color: "purple",
            price: 300,
        },
        {
            id: 9,
            streetName: "Aušros st.",
            color: "Cyan",
            price: 300,
        },
        {
            id: 10,
            streetName: "Lukiškių st.",
            color: "#5F9EA0",
            price: 20,
        },
        {
            id: 11,
            streetName: "Jogailos st.",
            color: "#FA8072",
            price: 50,
        },
        {
            id: 12,
            streetName: "Baro st.",
            color: "red",
            price: 40,
        },
        {
            id: 13,
            streetName: "Maironio st.",
            color: " Gray",
            price: "45",
        },
        {
            id: 14,
            streetName: "Šventaragio st.",
            color: "Coral",
            price: 80,
        },
        {
            id: 15,
            streetName: "Pylimo st.",
            color: "Gold",
            price: 55,
        },
        {
            id: 16,
            streetName: "Trakų st.",
            color: "gray",
            price: 600,
        },
    ];

    return (
        <div className="d-flex">
            <div className="leftBox flex4">

                <div className="dice" style={{gridArea: 'empty'}}>
                    <img src={dices[diceNumber-1]} alt=""/>
                    <button onClick={diceRoll}>Click to roll the dice</button>

                </div>

                {allAssets.map((asset) => (
                    <div className="card"
                         key={asset.id}
                         style={{
                             gridArea: `card${asset.id}`,
                             backgroundColor: `${asset.color}`
                         }}
                    >
                        <h3>{asset.streetName}</h3>
                        <div className="profileDiv">
                            {playerPlace === asset.id &&
                                <img src={player} alt=""/>
                            }
                        </div>
                        {!isAssetBought(asset.id) && asset.id !== 1 && (
                            <button
                                id="buyBtn"
                                onClick={() => {
                                    if (playerPlace === asset.id) {
                                        if (money >= asset.price ) {
                                            dispatch(buyAsset(asset));
                                        } else {
                                            alert('Not enough money to buy this asset!');
                                        }
                                    }
                                }}
                            >
                                Buy
                            </button>

                        )}
                        {asset.id !== 1 &&
                            <p>Price: {asset.price}$</p>
                        }
                    </div>
                ))}
            </div>

            <div className="rightBox flex1">
                <h2>Your own assets</h2>
                <div className="boughtAssetContainer">
                    {boughtAssets.map((asset) => (
                        <div key={asset.id} className="boughtAsset" style={{backgroundColor: `${asset.color}`}}>
                            <p>{asset.streetName}</p>
                            <p>Price: {asset.price / 2}$</p>
                            <button onClick={() => dispatch(removeAsset(asset))} id="sellBtn">Sell</button>
                        </div>
                    ))}
                </div>
                <div className="moneyContainer">
                    <h2>Your cash: {money} $</h2>
                </div>
            </div>

</div>


    );
};

export default GamePage;
