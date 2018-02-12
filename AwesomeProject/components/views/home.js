import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Platform,
    Image,
    TouchableOpacity,
    StatusBar,
    TextInput,
    Button

} from 'react-native';
import Tabs from '../styles/tabs';
import * as firebase from "firebase";
import Login from './login.js';
import {GoogleSignin} from 'react-native-google-signin';
import Database from '../firebase/database';


export default class Home extends Component {

    constructor(props){
        super(props);
        console.ignoredYellowBox = [  //related to timeout on auth token of 60min, known issue
            'Setting a timer'
        ];
        this.state = {
            fname: ""
        };

        this.logout = this.logout.bind(this);
        this.googleSignOut = this.googleSignOut.bind(this);
    }

    async componentDidMount(){

        try {
            let user = await firebase.auth().currentUser;
            Database.listenUserName(user.uid, (fname)=> {
                this.setState({
                    fname: fname
                })
            });

            this.setState({
                uid: user.uid,
            });
        } catch (error) {
            alert(error);
        }
    }
    logout() {

        this.props.navigator.push({ id: 'Login'});
        firebase.auth().signOut().then(function() {
        }).catch(function(error) {
        });

    }

    googleSignOut() {
        GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
            this.props.navigator.push({id: 'Login'});
        }).done();
    }

    render() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        let user_name = this.state.fname;

        return (


            <View style={styles.container13}>
                <Tabs >
                    {/* First tab */}
                    <View title="User Profile" style={styles.content13}>
                        <Text style={styles.header13}>
                            Welcome, {user_name}!
                        </Text>
                        <Text style={styles.text13}>

                        </Text>

                        <Button onPress={()=>{this.logout()}}
                                title={"Log Out  "}/>
                        <Button onPress={()=>{this.googleSignOut()}}
                                title={"Revoke Google Auth and Logout "}/>
                    </View>
                    {/* Second tab */}
                    <View title="Upcoming appointments" style={styles.content13}>
                        <Text style={styles.header13}>
                            You have no appointments
                        </Text>
                        <Text style={styles.text13}>
                            Planning of adding a list with option to add to google calendar
                        </Text>
                    </View>
                    {/* Third tab */}
                    <View title="Favorite pet keeper" style={styles.content13}>
                        <Text style={styles.header13}>
                            .......
                        </Text>
                        <Text style={styles.text13}>
                            Whats up
                        </Text>
                    </View>
                    {/* Third tab */}
                    <View title="User Search" style={styles.content13}>
                        <Text style={styles.header13}>
                            Search Google maps
                        </Text>
                        <Text style={styles.text13}>
                            No code found in the file
                        </Text>
                    </View>

                </Tabs>
            </View>
        );


    }
}
const styles = StyleSheet.create({
// App container
    container13: {
        flex: 1,                            // Take up all screen
        backgroundColor: '#383838',         // Background color
    },
// Tab content container
    content13: {
        flex: 1,                            // Take up all available space
        justifyContent: 'center',           // Center vertically
        alignItems: 'center',               // Center horizontally
        backgroundColor: '#d91e18',         // Darker background for content area
    },
// Content header
    header13: {
        margin: 10,                         // Add margin
        color: '#ffec01',                   // White color
        fontFamily: 'Avenir',               // Change font family
        fontSize: 26,                       // Bigger font size
    },
// Content text
    text13: {
        marginHorizontal: 20,               // Add horizontal margin
        color: 'rgba(255, 255, 255, 0.75)', // Semi-transparent text
        textAlign: 'center',                // Center
        fontFamily: 'Avenir',
        fontSize: 18,
    },



});