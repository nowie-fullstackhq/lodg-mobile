import Svg, { Path, type SvgProps } from "react-native-svg";

export default function ArrowSmallLeftIcon(props: SvgProps) {
  return (
    <Svg
      width={29}
      height={29}
      fill="none"
      {...props}
    >
      <Path
        fill={props.color}
        d="M22.8 13.2h-12l3.948-3.948a1.2 1.2 0 1 0-1.692-1.704l-5.148 5.16A2.4 2.4 0 0 0 7.2 14.4a2.4 2.4 0 0 0 .708 1.68l5.148 5.16a1.199 1.199 0 0 0 2.047-.856 1.199 1.199 0 0 0-.355-.848L10.8 15.6h12a1.2 1.2 0 0 0 0-2.4Z"
      />
    </Svg>
  );
}
