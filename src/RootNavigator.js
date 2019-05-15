import { createStackNavigator, createAppContainer } from 'react-navigation';
import Contacts from './component/Contacts';
import Details from './component/Details';

const Routes = createStackNavigator({
    contacts: {
        screen: Contacts,
        navigationOptions: {
            title: 'Contact',
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    },
    details: {
        screen: Details,
        navigationOptions: {
            title: 'Details',
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                padding: 'auto'
            }
        }
    }
}
);

export default createAppContainer(Routes);