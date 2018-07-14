
import React, { Component } from 'react';
import {
  
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

export default class App extends Component {
    state = {
        data: []
    };

    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch("https://api.unsplash.com/photos/?client_id=32cdb52fd8e2eff7eba11bbf6af763b83cbed2856608902c0d19b616163d710e");
        const json = await response.json();
        this.setState({ data: json});
    };
  render() {
    return (

        <View style={styles.container}>
        <FlatList
            data={ this.state.data }
            renderItem={({item}) =>




                        <View>
                            <Image source= {{ uri: item.urls.thumb }} style={styles.imageView}/>
                            <Text  style={styles.textView}>
                                {`${item.user.name}`}
                            </Text>
                        </View>
            }
            keyExtractor={(item, index) => index.toString()}
            />


                        </View>

    );
  }
}
      const styles = StyleSheet.create({
      container: {
      flex: 1,
      margin: 2,
      marginTop: 5,
       },


          imageView: {


              width: '100%',
              height: 200 ,
              margin: 7,
              borderRadius : 7

          },
          textView: {

              width:'30%',
              textAlignVertical:'center',
              padding: 10,
              color: '#000'

          }
  });




