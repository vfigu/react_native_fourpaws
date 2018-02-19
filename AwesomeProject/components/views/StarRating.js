import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import StarRating from 'react-native-star-rating';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default class Starrating extends Component {
/*
    constructor(props) {
        super(props);
        this.state = {
            generalStarCount: 3.5,
            customStarCount: 2.5,
        };
    }

    onGeneralStarRatingPress(rating) {
        this.setState({
            generalStarCount: rating,
        });
    }

    onCustomStarRatingPress(rating) {
        this.setState({
            customStarCount: rating,
        });
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.instructions}>
                    {`${this.state.generalStarCount} of stars is displayed`}
                </Text>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    /*rating={this.state.generalStarCount}
                    selectedStar={(rating) => this.onGeneralStarRatingPress(rating)}*/
 /*               />
                <Text style={styles.welcome}>
                    General Star Demo
                </Text>

                <StarRating
                    disabled={false};
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                   /* rating={this.state.customStarCount}
                    selectedStar={(rating) => this.onCustomStarRatingPress(rating)}
                    starColor={'red'}
                    emptyStarColor={'blue'}
                />
            </View>
        );
    }*/
}

//AppRegistry.registerComponent('Starrating', () => Starrating);

