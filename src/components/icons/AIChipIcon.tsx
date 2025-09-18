import Svg, { Path, Rect, type SvgProps } from "react-native-svg";

export default function AIChipIcon(props: SvgProps) {
  return (
    <Svg
      width={29}
      height={29}
      fill="none"
      {...props}
    >
      <Path
        stroke="#2256CB"
        strokeLinecap="round"
        strokeWidth={1.174}
        d="M13.913 1v27M10.392 2.174v23.478M17.435 3.348v21.13M1 13.922h27M2.119 17.434h23.478M3.404 10.391h21.13"
      />
      <Rect
        width={15.261}
        height={15.261}
        x={6.282}
        y={6.283}
        stroke="#2256CB"
        strokeWidth={1.174}
        rx={2.935}
      />
      <Rect
        width={12.913}
        height={12.913}
        x={7.457}
        y={7.457}
        fill="#2256CB"
        stroke="#F6F6F6"
        strokeWidth={1.174}
        rx={1.761}
      />
      <Path
        fill="#F6F6F6"
        d="m10.538 17 1.799-5.215h1.232L15.368 17h-1.036l-.371-1.12h-2.016L11.567 17h-1.03Zm1.68-1.96h1.47l-.868-2.597h.266l-.868 2.597Zm3.87 1.96v-5.215h.952V17h-.952Z"
      />
    </Svg>
  );
}
