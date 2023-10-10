import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useEffect, useState } from 'react'



const UseEffectTest = () => {

    const [counter,setCounter] = useState(1)

    const [data,setData] = useState(0)

    useEffect(() => {
        console.warn("Counter Value is Changed")
    }, [counter]) // This will run only when counter value changes

  return (
    <View>
      <Text style = {styles.heading}>UseEffectTest</Text>

      <Text style = {[styles.textStyle,styles.counterText]}>The Counter Value is :{counter}</Text>

      <Text style = {[styles.textStyle,styles.dataText]}>Hello Shubham =  {data}</Text>

      <View style = {{marginTop:80,marginHorizontal:20,}}>

        <Button title = "Counter Increase"  style = {{borderColor:'red'}} onPress= {() => setCounter(counter+1)   }  />

      </View>

      <View style = {{marginTop:10,marginHorizontal:20,borderColor:'red'}}>

        <Button title = "Data  Increase" onPress= {() => setData(data+1)   }           />
      </View>

      <TestUser info = {{counter,data}} />

      </View>
    
  )
}

const TestUser =  (props) => {
    useEffect(() => {
        console.warn("Test User Called")
    }, [props.info.data])
    return (
        <View>
            <Text style = {styles.textStyle}     >data : {props.info.data}</Text>

            <Text style = {styles.textStyle}     >Counter : {props.info.counter}</Text>

        </View>
    )
}

export default UseEffectTest

const styles = StyleSheet.create({
    heading : {
        fontSize : 20,
        fontWeight : 'bold',
        textAlign : 'center',
        marginTop : 20
    },
    textStyle : {
        fontSize : 28,
        fontWeight : 'bold',
        textAlign : 'center',
        marginTop : 20
    },
    counterText :{
        color : 'violet',
    },
    dataText : {
        color : 'yellowgreen'
    }
})