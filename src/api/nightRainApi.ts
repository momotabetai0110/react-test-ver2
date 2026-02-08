import type { GachaResult } from "../types/nightRainTypes";
import type { StatisticsData } from "../types/nightRainTypes";
export type NightRainRequest = {
  times: number;
  IsEverIncluded: boolean;
};

const url = "http://localhost:5156/api/";

export async function postNightRainApi(
  params: NightRainRequest
): Promise<GachaResult[]> {
  const response = await fetch(`${url}NightRain`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  const result: GachaResult[] = await response.json();
  return result;
}

export async function getNightRainApi(): Promise<StatisticsData> {
  const response = await fetch(`${url}NightRain`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result: StatisticsData = await response.json();
  return result;
}
