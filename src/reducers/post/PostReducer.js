import axios from 'axios';

class PostReducer {

    constructor(state, action) {
        this.state = state;
        this.action = action;
    }

    deletePost() {
        let newPosts = this.state.posts.filter((post) => {
            return this.action.id !== post.id;
        });
        return {
            ...this.state,
            posts: newPosts
        };
    }

    editPost() {
        let newPosts = [...this.state.posts];
        let newPostID = this.state.posts.findIndex((post) => { return post.id === this.action.id })
        newPosts[newPostID].body = this.action.body;

        return {
            ...this.state,
            posts: newPosts
        };
    }
    savePost() {
        let postToSave = this.state.posts.find((post) => post.id === this.action.id);
        // THIS IS A FAKE SAVE FOR NOW UNTIL THE SERVER IS READY.
        axios.post('/post', { postToSave })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export default PostReducer;