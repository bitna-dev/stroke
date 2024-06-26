import React from 'react'
import { Text, View } from 'react-native'
import Spacing from './Spacing'
import styled from 'styled-components/native'

const Container = styled.View`
  flex-direction: row;
`
const Image = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  margin-right: 10px;
`
const TextContainer = styled.View`
  justify-content: center;
`
const NameText = styled.Text`
  font-weight: ${(props) => (props.isMe ? 'bold' : 'normal')};
  font-size: ${(props) => (props.isMe ? 16 : 14)}px;
`
const DescText = styled.Text`
  font-size: ${(props) => (props.isMe ? 13 : 11)}px;
  color: gray;
`
const Profile = ({ name, uri, introduction, isMe }) => {
  const size = isMe ? 50 : 40
  return (
    <Container>
      <Image
        source={{
          uri: uri,
        }}
        size={size}
      />
      <TextContainer>
        <NameText isMe={isMe}>{name}</NameText>
        {!!introduction && (
          <View>
            <Spacing size={isMe ? 6 : 4} />
            <DescText>{introduction}</DescText>
          </View>
        )}
      </TextContainer>
    </Container>
  )
}

export default Profile
