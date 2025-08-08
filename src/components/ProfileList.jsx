import ProfileCard from './ProfileCard';
import '../style/components.css';

export default function ProfileList({ profiles, setProfiles }){
    const Delete = (id)=>{
        const updateProfile = profiles.filter(profiles => profiles.id != id);
        setProfiles(updateProfile);
    }
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