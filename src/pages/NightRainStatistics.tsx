import { Link } from "react-router-dom";
import { BOSSES, TERRAINS } from "../constants/nightRainData";
import { useEffect, useState } from "react";
import { type StatisticsData } from "../types/nightRainTypes";
import {getNightRainApi} from "../api/nightRainApi";

export default function NightRainStatistics() {
  const [statisticsData, setStatisticsData] = useState<StatisticsData | null>(
    null
  );
  const [tabStatus, setTabStatus] = useState(1);
  const getStatistics = async () => {
    const data = await getNightRainApi();
    setStatisticsData(data);
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
                  <div className="App-Statistics-Items" key={item.bossId}>
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
                  <div className="App-Statistics-Items" key={item.terrainId}>
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
        <Link to="/nightRain/" className="btn btn-light">
          ガチャへ
        </Link>
      </div>
    </div>
  );
}
