import React from 'react'

import { Container, Avatar, Messege, Header, Content } from './styles'

export { Mention } from './styles'

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMantion?: boolean;
  isBot?: boolean;
}

const ChennelMessege: React.FC<Props> = ({
  author,
  content,
  date,
  hasMantion, 
  isBot
}) => {
  return (
    <Container className={hasMantion ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''}/>
      <Messege>
        <Header>
          <strong>{author}</strong>
          {isBot && <span>Bot</span>}
          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Messege>
    </Container>
  )
}

export default ChennelMessege