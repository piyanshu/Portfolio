import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const skillsApi = createApi({
    reducerPath: 'skills',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints(builder){
        return {
            fetchSkills: builder.query({
                providesTags: ['Skills'],
                query: () => {
                    return {
                        url: '/skills',
                        method: 'GET'
                    }
                }
            }),
            addSkills: builder.mutation({
                invalidatesTags: ['Skills'],
                query: (skill) => {
                    return {
                        url: '/skills',
                        method: 'POST',
                        body: {
                            url: skill.url,
                            title: skill.title
                        }
                    }
                }
            }),
        }
    }
});

export const {
    useFetchSkillsQuery,
    useAddSkillsMutation
} = skillsApi;

export { skillsApi };