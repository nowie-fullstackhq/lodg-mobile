import Svg, { ClipPath, Defs, G, Path, type SvgProps } from "react-native-svg";

export default function PencilIcon(props: SvgProps) {
  return (
    <Svg
      width={12}
      height={13}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill="#2256CB"
          d="M11.427 1.43a1.813 1.813 0 0 0-2.562 0L.733 9.56A2.485 2.485 0 0 0 0 11.33v1.026a.5.5 0 0 0 .5.5h1.027a2.48 2.48 0 0 0 1.767-.732l8.133-8.132a1.813 1.813 0 0 0 0-2.562Zm-8.84 9.986a1.51 1.51 0 0 1-1.06.44H1v-.527a1.49 1.49 0 0 1 .44-1.06L7.61 4.096l1.15 1.15-6.174 6.17Zm8.132-8.132L9.466 4.537 8.316 3.39 9.57 2.136a.812.812 0 1 1 1.147 1.15l.002-.002Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path
            fill="#fff"
            d="M0 .855h12v12H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
