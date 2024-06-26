import React from 'react'
import { Image, Text, View } from 'react-native'
import Spacing from './Spacing'

const Profile = ({ name, uri, introduction, isMe }) => {
  const size = isMe ? 50 : 40
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        src={uri}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          marginRight: 10,
        }}
      />
      <View style={{ justifyContent: 'center' }}>
        <Text
          style={{
            fontWeight: isMe ? 'bold' : undefined,
            fontSize: isMe ? 16 : 14,
          }}
        >
          {name}
        </Text>
        {!!introduction && (
          <View>
            <Spacing size={isMe ? 6 : 4} />
            <Text style={{ fontSize: isMe ? 13 : 11, color: 'gray' }}>
              {introduction}
            </Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default Profile
