import Svg, { Circle, Path, type SvgProps } from "react-native-svg";

export default function HousePercentIcon(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={21}
      fill="none"
      {...props}
    >
      <Path
        stroke="#2256CB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="M3.333 14.5v-4.457c0-.445 0-.667.054-.875.048-.183.127-.357.234-.514.12-.177.288-.325.623-.617l4.001-3.502c.622-.543.933-.815 1.282-.918a1.66 1.66 0 0 1 .946 0c.35.103.661.375 1.283.92l4 3.5c.336.293.502.44.623.616.107.16.185.331.233.515.055.208.055.43.055.875v4.46c0 .932 0 1.398-.182 1.754-.16.314-.415.569-.73.728-.355.182-.82.182-1.753.182H5.997c-.931 0-1.398 0-1.754-.182a1.666 1.666 0 0 1-.728-.728c-.182-.357-.182-.824-.182-1.757ZM7.5 14.667l5-5.833"
      />
      <Circle
        cx={7.5}
        cy={9.667}
        r={0.833}
        fill="#2256CB"
      />
      <Circle
        cx={12.5}
        cy={13.833}
        r={0.833}
        fill="#2256CB"
      />
    </Svg>
  );
}
