import React, { useState } from 'react';
import "../../styles/_media.scss";
import "./form.scss";

const Form = () => {
    
    const [name, setName] = useState();
    const [num, setNum] = useState();
    const [task, setTask] = useState();

    const handleInput = (type) => {
        return (e) => {
            switch (type){
                case "name":
                    setName(e.target.value)
                    break;
                case "num":
                    setNum(e.target.value);
                    break;
                case "task":
                    setTask(e.target.value);
                    break;
                default: 
                    return false;
            }
        }
    }


    return (
        <section id="application" className='application'>
            <div className='container'>
                <h2 className='application__title'>Оставьте заявку</h2>
                <div className='application__inner'>
                    <div className='application__specialist specialist'>
                        <div className='specialist__avatar'></div>
                        <h4 className='specialist__name'>Юлия Дижа</h4>
                        <p className='specialist__description'>Поможет запустить ваш проект</p>
                    </div>
                    <form className='application__form form'>
                        <div className='form__txt-field'>
                            <input className='form__input' type="text" value={name} required onChange={handleInput('name')}/>
                            <label className='form__label'>Ваше имя *</label>
                            <span></span>
                        </div>
                        <div className='form__txt-field'>
                            <input className='form__input' type="text" value={num} required onChange={handleInput('num')}/>
                            <label className='form__label'>Телефон или мессенджер *</label>
                            <span></span>
                        </div>
                        <div className='form__txt-field'>
                            <textarea className='form__input' type="text" value={task} required onChange={handleInput('task')}/>
                            <label className='form__label'>Краткое описание задачи *</label>
                            <span></span>
                        </div>
                        <button className='form__btn' onClick={(e) => {
                            e.preventDefault();
                            const testNum = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
                            let correctName = name.length >= 2;
                            let correctNum = testNum.test(num);
                            let correctTask = task.length >= 10;
                            if (!correctName)
                                alert("Введите имя длиной больше 2 букв")
                            if (!correctNum)
                                alert("Введите корректный номер")
                            if (!correctTask)
                                alert("Опишите задачу детальнее")
                            if (correctName && correctTask && correctNum){
                                alert('Успешно')
                            }
                        }}>Отправить</button>
                    </form>
                    <div className='application__briefings briefings'>
                        <h4 className='briefings__title'>
                            Скачать брифинги на:
                        </h4>
                        <ul className='briefings__list'>
                            <li className='briefings__list-item'>
                                <a className='briefings__list-item__link' href='logolink'>разработку логотипа</a>
                            </li>
                            <li className='briefings__list-item'>
                                <a className='briefings__list-item__link' href='sitelink'>разработку сайта</a>
                            </li>
                            <li className='briefings__list-item'>
                                <a className='briefings__list-item__link' href='langinglink'>разработку лендинга</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;