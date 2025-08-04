import Header from '../components/Header';
import '../style/Home.css';

export default function Home(){
    const textLine = [
        "Home : 홈화면을 볼 수 있다.",
        "CardList : 카드 리스트를 볼 수 있다.",
        "Make Card : 카드를 만들 수 있다."
    ]
    const listItme = textLine.map((text, index)=><li key={index}>{text}</li>);

    return(
        <>
            <Header />
            <div className='container'>
                <ul>{listItme}</ul>
            </div>
        </>
    )
}