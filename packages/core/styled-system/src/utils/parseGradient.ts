import { Transform } from "./types";

const directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-left": "to left",
  "to-tl": "to top left",
};

const valueSet = new Set(Object.values(directionMap));

export const globalSet = new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset",
]);

const trimSpace = (str: string) => str.trim();

export function parseGradient(
  value: string | null | undefined,
  theme: Record<string, any>
) {
  if (value == null || globalSet.has(value)) return value;

  const regex = /(^[a-z-A-Z]+)\((.*)\)/g;
  const results = regex.exec(value);
  const type = results?.[1];
  const values = results?.[2];

  if (!type || !values) return value;

  const _type = type.includes("-gradient") ? type : `${type}-gradient`;
  const [maybeDirection, ...stops] = values
    .split(",")
    .map(trimSpace)
    .filter(Boolean);

  if (stops?.length === 0) return value;

  const direction =
    maybeDirection in directionMap
      ? (directionMap as any)[maybeDirection]
      : maybeDirection;

  stops.unshift(direction);

  const _values = stops.map((stop) => {
    if (valueSet.has(stop)) return stop;

    const firstStop = stop.indexOf(" ");

    const [_color, _stop] =
      firstStop !== -1
        ? [stop.substring(0, firstStop), stop.substring(firstStop + 1)]
        : [stop];

    const _stopOrFunc = isCSSFunction(_stop)
      ? _stop
      : _stop && _stop.split(" ");

    const key = `colors.${_color}`;
    const color = key in theme._cssMap ? theme._cssMap[key].varRef : _color;

    return _stopOrFunc
      ? [
          color,
          ...(Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]),
        ].join(" ")
      : color;
  });

  return `${_type}(${_values.join(", ")})`;
}

export const isCSSFunction = (value: unknown) => {
  return (
    typeof value === "string" && value.includes("(") && value.includes(")")
  );
};

export const gradientTransform: Transform = (value, theme) =>
  parseGradient(value, theme ?? {});
