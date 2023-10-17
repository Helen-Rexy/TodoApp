import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //HEADER
  header: {
    padding: 20,
  },

  //BODY
  listItem: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  iconAction: {
    height: 25,
    width: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },

  //FOOTER
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    height: 50,
    paddingHorizontal: 20,
    elevation: 40,
    backgroundColor: '#c8dec8',
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    color: '#fff',
  },
  iconPlusContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#79AC78',
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
});
export default styles;
