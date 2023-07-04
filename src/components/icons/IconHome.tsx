import { Path, Svg } from 'react-native-svg'

const IconHome = ({ fill }: { fill?: boolean }) => {
  return (
    <Svg
      aria-label="Home"
      color="black"
      fill="black"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      strokeWidth={2}
    >
      <Path
        d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
        fill={fill ? 'black' : 'none'}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></Path>
    </Svg>
  )
}

export default IconHome
