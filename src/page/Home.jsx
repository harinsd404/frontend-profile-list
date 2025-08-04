import Header from '../components/Header';

export default function Home(){
    const textLine = [
        "Home : 홈화면을 볼 수 있다.",
        "CardList : 카드 리스트를 볼 수 있다.",
        "Make Card : 카드를 만들 수 있다."
    ]
    const listItme = textLine.map(text=><li>{text}</li>);

    return(
        <>
            <Header />
            <div>
                <ul>{listItme}</ul>
            </div>
        </>
    )
}