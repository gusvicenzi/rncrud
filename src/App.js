import React from 'react'
import { SafeAreaView } from 'react-native'
import { Button, Icon } from '@rneui/base'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { UsersProvider } from './context/UsersContext'
// import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator()

export default props => {
  return (
    <UsersProvider>
      <SafeAreaView style={{ flexGrow: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="UserList"
            screenOptions={{
              headerStyle: { backgroundColor: '#f4511e' },
              headerTintColor: '#fff',
              headerTitleStyle: 'bold',
              headerShown: true,
            }}>
            <Stack.Screen
              name="UserList"
              component={UserList}
              options={({ navigation }) => {
                return {
                  title: 'Lista de Usuários',
                  headerRight: () => (
                    <Button
                      type="clear"
                      onPress={() => navigation.navigate('UserForm')}
                      icon={
                        <Icon
                          name="add"
                          size={25}
                          color="white"
                        />
                      }
                    />
                  ),
                }
              }}
            />
            <Stack.Screen
              name="UserForm"
              component={UserForm}
              options={{
                title: 'Formulário de Usuários',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </UsersProvider>
  )
}

// const screenOptions = {
//   headerShown: false,
// }
