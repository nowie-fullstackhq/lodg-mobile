import Svg, { Path, type SvgProps } from "react-native-svg";

export default function ExpensesIcon(props: SvgProps) {
  return (
    <Svg
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <Path
        fill="#2256CB"
        d="M7.608 0v6.158l5.787-2.106A6.169 6.169 0 0 0 7.608 0Z"
      />
      <Path
        fill="#2256CB"
        d="M6.43 7.842V1.684A6.165 6.165 0 0 0 .27 7.842 6.168 6.168 0 0 0 6.43 14a6.165 6.165 0 0 0 6.159-6.158 6.13 6.13 0 0 0-.372-2.107L6.43 7.842Z"
      />
    </Svg>
  );
}
