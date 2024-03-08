import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    token: string;
    firstname: string;
    lastname: string;
    isSignedIn: boolean;
}

const userInitialState: UserState = {
    token: "",
    firstname: "",
    lastname: "",
    isSignedIn: false
}

const userSlice = createSlice({
    name: "userState",
    initialState: userInitialState,
    reducers: {
        storeUser: (state, action: PayloadAction<Partial<UserState>>) => {
            return { ...state, ...action.payload };
        },
        removeUser: (state) => {
            return { ...userInitialState };
        },
        setIsSignedIn: (state, action: PayloadAction<boolean>) => {
            state.isSignedIn = action.payload;
        }
    }
});

export const { storeUser, removeUser, setIsSignedIn } = userSlice.actions;
export default userSlice.reducer;
