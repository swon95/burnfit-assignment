import { React, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from './src/navigations/Tab';

const App = () => {

    // const [clicked, setClicked] = useState(0);

    return (
        <NavigationContainer>
            <TabBar />
        </NavigationContainer>
    )
}

export default App;