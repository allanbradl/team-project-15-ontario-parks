import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import MapHeader from "../components/Header/MapHeader";
import PageHeader from "../components/Header/PageHeader";
import SettingItem from "../components/SettingItem";
const SettingPage = () => {

    return (
        <View style={styles.screen}>
            <PageHeader title = "Settings" buttonTitle = "Back"/>
            <ScrollView>
                <SettingItem message = "Accessibility Mode"/>
            </ScrollView>
        </View>

        )
}
const styles = StyleSheet.create({
    screen: {
        flex:1
    },
    body: {
        flex: 1,
    }
})
export default SettingPage