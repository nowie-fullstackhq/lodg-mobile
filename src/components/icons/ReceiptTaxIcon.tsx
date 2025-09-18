import Svg, { Path, type SvgProps } from "react-native-svg";

export default function ReceiptTaxIcon(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <Path
        stroke="#2256CB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="m7.5 11.666 5-5"
      />
      <Path
        fill="#2256CB"
        stroke="#2256CB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M7.917 7.5a.417.417 0 1 0 0-.833.417.417 0 0 0 0 .833ZM12.083 11.667a.417.417 0 1 0 0-.834.417.417 0 0 0 0 .834Z"
      />
      <Path
        stroke="#2256CB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M4.167 17.5V4.167A1.667 1.667 0 0 1 5.833 2.5h8.334a1.667 1.667 0 0 1 1.666 1.667V17.5l-2.5-1.667-1.666 1.667L10 15.833 8.333 17.5l-1.666-1.667-2.5 1.667Z"
      />
    </Svg>
  );
}
