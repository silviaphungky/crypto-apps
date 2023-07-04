import { Path, Svg } from 'react-native-svg'

const IconNews = ({ fill }: { fill?: boolean }) => {
  return (
    <Svg
      x-mlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={fill ? 'white' : 'black'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none"></Path>
      <Path
        d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
        fill={fill ? 'black' : 'white'}
      ></Path>
      <Path d="M7 8h10"></Path>
      <Path d="M7 12h10"></Path>
      <Path d="M7 16h10"></Path>
    </Svg>
  )
}

export default IconNews
