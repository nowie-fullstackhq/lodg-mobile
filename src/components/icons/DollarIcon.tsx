import Svg, { ClipPath, Defs, G, Path, type SvgProps } from "react-native-svg";

export default function DollarIcon(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={21}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill="#000"
          d="M11.61 3.833a2.56 2.56 0 0 1 2.557 2.557.834.834 0 0 0 1.666 0V6.287a4.228 4.228 0 0 0-4.223-4.12h-.777v-.834a.833.833 0 1 0-1.666 0v.834H8.39a4.223 4.223 0 0 0-1.333 8.229l2.11.704v6.067H8.39a2.56 2.56 0 0 1-2.557-2.557.833.833 0 0 0-1.666 0V14.713a4.227 4.227 0 0 0 4.223 4.12h.777v.834a.833.833 0 0 0 1.666 0v-.834h.777a4.223 4.223 0 0 0 1.333-8.229l-2.11-.704V3.833h.777Zm.808 8.351a2.556 2.556 0 0 1-.808 4.983h-.777v-5.511l1.585.528Zm-3.251-2.84-1.584-.528a2.557 2.557 0 0 1 .807-4.983h.777v5.511Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path
            fill="#fff"
            d="M0 .5h20v20H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
