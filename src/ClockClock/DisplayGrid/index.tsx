import { Grid, GridProps } from "@chakra-ui/react";
import React from "react";

interface DisplayGridProps extends GridProps {
  columns: number;
}


const CELL_SIZE = '40px'

export const DisplayGrid: React.FC<DisplayGridProps> = ({ columns, ...rest }) => (
  <Grid templateColumns={`repeat(${columns}, ${CELL_SIZE})`} autoRows={CELL_SIZE} {...rest} />
);