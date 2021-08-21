import { Box, Flex, Grid, GridProps } from "@chakra-ui/react";
import React from "react";

enum HandDirection {
  Up = "Up",
  Right = "Right",
  Down = "Down",
  Left = "Left",
  None = "None",
}

type ClockDirections = [HandDirection, HandDirection];

const handDirectionPercentMap: Record<HandDirection, number> = {
  [HandDirection.Up]: 0,
  [HandDirection.Right]: 0.25,
  [HandDirection.Down]: 0.5,
  [HandDirection.Left]: 0.75,
  [HandDirection.None]: 1 / 8,
};

const HORIZONTAL: ClockDirections = [HandDirection.Left, HandDirection.Right];
const VERTICAL: ClockDirections = [HandDirection.Up, HandDirection.Down];
const UPRIGHT: ClockDirections = [HandDirection.Up, HandDirection.Right];
const UPLEFT: ClockDirections = [HandDirection.Up, HandDirection.Left];
const DOWNRIGHT: ClockDirections = [HandDirection.Right, HandDirection.Down];
const DOWNLEFT: ClockDirections = [HandDirection.Down, HandDirection.Left];
const NONE: ClockDirections = [HandDirection.None, HandDirection.None];

const coordsMap: Record<number, ClockDirections[][]> = {
  0: [
    [DOWNRIGHT, HORIZONTAL, HORIZONTAL, DOWNLEFT],
    [VERTICAL, DOWNRIGHT, DOWNLEFT, VERTICAL],
    [VERTICAL, VERTICAL, VERTICAL, VERTICAL],
    [VERTICAL, VERTICAL, VERTICAL, VERTICAL],
    [VERTICAL, UPRIGHT, UPLEFT, VERTICAL],
    [UPRIGHT, HORIZONTAL, HORIZONTAL, UPLEFT],
  ],
  1: [
    [DOWNRIGHT, HORIZONTAL, DOWNLEFT, NONE],
    [UPRIGHT, DOWNLEFT, VERTICAL, NONE],
    [NONE, VERTICAL, VERTICAL, NONE],
    [NONE, VERTICAL, VERTICAL, NONE],
    [DOWNRIGHT, UPLEFT, UPRIGHT, DOWNLEFT],
    [UPRIGHT, HORIZONTAL, HORIZONTAL, UPLEFT],
  ],
  2: [
    [DOWNRIGHT, HORIZONTAL, HORIZONTAL, DOWNLEFT],
    [UPRIGHT, HORIZONTAL, DOWNLEFT, VERTICAL],
    [DOWNRIGHT, HORIZONTAL, UPLEFT, VERTICAL],
    [VERTICAL, DOWNRIGHT, HORIZONTAL, UPLEFT],
    [VERTICAL, UPRIGHT, HORIZONTAL, DOWNLEFT],
    [UPRIGHT, HORIZONTAL, HORIZONTAL, UPLEFT],
  ],
  3: [
    [DOWNRIGHT, HORIZONTAL, HORIZONTAL, DOWNLEFT],
    [UPRIGHT, HORIZONTAL, DOWNLEFT, VERTICAL],
    [DOWNRIGHT, HORIZONTAL, UPLEFT, VERTICAL],
    [UPRIGHT, HORIZONTAL, DOWNLEFT, VERTICAL],
    [DOWNRIGHT, HORIZONTAL, UPLEFT, VERTICAL],
    [UPRIGHT, HORIZONTAL, HORIZONTAL, UPLEFT],
  ],
  4: [
    [DOWNRIGHT, DOWNLEFT, DOWNRIGHT, DOWNLEFT],
    [VERTICAL, VERTICAL, VERTICAL, VERTICAL],
    [VERTICAL, UPRIGHT, UPLEFT, VERTICAL],
    [UPRIGHT, HORIZONTAL, DOWNLEFT, VERTICAL],
    [NONE, NONE, VERTICAL, VERTICAL],
    [NONE, NONE, UPRIGHT, UPLEFT],
  ],
  5: [
    [DOWNRIGHT, HORIZONTAL, HORIZONTAL, DOWNLEFT],
    [VERTICAL, DOWNRIGHT, HORIZONTAL, UPLEFT],
    [VERTICAL, UPRIGHT, HORIZONTAL, DOWNLEFT],
    [UPRIGHT, HORIZONTAL, DOWNLEFT, VERTICAL],
    [DOWNRIGHT, HORIZONTAL, UPLEFT, VERTICAL],
    [UPRIGHT, HORIZONTAL, HORIZONTAL, UPLEFT],
  ],
  6: [
    [DOWNRIGHT, HORIZONTAL, HORIZONTAL, DOWNLEFT],
    [VERTICAL, DOWNRIGHT, HORIZONTAL, UPLEFT],
    [VERTICAL, UPRIGHT, HORIZONTAL, DOWNLEFT],
    [VERTICAL, DOWNRIGHT, DOWNLEFT, VERTICAL],
    [VERTICAL, UPRIGHT, UPLEFT, VERTICAL],
    [UPRIGHT, HORIZONTAL, HORIZONTAL, UPLEFT],
  ],
  7: [
    [DOWNRIGHT, HORIZONTAL, HORIZONTAL, DOWNLEFT],
    [UPRIGHT, HORIZONTAL, DOWNLEFT, VERTICAL],
    [NONE, NONE, VERTICAL, VERTICAL],
    [NONE, NONE, VERTICAL, VERTICAL],
    [NONE, NONE, VERTICAL, VERTICAL],
    [NONE, NONE, UPRIGHT, UPLEFT],
  ],
  8: [
    [DOWNRIGHT, HORIZONTAL, HORIZONTAL, DOWNLEFT],
    [VERTICAL, DOWNRIGHT, DOWNLEFT, VERTICAL],
    [VERTICAL, UPRIGHT, UPLEFT, VERTICAL],
    [VERTICAL, DOWNRIGHT, DOWNLEFT, VERTICAL],
    [VERTICAL, UPRIGHT, UPLEFT, VERTICAL],
    [UPRIGHT, HORIZONTAL, HORIZONTAL, UPLEFT],
  ],
  9: [
    [DOWNRIGHT, HORIZONTAL, HORIZONTAL, DOWNLEFT],
    [VERTICAL, DOWNRIGHT, DOWNLEFT, VERTICAL],
    [VERTICAL, UPRIGHT, UPLEFT, VERTICAL],
    [UPRIGHT, HORIZONTAL, DOWNLEFT, VERTICAL],
    [NONE, NONE, VERTICAL, VERTICAL],
    [NONE, NONE, UPRIGHT, UPLEFT],
  ],
};

interface HandProps {
  percent: number;
}

const Hand: React.FC<HandProps> = ({ percent }) => {
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
      bg="black"
    />
  );
};

interface ClockProps {
  hands: ClockDirections;
}

const Clock: React.FC<ClockProps> = ({ hands }) => {
  return (
    <Box border="1px solid black" rounded="full" pos="relative">
      <Hand percent={handDirectionPercentMap[hands[0]]} />
      <Hand percent={handDirectionPercentMap[hands[1]]} />
    </Box>
  );
};

interface DisplayGridProps extends GridProps {
  columns: number;
}


const CELL_SIZE = '2vw'

const DisplayGrid: React.FC<DisplayGridProps> = ({ columns, ...rest }) => (
  <Grid templateColumns={`repeat(${columns}, ${CELL_SIZE})`} autoRows={CELL_SIZE} {...rest} />
);

interface NumberDisplayProps {
  n: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ n }) => {
  return (
    <DisplayGrid columns={4}>
      {coordsMap[n].map((row, i) => (
        <React.Fragment key={i}>
          {row.map((hands, j) => (
            <Clock key={j} hands={hands} />
          ))}
        </React.Fragment>
      ))}
    </DisplayGrid>
  );
};

const separatorCoords: ClockDirections[][] = [
  [NONE, NONE],
  [DOWNRIGHT, DOWNLEFT],
  [UPRIGHT, UPLEFT],
  [DOWNRIGHT, DOWNLEFT],
  [UPRIGHT, UPLEFT],
  [NONE, NONE],
];

const Separator: React.FC = () => {
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

const getTimeTillSeconds = (date: Date) => Math.floor(date.getTime() / 1000);

export const ClockClock: React.FC = () => {
  const [date, setDate] = React.useState<Date>(() => new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const isSameSecond = getTimeTillSeconds(now) === getTimeTillSeconds(date);

      if (!isSameSecond) setDate(now);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const hours = date.getHours();
  const h2 = hours % 10;
  const h1 = (hours - h2) / 10;

  const minutes = date.getMinutes();
  const m2 = minutes % 10;
  const m1 = (minutes - m2) / 10;

  const seconds = date.getSeconds();
  const s2 = seconds % 10;
  const s1 = (seconds - s2) / 10;

  return (
    <Flex>
      <NumberDisplay n={h1} />
      <NumberDisplay n={h2} />
      <Separator />
      <NumberDisplay n={m1} />
      <NumberDisplay n={m2} />
      <Separator />
      <NumberDisplay n={s1} />
      <NumberDisplay n={s2} />
    </Flex>
  );
};
