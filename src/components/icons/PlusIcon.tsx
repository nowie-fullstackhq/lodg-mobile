import Svg, { ClipPath, Defs, G, Path, type SvgProps } from "react-native-svg";

export default function PlusIcon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill="#2256CB"
          d="M15.333 7.333H8.667V.667A.667.667 0 0 0 8 0a.667.667 0 0 0-.667.667v6.666H.667A.667.667 0 0 0 0 8a.667.667 0 0 0 .667.667h6.666v6.666a.667.667 0 1 0 1.334 0V8.667h6.666a.667.667 0 1 0 0-1.334Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path
            fill="#fff"
            d="M0 0h16v16H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
