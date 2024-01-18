import React, { useEffect, useState, useRef } from 'react';
import Post from '../model/model';
import { MdDelete, MdEdit } from "react-icons/md"

interface IProps {
    post: Post;
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}
const SinglePost: React.FC<IProps> = ({ post, posts, setPosts }: IProps) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTitle, setEditTitle] = useState<string>(post.title)
    const [editPost, setEditPost] = useState<string>(post.post)

    const deletePost = (id: number) => {
        setPosts(posts.filter((post) => post.id !== id));
    }
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        setPosts(posts.map((post) => (
            post.id === id ? { ...post, title: editTitle, post: editPost } : post
        )))

        setEdit(false)

    }

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])
    return (
        <form className='singleform' onSubmit={(e) => handleEdit(e, post.id)}>
            {
                edit ? (
                    <>
                        <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className='mainform__input' placeholder='Заголовок поста..'
                            ref={inputRef}
                        />
                        <input value={editPost} onChange={(e) => setEditPost(e.target.value)} className='mainform__input' placeholder='Текст поста..'
                            ref={inputRef}
                        />
                        <button className='mainform__button'>Изменить</button>
                    </>
                ) : (
                    <div className='singleform__text'>
                        <div className="singleform-title">{post.title}</div>
                        <div className="singleform-post">{post.post}</div>
                    </div>
                )
            }

            <span className="icon edit__icon" onClick={() => {
                if (!edit) {
                    setEdit(!edit)
                }
            }
            }><MdEdit /></span>
            <span className="icon delete__icon" onClick={() => deletePost(post.id)}><MdDelete /></span>

        </form >
    );
};

export default SinglePost;