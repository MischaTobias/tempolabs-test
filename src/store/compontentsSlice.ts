import { createSlice } from "@reduxjs/toolkit";

interface ComponentState {
  componentList: { id: number; name: string; description: string }[];
}

const initialState: ComponentState = {
  componentList: [
    { id: 1, name: "Button", description: "A clickable button component" },
    { id: 2, name: "Card", description: "A card for displaying content" },
    { id: 3, name: "Input", description: "An input field" },
  ],
};

export const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    onAddComponent: (state, { payload }) => {
      state.componentList.push(payload);
    },
  },
});

export const { onAddComponent } = componentsSlice.actions;
