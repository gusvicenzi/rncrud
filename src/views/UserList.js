import { Avatar, Icon, ListItem, Button } from '@rneui/base'
import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import UsersContext from '../context/UsersContext'

export default props => {
  const { state, dispatch } = useContext(UsersContext) // context API and useReducer

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          }) // useReducer
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
          />
        )}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm', user)}>
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
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  )
}
