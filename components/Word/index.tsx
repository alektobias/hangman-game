import { Flex } from "@chakra-ui/core"
import Letter from "./Letter"

const Word: React.FC<{word: string, usedLetters: string[]}> = ({ word, usedLetters }) => {

  console.log(usedLetters)
  return (
  <Flex mb={4} >{word.split('').map(letter => (
    <Letter letter={letter} found={!!usedLetters.includes(letter)}/>))}
  </Flex>
  )
}
export default Word