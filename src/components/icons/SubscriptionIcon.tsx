import Svg, { Path, type SvgProps } from "react-native-svg";

export default function SubscriptionIcon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <Path
        fill="#2256CB"
        d="M1.438 11.515a1.64 1.64 0 0 0 1.64 1.64h9.844a1.64 1.64 0 0 0 1.64-1.64V7.003H1.438v4.512ZM3.37 9.29a.879.879 0 0 1 .879-.88h1.406a.879.879 0 0 1 .88.88v.586a.879.879 0 0 1-.88.878H4.25a.879.879 0 0 1-.879-.878v-.586ZM12.922 2.843H3.078a1.64 1.64 0 0 0-1.64 1.64v.762h13.124v-.761a1.64 1.64 0 0 0-1.64-1.641Z"
      />
    </Svg>
  );
}
