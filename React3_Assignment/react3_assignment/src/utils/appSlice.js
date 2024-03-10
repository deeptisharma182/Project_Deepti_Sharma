import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState : {
        isDescriptionVisible: false,
    },
    reducers : {
        toggleDescription: (state) =>{ //// Toggle description visibility
            state.isDescriptionVisible = !state.isDescriptionVisible;
        }
    }
});

export const { toggleDescription } = appSlice.actions;
export default appSlice.reducer
