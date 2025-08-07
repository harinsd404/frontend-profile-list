import { useRef } from 'react';
import '../style/components.css';

export default function ProfileForm(){
    const inputRef = useRef([]);
    const radioRef = useRef([]);

    let profile = {};
    const addProfile = () => {
        for (let i=0;i<inputRef.current.length;i++){
            if (inputRef.current[i].value.trim() === "") {
                alert('입력되지 않은 값이 있습니다.');
                return inputRef.current[i].focus();
            }
        }
        for(let i=0;i<radioRef.current.length;i++){
            if(radioRef.current[i].checked) {
                profile = {
                    'Name' : inputRef.current[0].value.trim(),
                    'Team' : inputRef.current[1].value.trim(),
                    'Job' : inputRef.current[2].value.trim(),
                    'Phone' : inputRef.current[3].value.trim(),
                    'Image' : radioRef.current[i].value
                } 
                break;
            } else if(!(radioRef.current[1].checked)){
                return alert('이미지를 선택하지 않았습니다.');
            }
        }
        
        
        console.log(profile);

    }

    return (
        <>
            <h1>프로필 카드 만들기</h1>
            <div className='inputBox'>
                <h2>정보를 입력해주세요</h2>
                <div className='inputArea'>
                     <label>Name <input type="text" placeholder='ex) 류승찬' ref={el => inputRef.current[0]=el} /></label>
                    <label>Team <input type="text" placeholder='ex) PARADOX' ref={el => inputRef.current[1]=el} /></label>
                    <label>Job <input type="text" placeholder='ex) Frontend Developer' ref={el => inputRef.current[2]=el} /></label>
                    <label>Phone <input type="text" placeholder='ex) 010-8888-4444' ref={el => inputRef.current[3]=el} /></label>
                    <label>Email <input type="text" placeholder='ex) paradox@gmail.com' ref={el => inputRef.current[4]=el} /></label>
                    <div>
                        Image
                        <label><input type="radio" name='img' value='default' ref={el => radioRef.current[0] = el} />Default</label>
                        <label><input type="radio" name='img' value='reverse' ref={el => radioRef.current[1] = el} />reverse</label>
                    </div>
                </div>
               
                <button type='submit' onClick={addProfile}>등록하기</button>
            </div>
        </>
    )
}