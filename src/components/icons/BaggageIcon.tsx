import Svg, { Path, type SvgProps } from "react-native-svg";

export default function BaggageIcon(props: SvgProps) {
  return (
    <Svg
      width={23}
      height={20}
      fill="none"
      {...props}
    >
      <Path
        stroke="#2256CB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M7.614 16.667V5.23m7.623 11.436V5.23m-6.988 0c0-.798.334-1.563.93-2.127a3.268 3.268 0 0 1 2.246-.882c.843 0 1.65.317 2.246.882.596.564.93 1.33.93 2.127m2.542 0H5.708c-.674 0-1.32.254-1.797.706a2.345 2.345 0 0 0-.744 1.702v6.62c0 .639.267 1.251.744 1.702a2.614 2.614 0 0 0 1.797.706h11.435c.674 0 1.32-.254 1.797-.706a2.345 2.345 0 0 0 .744-1.702V7.64c0-.639-.268-1.251-.744-1.702a2.615 2.615 0 0 0-1.797-.706Z"
      />
    </Svg>
  );
}
