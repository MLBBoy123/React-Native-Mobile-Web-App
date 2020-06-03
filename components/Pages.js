import React, { Component } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import AdvertiserBG from './AdvertiserBG';
import FourthPage from './FourthPage';
import AdvertiserEM from './AdvertiserEM';
import AdvertiserMZ from './AdvertiserMZ';
import AdvertiserButton from './AdvertiserButton';
import SendPage from './SendPage';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator
} from 'react-navigation';
export default class Pages extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <SimpleAppNavigator/>
        )
    }
}
const SimpleAppNavigator = TabNavigator({
    page1: {screen: FirstPage},
    page2: {screen: SecondPage},
    page3: {screen: AdvertiserButton},
    page4: {screen: AdvertiserBG},
    page5: {screen: AdvertiserEM},
    page6: {screen: AdvertiserMZ},
    page7: {screen: FourthPage},
    page8: {screen: SendPage},
    
    
},{
     initialRouteName: 'page1',
     swipeEnabled: true,
     animationEnabled: true,
     lazy: false,
     tabBarPosition:'bottom',
 });
