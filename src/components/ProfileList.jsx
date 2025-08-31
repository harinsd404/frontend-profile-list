import { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import axios from 'axios';
import '../style/components.css';

export default function ProfileList({ profiles, setProfiles }){

    useEffect(() => {
        axios.get("http://localhost:8080/api/paradox")
            .then(res => setProfiles(res.data))
            .catch(err => console.error(err));
    }, []);

    const Delete = (id)=>{
        axios.delete(`http://localhost:8080/api/paradox/${id}`)
            .then(() => {
                const updateProfile = profiles.filter(profile => profile.id !== id);
                setProfiles(updateProfile);
            })
            .catch(err => console.error(err));
    };
    return (
        <>
            <h1>프로필 카드 목록</h1>
            <div className='cardList'>
                {profiles.map((data, index)=>(
                    <ProfileCard data={data} onDelete={()=>Delete(data.id)} key={index}/>
                ))}
            </div>
        </>
    )
}