import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../redux/selectors/selectors';
import userOperations from '../../redux/thunk/thunk';
import styles from './styles.module.css';

const UserPage = () => {
    const userDataRes = useSelector(userData)
    const dispatch = useDispatch();
    const {getUserData} = userOperations;
    useEffect(() => {
        dispatch(userOperations.getUserData())
    }, [])
    return (
        <div>
            <div className={styles.userWelcome}>
                Добро пожаловать на наш веб-сайт!
            </div>

            <div className={styles.userCard}>
                <p> Валентина Вухова</p>
                <p>ID: 19230495</p>
                <p>Баллы: 980 pc</p>
            </div>

        </div>
    );
};

export default UserPage;