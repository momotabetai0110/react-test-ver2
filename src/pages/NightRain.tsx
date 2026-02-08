import { Link } from "react-router-dom";
import { useState, type SubmitEvent } from "react";
import { BOSSES, TERRAINS } from "../constants/nightRainData";
import { type GachaResult } from "../types/nightRainTypes";
import {postNightRainApi} from "../api/nightRainApi";

export default function NightRain() {
  const [results, setResults] = useState<GachaResult[]>([]);
  const [times, setTimes] = useState<number>(1);
  const [isEverIncluded, setIsEverIncluded] = useState<boolean>(false);

  const playGacha = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await postNightRainApi({
      times: Number(times),
      IsEverIncluded: isEverIncluded,
    });
    setResults(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">夜の王ガチャ</div>
      </header>

      <div className="App-body">
        <form onSubmit={playGacha}>
          <div className="Gacha-Item">
            <div className="d-flex align-items-center gap-2">
              <label className="form-label mb-0">ガチャ回数</label>

              <select
                className="form-select w-auto"
                value={times}
                onChange={(e) => setTimes(Number(e.target.value))}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <span>連</span>
            </div>
          </div>
          <div className="Gacha-Item">
            <div className="form-check d-flex align-items-center gap-1">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                id="isEver"
                checked={isEverIncluded}
                onChange={(e) => setIsEverIncluded(e.target.checked)}
              />
              <label className="form-check-label mb-0" htmlFor="isEver">
                常夜を含む
              </label>
            </div>
            <div className="Gacha-Item">
              <button
                className="btn btn-outline-light"
                style={{ borderRadius: "10px" }}
              >
                START
              </button>
            </div>
          </div>
        </form>

        <ul>
          {results !== null &&
            results.map((item, index) => {
              const boss = BOSSES[item.bossesId];
              const terrain = TERRAINS[item.terrainEffectId];
              const key = index + 1;
              return (
                <div
                  className={`NightRain-Card ${item.isEver ? "ever" : ""}`}
                  key={key}
                >
                  <div key={key}>
                    <img src={boss.img} alt={boss.name} />
                  </div>
                  <div className="NightRain-Card-Info">
                    <div className="NightRain-Card-Boss-Name">
                      標的: {boss.name}
                    </div>
                    <div className="NightRain-Card-Terrain">
                      地変: {terrain}
                    </div>
                  </div>
                </div>
              );
            })}
        </ul>
      </div>

      <div className="App-footer">
        <Link to="/" className="btn btn-light disabled">
          Homeへ
        </Link>
        <Link to="/nightRain/statistics" className="btn btn-light">
          統計へ
        </Link>
      </div>
    </div>
  );
}
