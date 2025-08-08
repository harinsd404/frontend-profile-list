import ProfileCard from './ProfileCard';

export default function ProfileList({ profiles, setProfiles }){
    return (
        <>
            <h1>프로필 카드 목록</h1>
            <div className='cardList'>
                {profiles.map((data, index)=>(
                    <ProfileCard data={data} key={index}/>
                ))}
            </div>
        </>
    )
}