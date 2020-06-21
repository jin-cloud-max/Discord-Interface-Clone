import React, { useRef, useEffect } from 'react'

import ChannelMessege, { Mention } from '../ChannelMessege'

import { Container, Messeges, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  
  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messeges>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessege 
          author="Jin Bok"
          date="20/06/2020"
          content="Today is a good day."
        />
        ))}
        
        <ChannelMessege 
          author="Neide"
          date="20/06/2020"
          content={
            <>
              <Mention>
                @Jin Bok
              </Mention>, how are you today?
            </>
          }
          hasMantion
          isBot
        />

      </Messeges>

      <InputWrapper>
        <Input type="text" placeholder= "Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData