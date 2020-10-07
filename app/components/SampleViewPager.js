import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Component } from 'react';
import { styles } from '../utils/AppStyle';
import { IndicatorViewPager, PagerDotIndicator, PagerTitleIndicator } from 'react-native-best-viewpager';

class SampleViewPager extends Component {


    state = {
        pageNumber: 0,
        totalPage: 2
    }

    componentDidMount() {
        var pageNumber = 0;
        setInterval(() => {
            if (this.state.pageNumber >= 2) {
                pageNumber = 0;
            } else {
                pageNumber = this.state.pageNumber;
                pageNumber++;
            }
            this.setState({ pageNumber: pageNumber })
            this.viewPager.setPage(pageNumber)
        }, 3000);
    }

    static navigationOptions = {
        title: 'SampleViewPager',
    }

    render() {
        return (
            <View>
                <IndicatorViewPager
                    style={{ height: 200, justifyContent:"center",margin:20,alignContent:"center" }}
                    ref={(viewPager) => { this.viewPager = viewPager }}
                    indicator={this._renderDotIndicator()}>
                    <View style={{ backgroundColor: 'blue', margin: 20, justifyContent: "center" }}>
                        <Text style={styles.headerText}>{this.state.pageNumber +1}. Blue Page</Text>
                    </View>
                    <View style={{ backgroundColor: 'red', margin: 20, justifyContent: "center" }}>
                        <Text style={styles.headerText}>{this.state.pageNumber+1}. Red page</Text>
                    </View>
                    <View style={{ backgroundColor: 'yellow', margin: 20, justifyContent: "center" }}>
                        <Text style={styles.headerText}>{this.state.pageNumber+1}. Yellow Page</Text>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }

    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
}




export default SampleViewPager