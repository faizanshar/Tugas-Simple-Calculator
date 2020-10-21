import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux';
import {Styles} from './Stylecalculator';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native'

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      calc: '',
    };
  }
  addCalc(char) {
    this.setState({calc: this.state.calc + char});
  }

  addOperator(char) {
    const str = this.state.calc;
    const addedStr = str.substring(0, str.length - 1) + char;
    if (str !== '') {
      if (
        str.endsWith('+') ||
        str.endsWith('-') ||
        str.endsWith('*') ||
        str.endsWith('/') ||
        str.endsWith('%')
      ) {
        this.setState({calc: addedStr});
      } else {
        this.addCalc(char);
        try {
          const result = eval(this.state.calc);
          this.setState({result: result});
        } catch (error) {
          Alert.alert('Error', error);
          this.clear();
        }
      }
    } else if (str == '' && this.state.result !== '') {
      this.setState({calc: this.state.result + char, result: ''});
    }
  }

  del() {
    const str = this.state.calc;
    const deleted = str.substring(0, str.length - 1);
    this.setState({calc: deleted});
  }

  sum() {
    const str = this.state.calc;
    var sumStr = '';
    if (
      str.endsWith('+') ||
      str.endsWith('-') ||
      str.endsWith('*') ||
      str.endsWith('/') ||
      str.endsWith('%')
    ) {
      sumStr = str.substring(0, str.length - 1);
    } else {
      sumStr = str;
    }
    try {
      const result = eval(sumStr);
      this.setState({result: result});
      this.addHistory();
      this.setState({calc: ''});
    } catch (error) {
      alert(error);
      this.clear();
    }
  }

  clear() {
    this.setState({calc: '', result: ''});
  }

  addHistory() {
    const {calc, result} = this.state;
    // this.setState({history: [...this.state.history, calc]});
    if (calc !== '') {
      this.props.addHistory(calc);
    }
  }

  // hitung = (value) => {
  //     if(this.state.nilai === 0){
  //         this.setState({nilai : value})
  //     }else {
  //         this.setState({nilai: this.state.nilai + '' + value})
  //     }
  // }

  render() {
    return (
      <View style={Styles.view1}>
        <View style={Styles.view2}>
          <Text style={Styles.text1}>WELCOME TO MY CALCULATOR</Text>
        </View>
        <View style={styles.containerResult}>
          {/* <ScrollView style={styles.container}>
            {this.props.history.map((history, index) => (
              <View key={index} style={styles.history}>
                <Text style={styles.historyCalc}>{history}</Text>
                <Text style={styles.historyResult}>{eval(history)}</Text>
              </View>
            ))}
          </ScrollView> */}
          {/* <Text>{this.props.counter}</Text> */}
          <Text style={styles.number}>{this.state.calc}</Text>
          <Text style={styles.result}>{this.state.result}</Text>
        </View>

        <View style={Styles.view3}>
          <View style={Styles.view4}>
            <TouchableOpacity
              style={Styles.touch}
              onPress={() => this.clear()}>
              <Text style={Styles.text2}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.touch} onPress={() => this.del()}>
              <Text style={Styles.text2}>D</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.touch} onPress={() => this.addOperator('%')}>
              <Text style={Styles.text2}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.touch} onPress={() => this.addOperator('/')}>
              <Text style={Styles.text2}>/</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.view4}>
            <TouchableOpacity
              style={Styles.touch}
              onPress={() => this.addCalc('7')}>
              <Text style={Styles.text2}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.touch}
              onPress={() => this.addCalc('8')}>
              <Text style={Styles.text2}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.touch}
              onPress={() => this.addCalc('9')}>
              <Text style={Styles.text2}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.touch} onPress={() => this.addOperator('*')}>
              <Text style={Styles.text2}>x</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.view4}>
            <TouchableOpacity
              style={Styles.touch}
              onPress={() => this.addCalc('4')}>
              <Text style={Styles.text2}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.touch}
              onPress={() => this.addCalc('5')}>
              <Text style={Styles.text2}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.touch}
              onPress={() => this.addCalc('6')}>
              <Text style={Styles.text2}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.touch} onPress={() => this.addOperator('-')}>
              <Text style={Styles.text2}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.view4}>
            <TouchableOpacity
              style={Styles.touch}
              onPress={() => this.addCalc('1')}>
              <Text style={Styles.text2}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.touch}
              onPress={() => this.addCalc('2')}>
              <Text style={Styles.text2}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.touch}
              onPress={() => this.addCalc('3')}>
              <Text style={Styles.text2}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.touch} onPress={() => this.addOperator('+')}> 
              <Text style={Styles.text2}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.view4}>
            <TouchableOpacity style={Styles.touch}>
              <Text style={Styles.text2}>()</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.touch}
              onPress={() => this.hitung(0)}>
              <Text style={Styles.text2}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.touch}>
              <Text style={Styles.text2}>,</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.touch} onPress={() => this.sum()}>
              <Text style={Styles.text2}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHistory: (data) =>
      dispatch({
        type: 'ADD',
        data: data,
      }),
    clearHistory: () =>
      dispatch({
        type: 'CLEAR',
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerResult: {
    flex: 1,
    backgroundColor: '#eee',
  },
  containerRow: {
    backgroundColor: '#969696',
    flexDirection: 'row',
    flex: 1,
    
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonOperator: {
    backgroundColor: '#808080',
  },
  buttonText: {
    fontSize: 24,
  },
  number: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'right',
  },
  result: {
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'right',
  },
  history: {
    padding: 8,
    borderBottomWidth: 1,
    margin: 8,
  },
  historyCalc: {
    fontSize: 12,
  },
  historyResult: {
    fontSize: 16,
    color: '#1f1f1f',
  },
});

// const mapStateToProps = (state) => {
//   return {
//     hasil: state.textinput1 + state.textinput2,
//     hasil: state.textinput1 - state.textinput2,
//     hasil: state.textinput1 * state.textinput2,
//     hasil: state.textinput1 / state.textinput2,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     tambah: () =>
//       dispatch({
//         type: 'TAMBAH',
//       }),
//     kurang: () =>
//       dispatch({
//         type: 'KURANG',
//       }),
//     kali: () =>
//       dispatch({
//         type: 'KALI',
//       }),
//     bagi: () =>
//       dispatch({
//         type: 'BAGI',
//       }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
