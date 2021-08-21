import React from "react";
import { Clock } from "../Clock";
import { ClockDirections } from "../ClockDirections";
import { DisplayGrid } from "../DisplayGrid";
import { NONE, DOWNRIGHT, DOWNLEFT, UPRIGHT, UPLEFT } from "../HORIZONTAL";

const separatorCoords: ClockDirections[][] = [
  [NONE, NONE],
  [DOWNRIGHT, DOWNLEFT],
  [UPRIGHT, UPLEFT],
  [DOWNRIGHT, DOWNLEFT],
  [UPRIGHT, UPLEFT],
  [NONE, NONE],
];

export const NumberDisplaySeparator: React.FC = () => {
  return (
    <DisplayGrid columns={2}>
      {separatorCoords.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((hands, j) => (
            <Clock key={j} hands={hands} />
          ))}
        </React.Fragment>
      ))}
    </DisplayGrid>
  );
};
