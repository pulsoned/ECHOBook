import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import BL3SelectionScreen from "./screens/BL3SelectionScreen";
import BL2SelectionScreen from "./screens/BL2SelectionScreen";
import BLTPSSelectionScreen from "./screens/BLTPSSelectionScreen";
import BL1SelectionScreen from "./screens/BL1SelectionScreen";
import BL1WeaponSelectionScreen from "./screens/BL1WeaponSelectionScreen";
import BL1ShieldSelectionScreen from "./screens/BL1ShieldSelectionScreen";
import BL1GrenadeSelectionScreen from "./screens/BL1GrenadeSelectionScreen";
import BL1ClassModSelectionScreen from "./screens/BL1ClassModSelectionScreen";
import BL1WeaponInfoScreen from "./screens/BL1WeaponInfoScreen";
import BL1ShieldInfoScreen from "./screens/BL1ShieldInfoScreen";
import BL1GrenadeInfoScreen from "./screens/BL1GrenadeInfoScreen";
import BL1ClassModInfoScreen from "./screens/BL1ClassModInfoScreen";
import BLTPSWeaponSelectionScreen from "./screens/BLTPSWeaponSelectionScreen";
import BLTPSShieldSelectionScreen from "./screens/BLTPSShieldSelectionScreen";
import BLTPSGrenadeSelectionScreen from "./screens/BLTPSGrenadeSelectionScreen";
import BLTPSClassModSelectionScreen from "./screens/BLTPSClassModSelectionScreen";
import BLTPSOzKitSelectionScreen from "./screens/BLTPSOzKitSelectionScreen";
import BLTPSWeaponInfoScreen from "./screens/BLTPSWeaponInfoScreen";
import BLTPSShieldInfoScreen from "./screens/BLTPSShieldInfoScreen";
import BLTPSGrenadeInfoScreen from "./screens/BLTPSGrenadeInfoScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="BL3" component={BL3SelectionScreen} />
      <Stack.Screen name="BL2" component={BL2SelectionScreen} />
      <Stack.Screen name="BLTPS" component={BLTPSSelectionScreen} />
      <Stack.Screen name="BL1" component={BL1SelectionScreen} />
      <Stack.Screen name="BL1Weapons" component={BL1WeaponSelectionScreen} />
      <Stack.Screen name="BL1Shields" component={BL1ShieldSelectionScreen} />
      <Stack.Screen name="BL1Grenades" component={BL1GrenadeSelectionScreen} />
      <Stack.Screen
        name="BL1ClassMods"
        component={BL1ClassModSelectionScreen}
      />
      <Stack.Screen name="BL1WeaponInfo" component={BL1WeaponInfoScreen} />
      <Stack.Screen name="BL1ShieldInfo" component={BL1ShieldInfoScreen} />
      <Stack.Screen name="BL1GrenadeInfo" component={BL1GrenadeInfoScreen} />
      <Stack.Screen name="BL1ClassModInfo" component={BL1ClassModInfoScreen} />
      <Stack.Screen
        name="BLTPSWeapons"
        component={BLTPSWeaponSelectionScreen}
      />
      <Stack.Screen
        name="BLTPSShields"
        component={BLTPSShieldSelectionScreen}
      />
      <Stack.Screen
        name="BLTPSGrenades"
        component={BLTPSGrenadeSelectionScreen}
      />
      <Stack.Screen
        name="BLTPSClassMods"
        component={BLTPSClassModSelectionScreen}
      />
      <Stack.Screen name="BLTPSOzKits" component={BLTPSOzKitSelectionScreen} />
      <Stack.Screen name="BLTPSWeaponInfo" component={BLTPSWeaponInfoScreen} />
      <Stack.Screen name="BLTPSShieldInfo" component={BLTPSShieldInfoScreen} />
      <Stack.Screen
        name="BLTPSGrenadeInfo"
        component={BLTPSGrenadeInfoScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
