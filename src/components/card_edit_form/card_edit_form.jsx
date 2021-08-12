import React from 'react';
import Button from '../button/button';
import ImageInputFile from '../image_input_file/image_input_file';
import styles from './card_edit_form.module.css';

const CardEditForm = ({card}) => {
  const {name,company,theme,title,email,message,filename,fileURL} = card
  const onSubmit = ()=>{

  };

    return(
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value = {name} />
            <input className={styles.input} type="text" name="company" value = {company} />
            <select className={styles.select} name="theme" value = {theme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" value = {title} />
            <input className={styles.input} type="text" name="email" value = {email} />
            <textarea className={styles.textarea} name="message" value = {message}></textarea>
            <div className={styles.fileInput}> 
                <ImageInputFile />
            </div>
            <Button className={styles.button} name = "Delete" onCLick ={onSubmit} />
        </form>
    )
}

export default CardEditForm;
