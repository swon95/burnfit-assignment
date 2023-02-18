import { React, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from './src/navigations/Tab';

const App = () => {

    const [clicked, setClicked] = useState(0);

    return (
        <NavigationContainer>
            <TabBar 
            clicked={clicked} // 현재 선택된 icon
            setClicked={setClicked} // 클릭 했을때의 icon
            />
        </NavigationContainer>
    )
}

export default App;