import React from 'react';
import Post from '../model/model';
import { MdDelete, MdEdit } from "react-icons/md"

interface IProps {
    post: Post;
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}
const SinglePost: React.FC<IProps> = ({ post, posts, setPosts }: IProps) => {

    const deletePost = (id: number) => {
        setPosts(posts.filter((post) => post.id !== id));
    }
    return (
        <form className='singleform'>
            <div className='singleform__text'>
                <div className="singleform-title">{post.title}</div>
                <div className="singleform-post">{post.post}</div>
            </div>

            <span className="icon" onClick={() => deletePost(post.id)}><MdDelete /></span>
        </form>
    );
};

export default SinglePost;