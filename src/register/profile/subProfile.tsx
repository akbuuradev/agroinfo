import React from 'react';
import Registers from '../registers/registers';
import Profile from './profile';

const SubProfile = ({login, post, setPost}: any) => {
    return (
        <div className='flex items-start justify-between container'>
            <Profile post={post} setPost={setPost}/>
        </div>
    );
};

export default SubProfile;