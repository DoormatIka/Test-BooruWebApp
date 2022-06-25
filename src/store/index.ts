import { createStore } from 'vuex';
import { search } from 'booru';
import SearchResults from 'booru/dist/structures/SearchResults';
import axios from 'axios';

const store = createStore({
    state: {
        memories: [
            {
                id: "m1",
                title: "Oh dear...",
                description: "holy shit...",
                image: "https://images-ext-2.discordapp.net/external/cb6QoQDw7N2UArDvg2mK9C91yULRs1NgvtcKs-HB0W0/https/miro.medium.com/max/1200/1%2AhABoMlByWXfyopfVptC80A.png?width=1019&height=465"
            }
        ],
    },
    getters: {
        memories(state: any) {
            return state.memories;
        },
        memory(state: any) {
            return (memoryId: any) => {
                return state.memories.find((memory: any) => memory.id == memoryId);
            }
        } 
    },
    /*
    mutations: {
        memoriesMutate(state, payload) {
            state.memories = payload;
        }
    },
    actions: { // gets booru stuff :)
        async memoriesMutate(context) {
            // const res = await axios.get('https://booruapi.sassinzz13.repl.co/api/booru/gelbooru')
            // console.log(res.data)
            // context.commit('memoriesMutate', res.data)
        }
    }
    */
});

export default store;

/*
{
    id: "m1",
    title: "Oh dear..",
    description: "holy shit..",
    image: "link"
}
*/