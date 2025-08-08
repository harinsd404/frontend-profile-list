import { useNavigate } from "react-router-dom";
import defaultImg from '../assets/PARADOX_default.png';
import reverseImg from '../assets/PARADOX_reverse.png';


export default function ProfileCard({ data, onDelete }) {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="card">
                <div className="profileBox">
                    <img src={data.imgUrl=='/assets/PARADOX_default.png'?defaultImg:reverseImg} alt="" />
                    <h3>{data.name}</h3>
                </div>
                <div className="profileInfo">
                    <div className="textArea">
                        <p>Team. @{data.team}</p>
                        <p>{data.job}</p>
                        <p>tel. {data.tel}</p>
                        <p>email. {data.email}</p>
                    </div>
                    <div className="btnArea">
                        <button onClick={()=>navigate('/profile/modify/'+data.id)}>수정</button>
                        <button onClick={onDelete}>삭제</button>
                    </div>
                </div>
            </div>
        </>
    );
}