import { Path, Svg } from 'react-native-svg'

const IconChart = ({ fill }: { fill?: boolean }) => {
  return (
    <Svg
      x-mlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      strokeWidth="1.3"
      stroke={fill ? 'white' : 'black'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none"></Path>
      <Path
        d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
        fill={fill ? 'black' : 'none'}
      ></Path>
      <Path
        d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
        fill={fill ? 'black' : 'none'}
      ></Path>
      <Path
        d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
        fill={fill ? 'black' : 'none'}
      ></Path>
      <Path d="M4 20l14 0"></Path>
    </Svg>
  )
}

export default IconChart
