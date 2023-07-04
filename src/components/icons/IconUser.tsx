import { Path, Svg } from 'react-native-svg'

const IconUser = ({ fill }: { fill: boolean }) => {
  return (
    <Svg
      x-mlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      strokeWidth="1.3"
      stroke="black"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none"></Path>
      <Path
        d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
        fill={fill ? 'black' : 'none'}
      ></Path>
      <Path
        d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
        fill={fill ? 'black' : 'none'}
      ></Path>
    </Svg>
  )
}

export default IconUser
