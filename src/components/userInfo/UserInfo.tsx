import React from 'react';
import {userService} from "@/services/api.services";
import styles from './User.module.css'

const UserInfo = async () => {
    const user = await userService.getUser()
    return (
        <div className={styles.user}>
            {user.username}
        </div>
    );
};

export default UserInfo;