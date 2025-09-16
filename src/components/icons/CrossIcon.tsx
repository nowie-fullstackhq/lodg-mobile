import Svg, { Path, type SvgProps } from "react-native-svg";

export default function CrossIcon(props: SvgProps) {
  return (
    <Svg
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <Path
        fill="#2256CB"
        d="M13 1a1 1 0 0 0-1.414 0L7 5.586 2.414 1A1 1 0 0 0 1 2.414L5.586 7 1 11.586A1 1 0 0 0 2.414 13L7 8.414 11.586 13A1 1 0 0 0 13 11.586L8.414 7 13 2.414A1 1 0 0 0 13 1Z"
      />
    </Svg>
  );
}
