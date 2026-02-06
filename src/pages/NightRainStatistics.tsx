import { Link } from "react-router-dom";
import { BOSSES } from "../constants/bosses";
import { TERRAINS } from "../constants/bosses";
import { useEffect, useState } from "react";

export default function NightRainStatistics() {
  const [statisticsData, setStatisticsData] = useState(null);
  const [tabStatus, setTabStatus] = useState(1);
  const getStatistics = async () => {
    console.log("Api Start");
    const response = await fetch("http://localhost:5156/api/NightRain", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const statisticsData: [] = await response.json();
    setStatisticsData(statisticsData);
  };
  useEffect(() => {
    getStatistics();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-title">夜の王ガチャ</div>
      </div>
      <div className="App-body">
        {statisticsData == null && <div>ロード中...</div>}
        {/* ボス統計タブ*/}
        {statisticsData !== null && (
          <div className="Gacha-Count">
            <h3>総ガチャ回数　{statisticsData.allCount}　回</h3>
          </div>
        )}

        <div className="App-Tab">
          <div
            className={`App-Tab-Button ${tabStatus === 1 ? "active" : ""}`}
            onClick={() => setTabStatus(1)}
          >
            ボス
          </div>
          <div
            className={`App-Tab-Button ${tabStatus === 2 ? "active" : ""}`}
            onClick={() => setTabStatus(2)}
          >
            地変
          </div>
        </div>

        {statisticsData !== null && tabStatus == 1 && (
          <div>
            <div className="App-Statistics">
              {statisticsData.bosses.map((item) => {
                const boss = BOSSES[item.bossId];
                return (
                  <div className="App-Statistics-Items">
                    <div className="App-Statistics-Item">
                      <img src={boss.img} alt={boss.name} />
                    </div>
                    <div className="App-Statistics-Item">{item.count}回</div>
                    <div className="App-Statistics-Item">
                      {item.probability}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* 地変統計タブ */}

        {statisticsData !== null && tabStatus == 2 && (
          <div>
            <div className="App-Statistics">
              {statisticsData.terrains.map((item) => {
                const terrain = TERRAINS[item.terrainId];
                return (
                  <div className="App-Statistics-Items">
                    <div className="App-Statistics-Item">{terrain}</div>
                    <div className="App-Statistics-Item">{item.count}回</div>
                    <div className="App-Statistics-Item">
                      {item.probability}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="App-footer">
        <Link to="/nightRain/" className="btn btn-primary">
          ガチャへ
        </Link>
      </div>
    </div>
  );
}
