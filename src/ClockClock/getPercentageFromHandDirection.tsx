import { HandDirection } from "./HandDirection";

const handDirectionPercentMap: Record<HandDirection, number> = {
  [HandDirection.Up]: 0,
  [HandDirection.Right]: 0.25,
  [HandDirection.Down]: 0.5,
  [HandDirection.Left]: 0.75,
  [HandDirection.None]: 1 / 8,
};


export const getPercentageFromHandDirection = (dir: HandDirection): number => handDirectionPercentMap[dir]