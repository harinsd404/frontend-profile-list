export default function ProfileCard({ data }) {
    const image = "../assets/PARADOX_" + data.image;
    let infoText = data.map(text=><p key={text}>{data.text}</p>);
    infoText.pop();
    infoText.pop(0);
    
    return (
        <>
            <div>
                <div className="profileBox">
                    <img src={image} alt="" />
                    <h3>{profile.name}</h3>
                </div>
                <div className="profileInfo">
                    <div className="textArea">{infoText}</div>
                    <div className="btnArea">
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </div>
            </div>
        </>
    );
}