import React, { PropTypes, Component } from 'react';
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
    ScrollView,
    Alert,
    TouchableHighlight,
} from 'react-native';
import MapView from 'react-native-maps';
import Modal from "react-native-modal";
import { Col, Row, Grid } from "react-native-easy-grid";

import { Header, Icon, List, ListItem, FormLabel } from 'react-native-elements';

const propTypes = {
    amount1: PropTypes.number.isRequired,
    amount2: PropTypes.number.isRequired,
    amount3: PropTypes.number.isRequired,
    amount4: PropTypes.number.isRequired,
    amount5: PropTypes.number.isRequired,
    amount6: PropTypes.number.isRequired,
    amount7: PropTypes.number.isRequired,
    amount8: PropTypes.number.isRequired,
    amount9: PropTypes.number.isRequired,
    amount10: PropTypes.number.isRequired,
    amount11: PropTypes.number.isRequired,
    amount12: PropTypes.number.isRequired,
    amount13: PropTypes.number.isRequired,
    amount14: PropTypes.number.isRequired,
    amount15: PropTypes.number.isRequired,
    amount16: PropTypes.number.isRequired,
    amount17: PropTypes.number.isRequired,
    amount18: PropTypes.number.isRequired,
    fontSize: PropTypes.number,
};

const defaultProps = {
    fontSize: 13,
    amount1: 45,
    amount2: 13,
    amount3: 72,
    amount4: 35,
    amount5: 42,
    amount6: 24,
    amount7: 11,
    amount8: 9,
    amount9: 5,
    amount10: 25,
    amount11: 41,
    amount12: 40,
    amount13: 56,
    amount14: 95,
    amount15: 4444,
    amount16: 56,
    amount17: 95,
    amount18: 95,


};





class PriceMarker extends Component {
    state = {
        isModalVisible: false
    };
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    render() {
        const { fontSize, amount1,amount2,amount3,amount4,amount5,
            amount6,amount7,amount8,amount9,amount10,amount11,amount12,amount13,amount14,
            amount15,amount16,amount17,amount18} = this.props;
        return (
            <View>
                <MapView.Marker
                    coordinate={{
                        latitude: 34.24116,
                        longitude: -115.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount2}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>

                <MapView.Marker
                    coordinate={{
                        latitude: 34.24116,
                        longitude: -118.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount1}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 36.24116,
                        longitude: -118.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount3}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 30.24116,
                        longitude: -115.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount4}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 29.24116,
                        longitude: -110.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount5}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 38.24116,
                        longitude: -118.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount6}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 39.24116,
                        longitude: -121.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount7}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 33.24116,
                        longitude: -111.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount8}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 35.24116,
                        longitude: -119.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount9}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 32.24116,
                        longitude: -101.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount10}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 43.24116,
                        longitude: -110.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount11}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 44.24116,
                        longitude: -118.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount12}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 36.24116,
                        longitude: -114.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount13}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 35.24116,
                        longitude: -118.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount14}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>

                <MapView.Marker
                    coordinate={{
                        latitude: 34.24737,
                        longitude: -118.5291,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <TouchableHighlight onPress={this._toggleModal}>
                            <Text style={styles.dollar}  >$</Text>
                            </TouchableHighlight>
                            <Text style={[styles.amount, { fontSize }]}>{amount15}</Text>

                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>

                </MapView.Marker>

                <MapView.Marker
                    coordinate={{
                        latitude: 34.26737,
                        longitude: -118.5391,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount16}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 34.20116,
                        longitude: -118.5191,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount17}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 34.23516,
                        longitude: -118.5151,
                    }}>
                    <View style={styles.container}>
                        <View style={styles.bubble}>
                            <Text style={styles.dollar}>$</Text>
                            <Text style={[styles.amount, { fontSize }]}>{amount18}</Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </MapView.Marker>
                <Modal isVisible={this.state.isModalVisible}
                       style={styles.Modelcotainer}
                       backdropOpacity={0.3}
                       animationIn="zoomInDown"
                       animationOut="zoomOutUp"
                       animationInTiming={1000}
                       animationOutTiming={1000}
                       backdropTransitionInTiming={1000}
                       backdropTransitionOutTiming={1000}


                >
                    <View style={{ flex: 1 }}>
                        <ScrollView>

                                <Grid>
                                    <Col>
                                        <Button onPress={this.Saveinfo}
                                                title={"Save"}
                                                leftIcon={{name:'check'}}
                                                backgroundColor={'#d91f10'}

                                        />
                                    </Col>
                                    <Col>
                                        <Button onPress={this._toggleModal}
                                                title={"Cancel"}
                                                leftIcon={{name:'clear'}}
                                                backgroundColor={'#13A50C'}
                                        />
                                    </Col>
                                </Grid>



                        </ScrollView>
                    </View>
                </Modal>

            </View>

        );
    }
}

PriceMarker.propTypes = propTypes;
PriceMarker.defaultProps = defaultProps;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    bubble: {
        flex: 0,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#a900ff',
        padding: 2,
        borderRadius: 3,
        borderColor: '#21d203',
        borderWidth: 0.5,
    },
    dollar: {
        color: '#FFFFFF',
        fontSize: 10,
    },
    amount: {
        color: '#FFFFFF',

    },
    arrow: {
        backgroundColor: 'transparent',
        borderWidth: 4,
        borderColor: 'transparent',
        borderTopColor: '#a900ff',
        alignSelf: 'center',
        marginTop: -9,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderWidth: 4,
        borderColor: 'transparent',
        borderTopColor: '#21d203',
        alignSelf: 'center',
        marginTop: -0.5,
    },
});

module.exports = PriceMarker;
