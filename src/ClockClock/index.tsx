import { Flex } from "@chakra-ui/react";
import React from "react";
import { getTimeTillSeconds } from "../util/getTimeTillSeconds";
import { NumberDisplay } from "./NumberDisplay";
import { NumberDisplaySeparator } from "./NumberDisplaySeparator";

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
      <NumberDisplaySeparator />
      <NumberDisplay n={m1} />
      <NumberDisplay n={m2} />
      <NumberDisplaySeparator />
      <NumberDisplay n={s1} />
      <NumberDisplay n={s2} />
    </Flex>
  );
};
