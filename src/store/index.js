import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { skillsApi } from "./apis/skillsApi";

const store = configureStore({
    reducer: {
        [skillsApi.reducerPath]: skillsApi.reducer
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware()
                .concat(skillsApi.middleware)
    }
});
setupListeners(store.dispatch);

export { store };
export {
    useFetchSkillsQuery,
    useAddSkillsMutation
} from './apis/skillsApi';