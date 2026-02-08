export type StatisticsData = {
  allCount: number;
  bosses: { bossId: number; count: number; probability: number }[];
  terrains: { terrainId: number; count: number; probability: number }[];
};

export type GachaResult = {
    bossesId: number;
    terrainEffectId: number;
    isEver: boolean;
  };