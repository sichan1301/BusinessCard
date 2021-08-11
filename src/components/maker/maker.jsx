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
            theme : 'light',
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
            theme : 'light',
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
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards ={cards} />
                <Preview cards ={cards} />
            </div>
            <Footer />
        </section>
    )
}     


export default Maker;