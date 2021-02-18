import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

export default class Profile extends Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.mB10}>
               <View style={styles.aboutContent} >
                  <Text style={styles.sectionTitle}>About Foreignerds Inc.</Text>
                  <Text style={styles.sectionDescription1}>Foreignerds Inc. provides virtual dedicated resources services for Software Developers, Web Designer, App Developers and Digital Marketing Resources.{'\n'}
              </Text>
                  <Text style={styles.sectionDescription1}>
                     Foreignerds is a Remote Staff Augmentation company that offers dedicated digital business solutions from small, to mid and large-scale enterprises.</Text>
               </View>
            </View>
         </View>
      )
   }
}


const styles = StyleSheet.create({
   aboutContent: {
      paddingBottom: 30
   },
   mB10: { marginBottom: 30 },
   coloriesArr: {
      flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, borderTopColor: 'gray', borderTopWidth: 1
   },
   sectionContainer1: {
      marginTop: 20,
      paddingHorizontal: 24,
   },
   sectionTitle: {
      marginBottom: 8,
      fontSize: 22,
      fontWeight: 'bold',
      color: 'black',
   },
   sectionDescription1: {
      fontSize: 14,
      color: 'black',
   },

   container: {
      paddingTop: 23,
      flex: 1,
      paddingHorizontal: 30
   },

});