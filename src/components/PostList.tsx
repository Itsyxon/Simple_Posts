import React from 'react';
import Post from '../model/model';
import SinglePost from './SinglePost';

interface IProps {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostList: React.FC<IProps> = ({ posts, setPosts }: IProps) => {
    return (
        <div className='posts'>
            {posts.map((post) => (
                <SinglePost post={post} key={post.id} posts={posts} setPosts={setPosts} />

            ))}
        </div>
    );
};

export default PostList;