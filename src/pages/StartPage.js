import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUserImg} from "../features/game";

const StartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const player = [
        {
            image: 'https://media.istockphoto.com/id/458538025/photo/monopoly-car-game-piece.jpg?s=612x612&w=0&k=20&c=QI5g8goHfpdczMDBfLYdjZGYhzShIKHTlTStOhw4TwY='
        },
        {
            image: 'https://media.istockphoto.com/id/458701159/photo/monopoly-top-hat-game-piece.jpg?s=612x612&w=0&k=20&c=1IzZrLlIHJQ6Znhql11C0o0AR2Agdvr7tEdFhyb__WE='
        },
        {
            image: 'https://media.istockphoto.com/id/458530771/photo/monopoly-train-game-piece.jpg?s=612x612&w=0&k=20&c=zbLnUWWq3WhqNWDgAjb7KETgaDe3jYQLhTIQADBMzyM='
        },
        {
            image: 'https://media.istockphoto.com/id/458715299/photo/monopoly-scottie-dog-game-piece.jpg?s=612x612&w=0&k=20&c=_1utYr-wKfzeCiJ1V59jTw67y1XWLlawF96VF23B-G8='
        }

    ];

    const iconLink = (state) => state.game.player;
    const icon = useSelector(iconLink);


    return (
        <>
                <div className="container">
            <div className="logo">
                <img
                    src="https://www.prosportstickers.com/wp-content/uploads/nc/v/monopoly_logo_board_game_game_sticker__63206-700x225.jpg"
                    alt=""/>
            </div>

            <div className="playersContainer">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/cwfoZy3mNTI?autoplay=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>


            <div className="toolbar">
                <h3 >Select your player</h3>
            </div>

            <div className="container">
                <div className="playersContainer">
                    <div className="d-flex">
                        {player.map((playerProfile, index) => (

                            <div onClick={() => dispatch(selectUserImg(playerProfile.image))} className="playerDiv"
                                 key={index}>
                                <img src={playerProfile.image} alt="" style={icon === playerProfile.image ? {
                                    border: "#fb667a 6px solid",
                                    borderRadius: "30px"
                                } : {}}/>
                            </div>
                            // )
                        ))}
                    </div>
                    {(icon !== "" &&
                        <button onClick={() => navigate('/game')}>Start Game</button>
                    )}
                </div>

            </div>
                </div>
        </>
    );
};

export default StartPage;