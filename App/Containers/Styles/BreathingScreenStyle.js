import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    alignItems: 'center',
    justifyContent: 'center'
  },

  centered: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonRow: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },

  section: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },

  sectionText: {
    fontFamily: 'Avenir',
    fontWeight: '200',
    fontSize: 12,
    color: 'blue',
    textAlign: 'center'
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'rgba(186,218,238,0.8)'
  }
})
