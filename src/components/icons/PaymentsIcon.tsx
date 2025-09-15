import Svg, { Path, type SvgProps } from "react-native-svg";

export default function PaymentsIcon(props: SvgProps) {
  return (
    <Svg
      width={13}
      height={14}
      fill="none"
      {...props}
    >
      <Path
        fill="#2256CB"
        fillRule="evenodd"
        d="M9.23 3.5H3.103a.437.437 0 1 1 0-.875H9.23a.437.437 0 1 1 0 .875Zm0 2.615H3.103a.438.438 0 0 1 0-.875H9.23a.437.437 0 1 1 0 .875Zm0 2.635H3.103a.437.437 0 1 1 0-.875H9.23a.437.437 0 1 1 0 .875ZM10.541 0h-8.75a1.75 1.75 0 0 0-1.75 1.75V14h.817l1.808-1.313L4.417 14l1.75-1.313L7.917 14l1.75-1.313L11.475 14h.817V1.75A1.75 1.75 0 0 0 10.542 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
