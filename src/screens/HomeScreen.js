import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import {Button} from "../components/Button";

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View >
        <ScrollView>
            <Button text="Full Button" expand='block' round={true} icon={'tv'} iconPosition={'right'} disabled={true}/>
            <Button text="Full Button" expand='block' round={true} color='#10dc60'  icon={'sunrise'}/>
            <Button text="Block Round Button" expand='block' round={true} icon={'mic'}/>
            <Button text="Block Round Button" expand='block' round={true} color={'#f4f5f8'} icon={'navigation'}/>
            <Button text="Regular Button" icon={'log-in'}/>
            <Button text="Regular Button" icon={'log-in'} size={'small'} shape={'round'} iconPosition={'right'}/>
            <Button icon={'log-in'} round/>
            <Button fill='clear' icon={'map'}/>
            <Button text="Clear Button" fill='clear' icon={'speaker'}/>
            <Button text="Outline Button" fill='outline' icon={'watch'}/>
            <Button text="Outline Button" expand='block' fill='outline' icon={'volume'}/>
            <Button text="Outline Button" expand='block' fill='outline' shape={'round'} icon={'zap'}/>
        </ScrollView>
      </View>
    );
  }
}
