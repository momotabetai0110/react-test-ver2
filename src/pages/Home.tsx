import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App-Body">
      <h2>ようこそ</h2>
      <h3>好きなボタンを押してね</h3>

      <Link to="/face" className="btn btn-primary">
        Faceへ
      </Link>
      <Link to="/nightRain" className="btn btn-primary">
        NightRainへ
      </Link>
    </div>
  );
}
