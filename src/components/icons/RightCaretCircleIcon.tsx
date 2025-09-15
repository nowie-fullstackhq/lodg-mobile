import Svg, { Path, type SvgProps } from "react-native-svg";

export default function RightCaretCircleIcon(props: SvgProps) {
  return (
    <Svg
      width={12}
      height={12}
      fill="none"
      {...props}
    >
      <Path
        fill={props.fill}
        d="M6 .167A5.843 5.843 0 0 1 11.833 6 5.843 5.843 0 0 1 6 11.833 5.843 5.843 0 0 1 .167 6 5.843 5.843 0 0 1 6 .167ZM4.956 7.75a.44.44 0 0 0 0 .618.433.433 0 0 0 .309.129c.11 0 .222-.041.31-.129L7.632 6.31a.44.44 0 0 0 0-.618L5.574 3.63a.44.44 0 0 0-.618 0 .44.44 0 0 0 0 .619L6.706 6l-1.75 1.75Z"
      />
    </Svg>
  );
}
