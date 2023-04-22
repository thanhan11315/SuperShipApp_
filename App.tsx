import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AuthContextProvider} from './src/contexts/AuthContext';
import AuthGuard from './src/guards/AuthGuard';
import LoginScreen from './src/screens/LoginScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import NavBottomNew from './src/screens/NavBottomNew';
import CreateOrderScreen from './src/screens/CreateOrderScreen';
import ReconciliationCalendarScreen from './src/components/ReconciliationCalendarScreen';
import SelectReconciliationCalendarScreen from './src/screens/SelectReconciliationCalendarScreen';
import OrderDetailScreen from './src/screens/OrderDetailScreen';
import UpdateInfoScreen from './src/screens/UpdateInfoScreen';
import CreateRequestScreen from './src/screens/CreateRequestScreen';
import SelectCategoryScreen from './src/screens/SelectCategoryScreen';
import ReconciliationDetail from './src/screens/ReconciliationDetail';
import Receipt from './src/components/Receipt';
import RequestDetails from './src/screens/RequestDetails';
import UpdateProfileInfoScreen from './src/screens/UpdateProfileInfoScreen';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen';
import WarehouseScreen from './src/screens/WarehouseScreen';
import CreateWarehouseScreen from './src/screens/CreateWarehouseScreen';
import BankCardsScreen from './src/screens/BankCardsScreen';
import AddBankCardsScreen from './src/screens/AddBankCardScreen';
import ProductScreen from './src/screens/ProduceScreen';
import CreateProductScreen from './src/screens/CreateProductScreen';
import ActivitiesScreen from './src/screens/ActivitiesScreen';
import SettingScreen from './src/screens/SettingScreen';
import ContactInfoScreen from './src/screens/ContactInfoScreen';
import SelectCityScreen from './src/screens/SelectCityScreen';
import SelectDistrictScreen from './src/screens/SelectDistrictScreen';
import SelectWardScreen from './src/screens/SelectWardScreen';
import RatingScreen from './src/screens/RatingScreen';
import OrderFilterScreen from './src/screens/OrderFilterScreen';
import PermissionScreen from './src/screens/PermissionScreen';
import CameraScreen from './src/screens/CameraScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerShown: false, // Sử dụng hiệu ứng chuyển trang ngang giống iOS
            }}>
            {/* <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen name="Register" component={RegisterScreen} /> */}
            {/* NavBottom */}
            {/* <Stack.Screen name="Home">
              {props => <AuthGuard component={HomeScreen} {...props} />}
            </Stack.Screen> */}
            {/* NavBottom */}
            <Stack.Screen name="NavBottom">
              {props => <AuthGuard component={NavBottomNew} {...props} />}
            </Stack.Screen>
            {/* NavBottom */}
            {/* GetStart */}
            <Stack.Screen name="CreateOrder">
              {props => <AuthGuard component={CreateOrderScreen} {...props} />}
            </Stack.Screen>
            {/* OrdersListScreen */}
            {/* GetStart */}
            {/* ReconciliationList */}
            {/* ReconciliationDetail */}
            <Stack.Screen name="ReconciliationCalendar">
              {props => (
                <AuthGuard
                  component={ReconciliationCalendarScreen}
                  {...props}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="SelectReconciliationCalendar">
              {props => (
                <AuthGuard
                  component={SelectReconciliationCalendarScreen}
                  {...props}
                />
              )}
            </Stack.Screen>
            {/* ReconciliationList */}
            {/* OrdersListScreen */}
            <Stack.Screen name="OrderDetail">
              {props => <AuthGuard component={OrderDetailScreen} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="UpdateInfo">
              {props => <AuthGuard component={UpdateInfoScreen} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="CreateRequest">
              {props => (
                <AuthGuard component={CreateRequestScreen} {...props} />
              )}
            </Stack.Screen>
            <Stack.Screen name="SelectCategory">
              {props => (
                <AuthGuard component={SelectCategoryScreen} {...props} />
              )}
            </Stack.Screen>
            {/* OrdersListScreen */}
            {/* NotificationScreen */}
            <Stack.Screen name="ReconciliationDetail">
              {props => (
                <AuthGuard component={ReconciliationDetail} {...props} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Receipt">
              {props => <AuthGuard component={Receipt} {...props} />}
            </Stack.Screen>
            {/* OrderDetailScreen */}
            <Stack.Screen name="RequestDetails">
              {props => <AuthGuard component={RequestDetails} {...props} />}
            </Stack.Screen>
            {/* NotificationScreen */}
            {/* Home User  */}
            <Stack.Screen name="UpdateProfileInfo">
              {props => (
                <AuthGuard component={UpdateProfileInfoScreen} {...props} />
              )}
            </Stack.Screen>
            <Stack.Screen name="ChangePassword">
              {props => (
                <AuthGuard component={ChangePasswordScreen} {...props} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Warehouse">
              {props => <AuthGuard component={WarehouseScreen} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="CreateWarehouse">
              {props => (
                <AuthGuard component={CreateWarehouseScreen} {...props} />
              )}
            </Stack.Screen>
            <Stack.Screen name="BankCards">
              {props => <AuthGuard component={BankCardsScreen} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="AddBankCards">
              {props => <AuthGuard component={AddBankCardsScreen} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Product">
              {props => <AuthGuard component={ProductScreen} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="CreateProduct">
              {props => (
                <AuthGuard component={CreateProductScreen} {...props} />
              )}
            </Stack.Screen>
            <Stack.Screen name="ActivitiesScreen">
              {props => <AuthGuard component={ActivitiesScreen} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Setting">
              {props => <AuthGuard component={SettingScreen} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="ContactInfo">
              {props => <AuthGuard component={ContactInfoScreen} {...props} />}
            </Stack.Screen>
            {/* Home User  */}
            {/* CreateOrder */}
            <Stack.Screen name="SelectCity">
              {props => <AuthGuard component={SelectCityScreen} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="SelectDistrict">
              {props => (
                <AuthGuard component={SelectDistrictScreen} {...props} />
              )}
            </Stack.Screen>
            <Stack.Screen name="SelectWard">
              {props => <AuthGuard component={SelectWardScreen} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Rating">
              {props => <AuthGuard component={RatingScreen} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="OrderFilter">
              {props => <AuthGuard component={OrderFilterScreen} {...props} />}
            </Stack.Screen>
            {/* CreateOrder */}
            <Stack.Screen name="Permission">
              {props => <AuthGuard component={PermissionScreen} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="CameraScreen">
              {props => <AuthGuard component={CameraScreen} {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContextProvider>
  );
};

export default App;
