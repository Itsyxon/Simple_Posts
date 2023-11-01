import React from 'react';
import '../styles/MainForm.css'

interface IProps {
    note: string;
    setNote: React.Dispatch<React.SetStateAction<string>>;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    addPost: (event: React.FormEvent) => void;
}

const MainForm: React.FC<IProps> = ({ note, setNote, title, setTitle, addPost }: IProps) => {
    return (
        <form className="mainform" onSubmit={addPost}>
            <input
                className="mainform__input"
                type="text"
                placeholder='Введите заголовок...'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                className="mainform__input"
                type="text"
                placeholder='Введите описание...'
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button className='mainform__button'>Создать</button>
        </form>
    );
};

export default MainForm;