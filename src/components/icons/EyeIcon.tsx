import Svg, { ClipPath, Defs, G, Path, type SvgProps } from "react-native-svg";

export default function EyeIcon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <G
        fill="#888"
        clipPath="url(#a)"
      >
        <Path d="M15.514 6.28C14.48 4.594 12.128 1.77 8 1.77S1.52 4.595.486 6.28a3.272 3.272 0 0 0 0 3.44C1.52 11.406 3.872 14.23 8 14.23s6.48-2.825 7.514-4.51a3.272 3.272 0 0 0 0-3.44Zm-1.137 2.743C13.49 10.467 11.48 12.897 8 12.897c-3.48 0-5.49-2.43-6.377-3.874a1.945 1.945 0 0 1 0-2.046C2.51 5.533 4.52 3.103 8 3.103c3.48 0 5.49 2.428 6.377 3.874a1.945 1.945 0 0 1 0 2.046Z" />
        <Path d="M8 4.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.667ZM8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
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
