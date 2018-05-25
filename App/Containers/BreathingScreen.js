import React, { Component } from 'react'
import { Text, View, Animated } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes'
import Button from 'react-native-micro-animated-button'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/BreathingScreenStyle'

class BreathingScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor (props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
      anim: null,
      showStart: true,
      showStop: false
    }
  }

  componentDidMount () {
  }

  startAnimation () {
    let anime = Animated.loop(Animated.sequence([
      Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: 4000,              // Make it take a while
          useNativeDriver: true
        }
      ), Animated.delay(6000),
      Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 0,                   // Animate to opacity: 1 (opaque)
          duration: 8000,              // Make it take a while
          useNativeDriver: true
        }
      )]))
    this.state.anim = anime
    anime.start()
  }

  stopAnimation () {
    this.state.anim.stop()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Animated.View style={[styles.circle, { transform: [{
            scale: this.state.fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.2, 2]  // 0 : 150, 0.5 : 75, 1 : 0
            })
          }]}]} />
        </View>
        <View style={styles.section} >
          <Text style={styles.sectionText}>Inhale when the circle expands, hold when its still & exhale when it contracts</Text>
        </View>
        <View style={styles.buttonRow}>
          <Button
            bounce
            foregroundColor={Colors.snow}
            backgroundColor={'#2196F3'}
            successIconName='remove'
            maxWidth={150}
            style={{margin: 10}}
            label='Lets Breathe!'
            onPress={() => {
              this.startAnimation()
              this.b1.success()
              this.b2.reset()
            }
            }
            ref={ref => (this.b1 = ref)}
          />
          <Button
            bounce
            foregroundColor={Colors.snow}
            backgroundColor={'#2196F3'}
            maxWidth={150}
            style={{margin: 10}}
            label='stop'
            onPress={() => {
              this.stopAnimation()
              this.b1.reset()
              this.b2.reset()
            }
            }
            ref={ref => (this.b2 = ref)}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreathingScreen)
