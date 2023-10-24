import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //HEADER
  header: {
    padding: 20,
  },

  //BODY
  listItemContainer: {
    backgroundColor: '#f5f5f5',
    padding: 2,
    paddingRight: 8,
    paddingBottom: 10,
    borderRadius: 10,
    marginVertical: 10,
    // flexDirection: 'row',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
    backgroundColor: '#d7eafa',
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    color: '#fff',
  },
  iconPlusContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#2089dc',
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
});
export default styles;
