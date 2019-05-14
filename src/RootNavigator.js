import { createStackNavigator, createAppContainer } from 'react-navigation';
import Contacts from './component/Contacts';
import Details from './component/Details';

const Routes = createStackNavigator({
    contacts: {
        screen: Contacts
    },
    details: {
        screen: Details
    }
},
{
    headerMode: 'none'
}
);

export default createAppContainer(Routes);