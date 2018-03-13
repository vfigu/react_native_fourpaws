import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';

import { View, Title, Screen } from '@shoutem/ui';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Messages from '../containers/Messages';
import Input from '../containers/Input';
import { sendMessage } from '../actions';
import Database from '../../firebase/database';
import * as firebase from "firebase"

const mapStateToProps = (state) => ({
    chat: state.chatroom,
    chatHeight: state.chatroom.meta.height,
    user: state.user
});

class ChatUI extends Component {
    // constructor(props){
    //     super(props);
    //     console.ignoredYellowBox = [  //related to timeout on auth token of 60min, known issue
    //         'Setting a timer',
    //         'Invalid query string' //not working
    //     ];
    //     this.state = {
    //     };
    // }
    state = {
        scrollViewHeight: 0,
        inputHeight: 0,
        fname: "",
        lname: "",
        uid: ""
    };

    async componentDidMount(){

        try {
            let user = await firebase.auth().currentUser;
            Database.listenUserName(user.uid, (data)=> {
                this.setState({
                    fname: data.fname,
                    lname: data.lname
                })
            });

            this.setState({
                  uid: user.uid,
            });
        } catch (error) {
            alert(error);
        }
        this.scrollToBottom(false);
    }


    componentDidUpdate() {
        // this.props.user.uid = this.state.uid;
        // this.props.user.name = this.state.fname + ' ' + this.state.lname;
        this.scrollToBottom();
    }
    onScrollViewLayout = (event) => {
        const layout = event.nativeEvent.layout;

        this.setState({
            scrollViewHeight: layout.height
        });
    };
    onInputLayout = (event) => {
        const layout = event.nativeEvent.layout;

        this.setState({
            inputHeight: layout.height
        });
    };
    scrollToBottom(animate = true) {
        const { scrollViewHeight, inputHeight } = this.state,
            { chatHeight } = this.props;

        const scrollTo = chatHeight - scrollViewHeight + inputHeight;

        if (scrollTo > 0) {
            this.refs.scroll.scrollToPosition(0, scrollTo, animate)
        }
    }
    _scrollToInput(reactRef) {
        this.refs.scroll.scrollToFocusedInput(ReactNative.findNodeHandle(reactRef));
    }

    sendMessage = (text, user, chat) => {
        return sendMessage(text, this.props.user, this.props.chat)
    };

    render() {
        return (
            <Screen>
                <Title styleName="h-center" style={{padding: 10}}>
                    Chatroom
                </Title>
                <KeyboardAwareScrollView ref="scroll"
                                         onLayout={this.onScrollViewLayout}>
                    <Messages/>
                </KeyboardAwareScrollView>
                    <Input footer={height=100}
                           onLayout={this.onInputLayout}
                           // onFocus={this._scrollToInput.bind(this)}
                           submitAction={this.sendMessage}
                           ref="input"
                           placeholder="Message ..." />
            </Screen>
        )
    }
}

export default connect(mapStateToProps)(ChatUI);