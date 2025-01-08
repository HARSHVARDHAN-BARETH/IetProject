import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Calculator = () => {
  const [value, setValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [num, setNum] = useState('');

  const handleNum = (num) => {
    if (value === '0' || operator) {
      setValue(num.toString());
    } else {
      setValue(value + num);
    }
  };

  const handleOperator = (operator) => {
    setOperator(operator);
    setNum(value);
    setValue(operator);
  };

  const computation = () => {
    const num1 = parseFloat(num);
    const num2 = parseFloat(value);

    if (operator === '+') {
      setValue((num1 + num2).toString());
    } else if (operator === '-') {
      setValue((num1 - num2).toString());
    } else if (operator === '*') {
      setValue((num1 * num2).toString());
    } else if (operator === '/') {
      setValue((num1 / num2).toString());
    }
    setOperator(null);
    setNum('');
  };

  const clear = () => {
    setValue('0');
    setOperator(null);
    setNum('');
  };

  return (
    <View style={style.container}>
      <Text style={[style.title, {fontSize:40, letterSpacing:3, textShadowColor:'#000', color:'#fff', textShadowOffset:{width:2,height:2}, shadowOpacity:2, textShadowRadius:2}]}>Calculator</Text>
      <View style={style.main}>
        <View style={style.display}>
          <Text style={style.displayText}>{value}</Text>
        </View>
        <View style={style.buttons}>

        <View style={style.buttonRow}>
        <TouchableOpacity onPress={() => handleNum('')} style={[style.button,{backgroundColor:'crimson'}]}>
            <Text style={style.buttonText}>MC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum('')} style={[style.button,{backgroundColor:'#1e90ff'}]}>
            <Text style={style.buttonText}>MX</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('/')} style={style.button}>
            <Text style={style.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('*')} style={style.button}>
            <Text style={style.buttonText}>x</Text>
          </TouchableOpacity>
       
        </View>

          {/* Number Buttons */}
       <View style={style.buttonRow}>
       <TouchableOpacity onPress={() => handleNum(7)} style={style.button}>
            <Text style={style.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum(8)} style={style.button}>
            <Text style={style.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum(9)} style={style.button}>
            <Text style={style.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('-')} style={style.button}>
            <Text style={style.buttonText}>-</Text>
          </TouchableOpacity>
       </View>

      <View style={style.buttonRow}>
      <TouchableOpacity onPress={() => handleNum(4)} style={style.button}>
            <Text style={style.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum(5)} style={style.button}>
            <Text style={style.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum(6)} style={style.button}>
            <Text style={style.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('+')} style={style.button}>
            <Text style={style.buttonText}>+</Text>
          </TouchableOpacity>
      </View>

   <View style={{flexDirection:'row', backgroundColor:'pink'}}>
        <View style={{backgroundColor:'red', width:280}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:18}}>
      <TouchableOpacity onPress={() => handleNum(1)} style={[style.button,{width:70}]}>
            <Text style={style.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum(2)} style={[style.button,{width:70}]}>
            <Text style={style.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum(3)} style={[style.button,{width:70}]}>
            <Text style={style.buttonText}>3</Text>
          </TouchableOpacity>
      </View>
       <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:18}}>
       <TouchableOpacity onPress={() => handleNum(0)} style={[style.button,{width:70}]}>
            <Text style={style.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum('.')} style={[style.button,{width:70}]}>
            <Text style={style.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => clear()} style={[style.button,{width:70, backgroundColor:'#ff8c00'}]}>
            <Text style={style.buttonText}>AC</Text>
          </TouchableOpacity>       
       </View>
        </View>
          <TouchableOpacity onPress={() => computation()} style={[style.button,{height:139, backgroundColor:'crimson'}]}>
            <Text style={[style.buttonText]}>=</Text>
          </TouchableOpacity>
   </View>
   <View style={{flexDirection:'row', marginTop:-1}}>
   </View>

          {/* Action Buttons */}
        
        </View>
      </View>
    </View>
  );
};

export default Calculator;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ED',
  },
  buttonRow:{
     flexDirection: 'row',
    //  backgroundColor :'#7FFF00',
     backgroundColor :'black',
     justifyContent:'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  main: {
    width: 380,
    height: 500,
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor:'white',
    borderRadius: 2,
    boxShadow: '#000',
    elevation:2,
    shadowColor: '#000',
    shadowOpacity:2,
    shadowRadius:2,
    shadowOffset: {width:2, height:2}
    // backgroundColor: '#d3d3d3',
  },
  display: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
    color:'#fff',
    backgroundColor: '#fff',
    marginTop:10,
    borderColor:'#000',
    borderWidth:1,
    marginLeft:10,
    marginRight:10,
  },
  displayText: {
    fontSize: 36,
    marginRight: 12,
    color:'#000',
    fontWeight: 'bold',
  },
  buttons: {
    padding: 10,
    backgroundColor:'black'
  },
  button: {
    width: '20%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#7FFF00',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 25,
    color:'#fff',
    fontWeight: 'bold',
  },
});