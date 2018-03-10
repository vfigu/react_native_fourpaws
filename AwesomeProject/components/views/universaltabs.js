import React, { Component } from 'react';
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
    Keyboard,
    Button,
    ScrollView



} from 'react-native';

import { Header, Avatar } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Tabs from './tabs';
import Profile_Information from './Profile_Information';
import UserPic from './UserPic';
import Mapviews from "./Mapview";
import Calendars from "./calendar";
import FavoritePetKeeper from "./favoritepetkeeper";
import Menu from "./MenuBar"
import * as firebase from "firebase";
import Database from '../firebase/database';
import { Nav, Tab } from 'react-native-simple-tab';
import Information from './UserInformation';
import List from "./ListView";






export default class Universaltabs extends Component {


    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",


        };

    }


    async componentDidMount(){

        try {
            let user = await firebase.auth().currentUser;
            Database.listenUserName(user.uid, (fname, lname)=> {
                this.setState({
                    fname: fname,
                    lname: lname
                })
            });

            this.setState({
                uid: user.uid,
            });
        } catch (error) {
            alert(error);
        }
    }

    _editthings() {
        // console.log("task value",this.state.newTask);
        if (this.state.newTask === "") {
            return;
        }
        this.tasksRef.push({ name: this.state.newTask});
        this.setState({newTask: ""});
        alert("Task added successfully");
    }

    render() {
        let first_name = this.state.fname;
        let last_name = this.state.lname;

        return (

            <View style={styles.container13}>
                <Header

                    outerContainerStyles={{ backgroundColor: '#a21c16', height: 50, }}
                    leftComponent={{ icon: 'menu',onPress: () => console.log(this.toggle()), color: '#fff', }}
                    centerComponent={{ text: "Home" , style: { color: '#fff',fontSize: 20  } }}
                    rightComponent={{ icon: 'search', color: '#fff' }}
                />
                <Grid>
                    <Row  style={{ height: 220, backgroundColor: '#BE3A31' }} >

                        <Avatar style={styles.ImageUser}
                                xlarge
                                source={require ('../images/c6a4645d9f9af45a9c9d7b094c18a47a--portrait-ideas-girl-photos.jpg')}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                                containerStyle={{borderWidth:4, left:15, top:10, borderColor:'white' }}

                        />

                        <Avatar style={styles.ImageUser}
                                large
                                source={{uri: "http://images2.fanpop.com/image/photos/9400000/Hello-puppies-9415183-1280-800.jpg"}}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                                containerStyle={{ left:25, top:10, }}
                                overlayContainerStyle={{backgroundColor: '#BE3A31'}}

                        />

                        <Avatar style={styles.ImageUser}
                                large
                                source={{uri: "http://images4.fanpop.com/image/photos/14700000/So-cute-puppies-14749029-1600-1200.jpg"}}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                                containerStyle={{ left:35, top:10, }}
                                overlayContainerStyle={{backgroundColor: '#BE3A31'}}

                        />
                        <Avatar style={styles.ImageUser}
                                large
                                source={{uri: "http://1.bp.blogspot.com/-ekhKVXl7xto/T6-2WZMYpTI/AAAAAAAAGiQ/ioOs_2BfXPA/s1600/Images+for+Dog+:++Wallpaper+:+Cute+:+Funny+:+Beautiful+Puppies8.jpg"}}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                                containerStyle={{ left:-125, top:85, }}
                                overlayContainerStyle={{backgroundColor: '#BE3A31'}}


                        />

                        <Avatar style={styles.ImageUser}
                                large
                                source={{uri: "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/German-Shepherd-Dog-2.jpg"}}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                                containerStyle={{ left:-115, top:85, }}
                                overlayContainerStyle={{backgroundColor: '#BE3A31'}}

                        />

                        <Avatar
                            small
                            rounded
                            icon={{name: 'add'}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            containerStyle={{ right: 100, top: 65, width: 45}}

                        />
                        <Text style={styles.text13}>
                            {first_name} {last_name}
                        </Text>



                    </Row>

                    <Row>
                        <Tabs>
                            {/* First tab */}

                            <View title="About me" style={styles.content13}>
                                <Information/>
                            </View>

                            {/* Second tab */}

                            <View title=" Review" style={styles.content13}>
                                <List/>
                            </View>

                            {/* Third tab */}

                            <View title=" My Pets" style={styles.content13}>
                                <Text>Why</Text>
                            </View>

                        </Tabs>

                    </Row>
                </Grid>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    container13: {
        flex: 1,                            // Take up all screen
        backgroundColor: '#fffff9',


        // Background color
    },
    container14: {
        // Take up all screen
        backgroundColor: '#BE3A31',
        height: 20,



        // Background color
    },
// Tab content container
    ImageUser: {
        flex: 1,
        position: 'absolute',
        borderColor: 'white',
        right: 15,
        borderWidth: 3,         // Darker background for content area
    },
    text13: {
        // Add horizontal margin
        color: '#fff', // Semi-transparent text
        fontFamily: 'Avenir',
        fontSize: 25,
        left: -465,
        top: 170,
        textDecorationLine: 'underline',
        fontWeight: 'bold',

    },

});