export default function ProfileCard({ data }) {
    return (
        <>
            <div className="card">
                <div className="profileBox">
                    <img src={data.imgUrl} alt="" />
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
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </div>
            </div>
        </>
    );
}