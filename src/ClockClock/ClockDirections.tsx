import { HandDirection } from "./HandDirection";

export type ClockDirections = [HandDirection, HandDirection];


export const HORIZONTAL: ClockDirections = [HandDirection.Left, HandDirection.Right];
export const VERTICAL: ClockDirections = [HandDirection.Up, HandDirection.Down];
export const UPRIGHT: ClockDirections = [HandDirection.Up, HandDirection.Right];
export const UPLEFT: ClockDirections = [HandDirection.Up, HandDirection.Left];
export const DOWNRIGHT: ClockDirections = [HandDirection.Right, HandDirection.Down];
export const DOWNLEFT: ClockDirections = [HandDirection.Down, HandDirection.Left];
export const NONE: ClockDirections = [HandDirection.None, HandDirection.None];
