import { useRef } from 'react';
import '../style/components.css';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProfileModify({ profiles, setProfiles }){
    const navigate = useNavigate();
    const inputRef = useRef([]);
    const radioRef = useRef([]);
    const { id } = useParams();
        

    const addProfile = () => {
        let profile;
        for (let i=0;i<inputRef.current.length;i++){
            if (inputRef.current[i].value.trim() === "") {
                alert('입력되지 않은 값이 있습니다.');
                return inputRef.current[i].focus();
            }
        }
        for(let i=0;i<radioRef.current.length;i++){
            if(radioRef.current[i].checked) {
                profile = {
                    id : id,
                    name : inputRef.current[0].value.trim(),
                    team : inputRef.current[1].value.trim(),
                    job : inputRef.current[2].value.trim(),
                    tel : inputRef.current[3].value.trim(),
                    email : inputRef.current[4].value.trim(),
                    imgUrl : radioRef.current[i].value
                } 
                break;
            } else if(!(radioRef.current[1].checked)){
                return alert('이미지를 선택하지 않았습니다.');
            }
        }

        setProfiles(profiles.map((p)=> p.id === id ? profile:p));
        navigate('/profile/profileList');
    }

    return (
        <>
            <h1>프로필 카드 만들기</h1>
            <div className='inputBox'>
                <h2>정보를 입력해주세요</h2>
                <div className='inputArea'>
                     <label>Name <input type="text" placeholder='ex) 류승찬' defaultValue={profiles[id-1].name} ref={el => inputRef.current[0]=el} /></label>
                    <label>Team <input type="text" placeholder='ex) PARADOX' defaultValue={profiles[id-1].team} ref={el => inputRef.current[1]=el} /></label>
                    <label>Job <input type="text" placeholder='ex) Frontend Developer' defaultValue={profiles[id-1].job} ref={el => inputRef.current[2]=el} /></label>
                    <label>Phone <input type="text" placeholder='ex) 010-8888-4444' defaultValue={profiles[id-1].tel} ref={el => inputRef.current[3]=el} /></label>
                    <label>Email <input type="text" placeholder='ex) paradox@gmail.com' defaultValue={profiles[id-1].email} ref={el => inputRef.current[4]=el} /></label>
                    <div>
                        Image
                        <label><input type="radio" name='img' value='src/assets/PARADOX_default.png' 
                        ref={el => radioRef.current[0] = el }
                        defaultChecked={profiles[id-1].imgUrl=="src/assets/PARADOX_default.png"} /> Default</label>
                        <label><input type="radio" name='img' value='src/assets/PARADOX_reverse.png' ref={el => radioRef.current[1] = el}
                        defaultChecked={profiles[id-1].imgUrl=="src/assets/PARADOX_reverse.png"} />reverse</label>
                    </div>
                </div>
               
                <button type='submit' onClick={addProfile}>수정 완료</button>
            </div>
        </>
    )
}