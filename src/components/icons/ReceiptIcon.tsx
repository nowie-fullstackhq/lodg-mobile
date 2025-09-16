import Svg, { ClipPath, Defs, G, Path, type SvgProps } from "react-native-svg";

export default function ReceiptIcon(props: SvgProps) {
  return (
    <Svg
      width={10}
      height={10}
      fill="none"
      {...props}
    >
      <G
        fill="#ADADAD"
        clipPath="url(#a)"
      >
        <Path d="M6.667 0H3.333A2.086 2.086 0 0 0 1.25 2.083v7.5a.417.417 0 0 0 .652.344l.877-.6.878.6a.417.417 0 0 0 .47 0l.876-.6.875.6a.417.417 0 0 0 .47 0l.876-.6.875.6a.417.417 0 0 0 .651-.344v-7.5A2.086 2.086 0 0 0 6.667 0Zm1.25 8.792-.459-.314a.417.417 0 0 0-.471 0l-.875.6-.875-.6a.417.417 0 0 0-.472 0l-.875.6-.875-.6a.417.417 0 0 0-.47 0l-.462.314V2.083a1.25 1.25 0 0 1 1.25-1.25h3.334a1.25 1.25 0 0 1 1.25 1.25v6.709Z" />
        <Path d="M6.667 3.334H3.333a.417.417 0 1 0 0 .833h3.334a.417.417 0 0 0 0-.833ZM5.833 5h-2.5a.417.417 0 0 0 0 .833h2.5a.417.417 0 0 0 0-.833Z" />
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
