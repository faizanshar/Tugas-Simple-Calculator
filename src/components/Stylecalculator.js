import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  view1: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  view2: {
    backgroundColor: '#0adeff',
    width: 360,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    backgroundColor: '#0adeff',
    width: 360,
    position:'absolute',
    bottom:-120,
    height: 470,
  },
  view4: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view5: {
    justifyContent:'center',
    backgroundColor:'#eb2300',
    width:360,
    marginTop:160,
    alignItems:'center'
  },
  text1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  text3: {
      fontSize:50,
      // backgroundColor:'purple',
      // width:360,
      // marginTop:210
  },

  touch: {
    backgroundColor: 'white',
    height: 66,
    width: 80,
    margin:2,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    fontSize: 30,
  },
});
