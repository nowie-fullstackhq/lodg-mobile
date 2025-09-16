import Svg, { Path, type SvgProps } from "react-native-svg";

export default function WarningIcon(props: SvgProps) {
  return (
    <Svg
      width={10}
      height={10}
      fill="none"
      {...props}
    >
      <Path
        stroke="#F27A80"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.833}
        d="M5 5.529v-2.82M9.583 5A4.583 4.583 0 1 1 .417 5a4.583 4.583 0 0 1 9.166 0Z"
      />
      <Path
        fill="#F27A80"
        stroke="#F27A80"
        strokeWidth={0.313}
        d="M5.353 7.115a.353.353 0 1 1-.706 0 .353.353 0 0 1 .706 0Z"
      />
    </Svg>
  );
}
