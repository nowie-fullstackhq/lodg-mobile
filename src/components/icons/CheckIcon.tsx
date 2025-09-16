import Svg, { ClipPath, Defs, G, Path, type SvgProps } from "react-native-svg";

export default function CheckIcon(props: SvgProps) {
  return (
    <Svg
      width={10}
      height={10}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill="#078E17"
          d="M9.3 1.846 3.542 7.604a.417.417 0 0 1-.59 0L.724 5.375a.417.417 0 1 0-.59.59l2.227 2.228a1.253 1.253 0 0 0 1.77 0L9.89 2.436a.417.417 0 1 0-.59-.59Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path
            fill="#fff"
            d="M0 0h10v10H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
