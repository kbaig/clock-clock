import { Box } from "@chakra-ui/react";
import React from "react";
import { ClockDirections } from "../ClockDirections";
import { getPercentageFromHandDirection } from "../getPercentageFromHandDirection";
import { Hand } from "./Hand";

interface ClockProps {
  hands: ClockDirections;
}

export const Clock: React.FC<ClockProps> = ({ hands }) => {
  return (
    <Box border="1px solid black" rounded="full" pos="relative">
      <Hand percent={getPercentageFromHandDirection(hands[0])} />
      <Hand percent={getPercentageFromHandDirection(hands[1])} />
    </Box>
  );
};
