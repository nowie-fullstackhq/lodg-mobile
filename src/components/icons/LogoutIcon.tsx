import Svg, { ClipPath, Defs, G, Path, type SvgProps } from "react-native-svg";

export default function LogoutIcon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <G
        fill="#2256CB"
        clipPath="url(#a)"
      >
        <Path d="M7.672 15a7 7 0 1 1 0-14v14Z" />
        <Path
          fillRule="evenodd"
          d="M11.583 4.911a.656.656 0 0 0 0 .928l1.505 1.505H5.921a.656.656 0 0 0 0 1.312h7.166l-1.505 1.505a.656.656 0 1 0 .928.928l2.625-2.625a.656.656 0 0 0 0-.928L12.51 4.911a.656.656 0 0 0-.928 0Z"
          clipRule="evenodd"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path
            fill="#fff"
            d="M.5.5h15v15H.5z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
