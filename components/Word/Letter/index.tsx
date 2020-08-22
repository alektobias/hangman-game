import { Box, Text } from "@chakra-ui/core"
import {useSpring, animated} from 'react-spring';
import { useState } from "react";


const Letter: React.FC<{letter: string, found: boolean}> = ({ letter, found }) => {
  const [flipped, setFlipped] = useState(true)

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  
  return (
    <div onClick={() => setFlipped(flipped => !flipped)} style={{position: "relative", top: 0, left: 0}}>
      <animated.div style={{ opacity: opacity.interpolate(o => 1 - Number(o)), transform, position: "relative", top: 0, left: 0 }}>
        <Box bg="white" mr={4} height={96} width={96} borderRadius="md" textAlign="center" >
          <Text fontSize="6xl" color="gray.700"  >
            {letter.toUpperCase()}
          </Text>
        </Box>
      </animated.div>
      <animated.div style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`), position: "absolute", top: 0, left: 0 }}>
        <Box bg={found ? "yellow":"white"} mr={4} height={96} width={96} borderRadius="md" textAlign="center" />
      </animated.div>
    </div>
  )
}
export default Letter