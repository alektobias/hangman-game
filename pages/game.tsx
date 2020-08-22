import { Grid, Input, Button, Text, Flex, Box  } from "@chakra-ui/core";
import Word from "../components/Word";
import { useState, useCallback } from "react";

 const Game: React.FC = () =>  {

  const [letter, setLetter] = useState('')
  const [usedLetters, setUsedLetters] = useState<string[]>(['a']) 


  const handleSubmit = useCallback(() => {
    setUsedLetters([...usedLetters, letter])
    setLetter('')
  }, [letter])

  return (
    <Grid 
      as="main"
      height="100vh"
      gap="4"
      templateColumns="1fr 450px 450px 250px 1fr"
      templateRows="1fr 1fr 1fr 1fr 20px 1fr"
      templateAreas="
      '. . . . .'
      '. words words words .'
      '. words words words .' 
      '. input input submit .' 
      '. used used used .'
      '. . . . .'
      "
    >
      <Flex direction="column" gridArea="words">  
        <Word word="AMOR" usedLetters={usedLetters}/>
        <Word word="CARIDADE" usedLetters={usedLetters}/>
        {/* <Word word="PERDÃO"/>
        <Word word="OBEDIÊNCIA"/>
        <Word word="HUMILDADE"/>
        <Word word="FÉ"/>
        <Word word="PRECE"/>  */}
      </Flex>
      <Input gridArea="input" value={letter} onChange={(e) => setLetter(e.target.value)}  />
      <Button variantColor="teal" gridArea="submit" onClick={handleSubmit} >Enviar</Button>
      <Box gridArea="used" >
      {usedLetters.map(letter => <Text>{letter}</Text>)}
      </Box>

    </Grid>
  )
}
export default Game;