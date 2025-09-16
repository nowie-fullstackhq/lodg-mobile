import Svg, { Path, type SvgProps } from "react-native-svg";

export default function SocialsIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        fill="#2256CB"
        d="M16.5 2.25h-9A5.256 5.256 0 0 0 2.25 7.5v9a5.256 5.256 0 0 0 5.25 5.25h9a5.256 5.256 0 0 0 5.25-5.25v-9a5.256 5.256 0 0 0-5.25-5.25ZM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm5.625-9a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM15 12a3 3 0 1 1-5.999 0A3 3 0 0 1 15 12Z"
      />
    </Svg>
  );
}
