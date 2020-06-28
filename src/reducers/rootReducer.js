import axios from 'axios';

const initState = {
    posts: [
        {
            "id": '1',
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "id": '2',
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "id": '3',
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);

    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter((post) => {
            return action.id !== post.id;
        });
        return {
            ...state,
            posts: newPosts
        };
    } else if (action.type === 'EDIT_POST') {
        let newPosts = [...state.posts];
        let newPostID = state.posts.findIndex((post) => { return post.id === action.id })
        newPosts[newPostID].body = action.body;

        return {
            ...state,
            posts: newPosts
        };
    } else if (action.type === 'SAVE_POST') {
        let postToSave = state.posts.find((post) => post.id === action.id);
        // THIS IS A FAKE SAVE FOR NOW UNTIL THE SERVER IS READY.
        axios.post('/post', {postToSave})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return state;

}

export default rootReducer;