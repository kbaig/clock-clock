import { Grid, GridProps } from "@chakra-ui/react";
import React from "react";

interface DisplayGridProps extends GridProps {
  columns: number;
}

export const DisplayGrid: React.FC<DisplayGridProps> = ({
  columns,
  ...rest
}) => <Grid templateColumns={`repeat(${columns}, auto)`} {...rest} />;
