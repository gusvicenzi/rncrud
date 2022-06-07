import { Avatar, ListItem } from '@rneui/base'
import React from 'react'
import { View, Text, FlatList } from 'react-native'
import users from '../data/users'

export default props => {
  function getUserItem({ item: user }) {
    return (
      <ListItem
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm')}>
        <Avatar
          title={user.name}
          source={{ uri: user.avatarUrl }}
        />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron
          onPress={() => props.navigation.navigate('UserForm', user)}
          iconProps={{ name: 'edit' }}
          iconStyle={{ fontSize: 25, color: 'orange' }}
        />
        <ListItem.Chevron
          onPress={() => console.warn('Deletado')}
          iconProps={{ name: 'delete' }}
          iconStyle={{ fontSize: 25, color: 'red' }}
        />
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  )
}
