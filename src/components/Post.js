import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {


    handleDeleteClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    handleEditPost = (event) => {
        console.log(event.target.value);
        this.props.editPost(this.props.post.id, event.target.value);
    }

    handleSaveClick = () => {
        this.props.savePost(this.props.post.id);
        this.props.history.push('/');
    }

    handleCancelClick = () => {
        //
    }

    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <textarea id="textarea1" className="materialize-textarea"
                    defaultValue={this.props.post.body} onChange={this.handleEditPost} />

                <div className="center">
                    <button className="btn grey system-buttons" onClick={this.handleSaveClick}>
                        Save Post
                    </button>

                    <button className="btn grey system-buttons" onClick={this.handleCancelClick}>
                        Cancel Edit
                    </button>

                    <button className="btn grey system-buttons" onClick={this.handleDeleteClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
                <div className="center">
                    No post
                </div>);

        return (
            <div className="container" >
                {post}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch({ type: 'DELETE_POST', id: id });
        },
        editPost: (id, body) => {
            dispatch({ type: 'EDIT_POST', id: id, body: body })
        },
        savePost: (id) => {
            dispatch({ type: 'SAVE_POST', id: id })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);