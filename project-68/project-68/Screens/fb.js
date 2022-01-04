import React from 'react';
import {Text, View} from 'react-native';

export default class FB extends React.Component{
 constructor(){
      super();
      this.state = {
        buttonState: 'normal',
      }
    }

  render(){
    return(
<View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
<Text>Facebook</Text>
</View>


    )
  }
}