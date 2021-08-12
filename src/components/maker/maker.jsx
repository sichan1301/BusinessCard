import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const [cards,setCards] = useState([
        {
            id : '1',
            name : 'sichan',
            company : 'kakao',
            theme : 'dark',
            title : 'Frontend Engineer',
            email : 'sichan1301@naver.com',
            message : 'Please...',
            filename : 'sichan',
            fileURL : null,
        },
        {
            id : '2',
            name : 'sichan2',
            company : 'kakao',
            theme : 'light',
            title : 'Frontend Engineer',
            email : 'sichan1301@naver.com',
            message : 'Please...',
            filename : 'sichan',
            fileURL : null,
        },
        {
            id : '3',
            name : 'sichan3',
            company : 'kakao',
            theme : 'colorful',
            title : 'Frontend Engineer',
            email : 'sichan1301@naver.com',
            message : 'Please...',
            filename : 'sichan',
            fileURL : null,
        } 
    ]);

    const history = useHistory();

    const onLogout = () =>{
        authService.logout();
    };
    
    useEffect(() =>{
        authService.onAuthChange(user => {
            if(!user){
                history.push('/');
            }
        })
    })

    const addCard = card => {
        const updated = [...cards, card];  //기존에 있는 cards를 복사해오고, 추가하는 card 하나만 추가
        setCards(updated);  
    };

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards ={cards} addCard ={addCard} />
                <Preview cards ={cards} />
            </div>
            <Footer />
        </section>
    )
}     


export default Maker;