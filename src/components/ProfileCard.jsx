import { useNavigate } from "react-router-dom";
import defaultImg from '../assets/PARADOX_default.png';
import reverseImg from '../assets/PARADOX_reverse.png';
import '../style/components.css';


export default function ProfileCard({ data, onDelete }) {
    const navigate = useNavigate();
    console.log(data.imgUrl);
    
    return (
        <>
            <div className="card">
                <div className="profileBox">
                    <img src={data.imgUrl=='src/assets/PARADOX_default.png'?defaultImg:reverseImg} alt="" />
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
                        <button onClick={()=>navigate('/profile/modify/'+data.id)} className="correctionBtn">수정</button>
                        <button onClick={onDelete} className="deleteBtn">삭제</button>
                    </div>
                </div>
            </div>
        </>
    );
}