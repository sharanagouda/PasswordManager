import React, { Component, useEffect } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { verticalScale, scale, moderateScale } from '../../utils/Scale';
import { Colors } from '../../styles';
import ClickView from '../ClickView';
import { Images } from '../../assets/images';

class DropDown extends Component {
    state = {
        title: 'Social Media',
        showDropDown: false,
        data: [
            {
                title: 'Personal',
                sector: 'personal',
            },
            {
                title: 'Office',
                sector: 'office',
            },
            {
                title: 'Social Media',
                sector: 'social',
            },
        ],
    };

    toggleDropDown = () => {
        this.setState(state => ({
            showDropDown: !state.showDropDown,
        }));
    };
    changeCategory = item => {
        this.toggleDropDown();
        this.setState({
            title: item.title
        })
        this.props.onChange(item.sector)
    }
    _renderItem = ({ item }) => (
        <ClickView onPress={() => { this.changeCategory(item) }} style={styles.renderPanel}>
            <Text style={styles.renderTitle}>{item.title}</Text>
            {/* <View style={styles.renderCircleCard}>
                <Text style={styles.renderCount}>{item.count}</Text>
            </View> */}
        </ClickView>
    );
    render() {
        const { title, showDropDown, data } = this.state;
        const {count} = this.props;
        return (
            <View>
                <>
                    <ClickView
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                        }}
                        onPress={() => this.toggleDropDown()}>
                        <Text style={styles.title}>{title}</Text>
                        <View style={styles.countCircle}>
                            <Text style={styles.count}>{count}</Text>
                        </View>
                        <Image source={Images.down} style={styles.down} />
                    </ClickView>
                </>
                {showDropDown ? (
                    <FlatList
                        data={data}
                        style={[styles.sitesList, { height: verticalScale(data.length * 50) }]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                    />
                ) : (
                        <></>
                    )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    renderPanel: {
        height: verticalScale(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scale(10),
    },
    renderTitle: {
        color: Colors.white,
        fontSize: scale(18),
    },
    renderCircleCard: {
        width: scale(30),
        height: verticalScale(30),
        marginHorizontal: scale(5),
        justifyContent: 'center',
        backgroundColor: Colors.blue,
        borderRadius: scale(30),
    },
    renderCount: {
        fontSize: scale(18),
        textAlign: 'center',
        fontWeight: '500',
        color: Colors.white,
    },
    count: {
        fontSize: scale(18),
        textAlign: 'center',
        fontWeight: '500',
        color: Colors.white,
    },
    down: {
        width: 9,
        height: 9,
        marginHorizontal: scale(5),
    },
    countCircle: {
        width: scale(30),
        height: verticalScale(30),
        marginHorizontal: scale(5),
        justifyContent: 'center',
        backgroundColor: Colors.blue,
        borderRadius: scale(30),
    },
    title: {
        fontSize: scale(21),
        marginHorizontal: scale(5),
        color: Colors.grey,
        fontWeight: '300',
    },
    sitesList: {
        borderRadius: scale(10),
        marginTop: 10,
        backgroundColor: Colors.grey,
    }
});
export default DropDown;
