import { Avatar, Icon, ListItem, Button } from '@rneui/base'
import React from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import users from '../data/users'

export default props => {
  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          console.warn('Deletou' + user.id)
        },
      },
      {
        text: 'Não',
      },
    ])
  }

  function getUserItem({ item: user }) {
    return (
      <ListItem.Swipeable
        leftContent={reset => (
          <Button
            onPress={() => props.navigation.navigate('UserForm', user)}
            type="solid"
            title="Edit"
            buttonStyle={{
              minHeight: '100%',
            }}
            icon={{
              name: 'edit',
              type: 'material-icons',
              size: 25,
              color: 'white',
            }}

            // <Icon
            //   name="edit"
            //   color="white"
            //   style={{
            //     fontSize: 30,
            //     minHeight: '100%',
            //     justifyContent: 'center',
            //     marginRight: 5,
            //   }}
            // />
            // }
          />
        )}
        rightContent={reset => (
          <Button
            onPress={() => confirmUserDeletion(user)}
            type="solid"
            buttonStyle={{
              backgroundColor: 'red',
              minHeight: '100%',
            }}
            icon={{
              name: 'delete',
              type: 'material-icons',
              size: 25,
              color: 'white',
            }}
            // icon={
            //   <Icon
            //     name="delete"
            //     color="white"
            //     style={{
            //       minHeight: '100%',
            //       justifyContent: 'center',
            //       fontSize: 35,
            //     }}
            //   />
            // }
          />
        )}
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
      </ListItem.Swipeable>
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
