/* eslint-disable no-unused-vars */
export type CSSMap = Record<
  string,
  { value: string; var: string; varRef: string }
>;

export type Transform = (
  value: any,
  theme: CssTheme,
  styles?: Record<string, any>
) => any;

export type WithCSSVar<T> = T & {
  __cssVars: Record<string, any>;
  __cssMap: CSSMap;
  __breakpoinst: any;
};

export type CssTheme = WithCSSVar<{
  breakpoints: Record<string, any>;
  direction?: "ltr" | "rtl";
  [key: string]: any;
}>;
