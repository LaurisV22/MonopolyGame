import {createSlice} from "@reduxjs/toolkit";

//default settings to initiate (linking feature)

export const userSlice = createSlice({
    name: "game",
    //this is functions for example initialStates:
    initialState: {
        player: "",
        money: 1000,
        playerPlace: 1,
        boughtAssets: [],

    },


    //reducers are functions which change the state
    reducers: {
        selectUserImg: (state, action) => {
            state.player = action.payload
            //initial state and action are passed in
            console.log(state.player)

        },
        sellAsset: (state, action) => {
            state.money += (action.payload)
        },

        buyAsset: (state, action) => {
            state.boughtAssets.push(action.payload);
            state.money -= (action.payload.price);

        },

        movePlayer: (state, action) => {
            state.playerPlace += (action.payload)
        },


        removeAsset: (state, action) => {
            state.boughtAssets = state.boughtAssets.filter(asset => asset.id !== action.payload.id);
            state.money += (action.payload.price/2);

        },



    }
})

export const {selectUserImg, sellAsset, buyAsset, movePlayer, removeAsset} = userSlice.actions
//export all functions in reducer
export default userSlice.reducer;

