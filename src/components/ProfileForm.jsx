import '../style/components.css';

export default function ProfileForm(){
    return (
        <>
            <h1>프로필 카드 만들기</h1>
            <form>
                <h2>정보를 입력해주세요</h2>
                <label>Name <input type="text" placeholder='ex) 류승찬' /></label>
                <label>Team <input type="text" placeholder='ex) PARADOX' /></label>
                <label>Job <input type="text" placeholder='ex) Frontend Developer' /></label>
                <label>Phone <input type="text" placeholder='ex) 010-8888-4444' /></label>
                <label>Email <input type="text" placeholder='ex) paradox@gmail.com' /></label>
                <fieldset>
                    Image
                    <label><input type="radio" name='img' />Default</label>
                    <label><input type="radio" name='img' />reverse</label>
                </fieldset>
            </form>
        </>
    )
}