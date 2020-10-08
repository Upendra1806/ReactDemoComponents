/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ActionBar from 'react-native-action-bar'
import { styles } from '../utils/AppStyle';
import { IC_SEARCH } from '../assets'
import DrawerLayout from 'react-native-drawer-layout'
import Menu from './SampleMenu';
import CustomSidebarMenu from './CustomMenu';



class ActionbarSample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawerClosed: true,
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.setDrawerState = this.setDrawerState.bind(this);
    }

    setDrawerState() {
        this.setState({
            drawerClosed: !this.state.drawerClosed,
        });
    }

    toggleDrawer = () => {
        if (this.state.drawerClosed) {
            this.DRAWER.openDrawer();
        } else {
            this.DRAWER.closeDrawer();
        }
    }

    render() {
        return (

            <View style={styles.container}>
                <DrawerLayout
                    drawerWidth={200}
                    ref={drawerElement => {
                        this.DRAWER = drawerElement;
                    }}
                    drawerPosition={DrawerLayout.positions.left}
                    onDrawerOpen={this.setDrawerState}
                    onDrawerClose={this.setDrawerState}
                    renderNavigationView={() => <CustomSidebarMenu />}>

                    <ActionBar
                        containerStyle={styles.bar}
                        title={'Action bar Sample'}
                        leftIconName={'menu'}
                        leftBadge={''}
                        onLeftPress={this.toggleDrawer}
                        onTitlePress={() => console.log('Title!')}
                        rightIcons={[
                            {
                                image: IC_SEARCH,
                                badge: '1',
                                onPress: () => console.log('Right Star !'),
                            },
                            {
                                name: 'phone',
                                badge: '1',
                                onPress: () => console.log('Right Phone !'),
                                isBadgeLeft: true,
                            },
                            {
                                name: 'plus',
                                onPress: () => console.log('Right Plus !'),
                            },
                        ]}
                    />
                    <Text style={styles.headerText}>
                        Welcome to React Native Action bar!
                </Text>
                </DrawerLayout>


            </View>

        );
    }
}

export default ActionbarSample
