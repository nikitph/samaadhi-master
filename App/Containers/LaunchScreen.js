import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images, Colors } from '../Themes'
import Button from 'react-native-micro-animated-button'

// Styles
import styles from './Styles/LaunchScreenStyles'

const colors = {
  blue: '#4285f4',
  gray: '#d8d8d8',
  grayDark: '#444',
  green: '#0f9d58',
  red: '#A01829',
  pinkish: '#916D72'
}

export default class LaunchScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.samaadhi} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText}>Samaadhi</Text>
          </View>
          <View style={styles.centered} >
            <Button
              bounce
              foregroundColor={Colors.snow}
              backgroundColor={colors.pinkish}
              successColor={colors.pinkish}
              maxWidth={150}
              style={{margin: 10}}
              label='Lets Breathe!'
              onPress={() => {
                this.b1.success()
                this.props.navigation.navigate('BreathingScreen')
              }
            }
              ref={ref => (this.b1 = ref)}
              successIconName='check'
          />
          </View>

        </ScrollView>
      </View>
    )
  }
}
