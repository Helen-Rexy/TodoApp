import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  //HEADER
  header: {
    marginBottom: 40,
  },

  //BODY
  bodyContainer: {
    flexGrow: 1,
    height: '65%',
    display: 'flex',
    flexDirection: 'column',
  },
});
export default styles;
