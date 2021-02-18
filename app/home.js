import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native'

class Inputs extends Component {
    state = {
        name: '',
    }
    handlename = (text) => {
        this.setState({ name: text })
    }
    login = (name) => {
        alert('Name: ' + name)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.marHor20}>
                    <View style={styles.flx2}>
                        <Text style={styles.home}>Welcome {this.state.name}</Text>
                    </View>
                    <View style={styles.flx5}>
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Name"
                            placeholderTextColor="gray"
                            autoCapitalize="none"
                            onChangeText={this.handlename} />
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={
                                () => this.login(this.state.name)
                            }>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
export default Inputs

const styles = StyleSheet.create({
    home: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    marHor20: {
        marginHorizontal: 15
    },
    flx3: {
        height: Dimensions.get('window').height / 2
    },
    flx2: {
        flex: .2,
        paddingBottom:80
    },
    flx5: {
        height: Dimensions.get('window').height / 2
    },
    container: {
        paddingTop: 23,
        flex: 1
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal:10,
        fontSize:15,
        color:'gray'
    },
    submitButton: {
        backgroundColor: '#25b3ea',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize:15
    }
})
