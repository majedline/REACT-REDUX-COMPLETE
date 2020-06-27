import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ItemImage from "../itemImage.png";

class Home extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                this.setState({ posts: res.data.slice(0, 10) });
            });
    }

    render() {

        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img className="item-image" src={ItemImage} alt="Item Image"/>
                        <div className="card-content">
                            <Link to={"/" + post.id} >
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>

                        </div>
                    </div >
                )
            })
        ) : (
                <div className="ceneter"> no posts yet</div>
            )

        return (
            <div className="home container" >
                <h4 className="ceneter">Home</h4>
                {postList}
            </div>
        );
    }
}

export default Home;