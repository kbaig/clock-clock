import { Box } from "@chakra-ui/react";
import React from "react";

interface HandProps {
  percent: number;
}

export const Hand: React.FC<HandProps> = ({ percent }) => {
  return (
    <Box
      width={1}
      height="50%"
      pos="absolute"
      top="0"
      left="50%"
      transform={`translateX(-50%) rotate(${percent * 360}deg)`}
      transformOrigin="bottom"
      transition="transform 300ms ease-in-out"
      bg="white"
    />
  );
};