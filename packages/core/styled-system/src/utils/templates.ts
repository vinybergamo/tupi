const transformTemplate = [
  "rotate(var(--tupi-rotate, 0))",
  "scaleX(var(--tupi-scale-x, 1))",
  "scaleY(var(--tupi-scale-y, 1))",
  "skewX(var(--tupi-skew-x, 0))",
  "skewY(var(--tupi-skew-y, 0))",
];

export function getTransformTemplate() {
  return [
    "translateX(var(--tupi-translate-x, 0))",
    "translateY(var(--tupi-translate-y, 0))",
    ...transformTemplate,
  ].join(" ");
}

export function getTrasnformGpuTemplate() {
  return [
    "translate3d(var(--tupi-translate-x, 0), var(--tupi-translate-y, 0), 0)",
    ...transformTemplate,
  ].join(" ");
}

export const filterTemplate = {
  "--tupi-blur": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-brightness": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-contrast": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-grayscale": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-hue-rotate": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-invert": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-saturate": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-sepia": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-drop-shadow": "var(--tupi-empty,/*!*/ /*!*/)",
  filter: [
    "var(--tupi-blur)",
    "var(--tupi-brightness)",
    "var(--tupi-contrast)",
    "var(--tupi-grayscale)",
    "var(--tupi-hue-rotate)",
    "var(--tupi-invert)",
    "var(--tupi-saturate)",
    "var(--tupi-sepia)",
    "var(--tupi-drop-shadow)",
  ].join(" "),
};

export const backdropFilterTemplate = {
  backdropFilter: [
    "var(--tupi-backdrop-blur)",
    "var(--tupi-backdrop-brightness)",
    "var(--tupi-backdrop-contrast)",
    "var(--tupi-backdrop-grayscale)",
    "var(--tupi-backdrop-hue-rotate)",
    "var(--tupi-backdrop-invert)",
    "var(--tupi-backdrop-opacity)",
    "var(--tupi-backdrop-saturate)",
    "var(--tupi-backdrop-sepia)",
  ].join(" "),
  "--tupi-backdrop-blur": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-backdrop-brightness": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-backdrop-contrast": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-backdrop-grayscale": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-backdrop-hue-rotate": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-backdrop-invert": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-backdrop-opacity": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-backdrop-saturate": "var(--tupi-empty,/*!*/ /*!*/)",
  "--tupi-backdrop-sepia": "var(--tupi-empty,/*!*/ /*!*/)",
};

export function getRingTemplate(value: any) {
  return {
    "--tupi-ring-offset-shadow":
      "var(--tupi-ring-inset) 0 0 0 var(--tupi-ring-offset-width) var(--tupi-ring-offset-color)",
    "--tupi-ring-shadow":
      "var(--tupi-ring-inset) 0 0 0 calc(var(--tupi-ring-width) + var(--tupi-ring-offset-width)) var(--tupi-ring-color)",
    "--tupi-ring-width": value,
    boxShadow: [
      "var(--tupi-ring-offset-shadow)",
      "var(--tupi-ring-shadow)",
      "var(--tupi-shadow, 0 0 #0000)",
    ].join(", "),
  };
}

export const flexDirectionTemplate = {
  "row-reverse": {
    space: "--tupi-spcae-x-reverse",
    divide: "--tupi-divide-x-reverse",
  },
  "column-reverse": {
    space: "--tupi-spcae-y-reverse",
    divide: "--tupi-divide-y-reverse",
  },
};
