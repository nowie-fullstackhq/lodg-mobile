import Svg, { ClipPath, Defs, G, Path, type SvgProps } from "react-native-svg";

export default function TimeQuarterIcon(props: SvgProps) {
  return (
    <Svg
      width={10}
      height={10}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill="#FE9705"
          d="M10 5A5 5 0 1 1 0 5a.417.417 0 1 1 .833 0A4.167 4.167 0 1 0 5 .833.417.417 0 1 1 5 0a5.005 5.005 0 0 1 5 5Zm-5.718-.417h-.949a.417.417 0 0 0 0 .834h.95a.83.83 0 1 0 1.134-1.135V2.917a.417.417 0 1 0-.834 0v1.365a.833.833 0 0 0-.3.301ZM.762 3.66a.417.417 0 1 0 0-.833.417.417 0 0 0 0 .833Zm.997-1.49a.417.417 0 1 0 0-.834.417.417 0 0 0 0 .834Zm1.482-.986a.417.417 0 1 0 0-.834.417.417 0 0 0 0 .834Z"
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
