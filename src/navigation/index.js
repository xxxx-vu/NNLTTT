import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import ImagePickerScreen from '../screens/ImagePickerScreen';
import PlantInfoScreen from '../screens/PlantInfoScreen';

// import ImagePickerScreen from '../test/RNCameraRealtimeScreen';
import ImagePickerScreen from '../screens/RNCameraScreen';
import ResultRNCameraScreen from '../screens/ResultRNCameraScreen';

import ResultCameraScreen from '../screens/ResultCameraScreen';

import {useIsFocused} from '@react-navigation/native';


const StackCamera = createStackNavigator();

function CameraScreen() {
  return (
    <NavigationContainer>
      <StackCamera.Navigator initialRouteName="ImagePicker">
        <StackCamera.Screen
          name="ImagePicker"
          options={{headerShown: false}}
          component={IMGPickerScreen}
        />
        <StackCamera.Screen
          name="PlantInfo"
          options={{headerShown: false}}
          component={PlantInfoScreen}
        />
        <StackCamera.Screen
          name="ResultRNCamera"
          options={{headerShown: false}}
          component={ResultRNCameraScreen}
        />
        <StackCamera.Screen
          name="ResultCamera"
          options={{
            title: 'Kết quả',
            headerStyle: {
              backgroundColor: '#33CC08',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={ResultCameraScreen}
        />
      </StackCamera.Navigator>
    </NavigationContainer>
  );
};

function IMGPickerScreen({navigation}) {
  // This hook returns `true` if the screen is focused, `false` otherwise
  const isFocused = useIsFocused();
  return <ImagePickerScreen navigation={navigation} isFocused={isFocused} />;
}

export default CameraScreen;
