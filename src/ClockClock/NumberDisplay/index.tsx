import React from "react";
import { Clock } from "../Clock";
import { DisplayGrid } from "../DisplayGrid";
import { getCoordsForDigit } from "./getCoordsForDigit";

interface NumberDisplayProps {
  n: number;
}

export const NumberDisplay: React.FC<NumberDisplayProps> = ({ n }) => {
  return (
    <DisplayGrid columns={4}>
      {getCoordsForDigit(n).map((row, i) => (
        <React.Fragment key={i}>
          {row.map((hands, j) => (
            <Clock key={j} hands={hands} />
          ))}
        </React.Fragment>
      ))}
    </DisplayGrid>
  );
};