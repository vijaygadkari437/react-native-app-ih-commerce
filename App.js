import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import styles from './public/styles/header';
// import { Container, Content, Header, Left, Right, Icon } from 'native-base';
// import FAIcon from 'react-native-vector-icons/FontAwesome';
export default function App() {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.HeadBox}>
          <View style={styles.LeftBox}>
            {/* <Icon name="md-menu"  style={styles.IconBox}/> */}
            <Image style={styles.MenuImg} source={require('./public/images/menu.png')} />
            <Image style={styles.LogoImg} source={require('./public/images/logo.png')} />
          </View>
          <View style={styles.RightBox}>
            <Image style={styles.RightImg} source={require('./public/images/cart.png')} />
          </View>
        </View>
        <View style={styles.SubHead}>
          <View style={styles.SearchBar}>
            <View style={styles.SearchBox}>
              <TouchableHighlight style={styles.IconBox} onPress={() => console.log('hii')}>
                <Image style={styles.SearchImg} source={require('./public/images/search.png')} />
              </TouchableHighlight>
              <View style={styles.IconBox}>
                <Text style={styles.SearchText}>Search</Text>
              </View>
            </View>
            <TouchableHighlight style={styles.CameraBox} onPress={() => console.log('hii')}>
              <Image style={styles.CameraImg} source={require('./public/images/camera.jpg')} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={styles.Category}>
        <View style={styles.CategoryItem}>
          {/* {console.log([styles.BackColorGreen, styles.CategoryFig])} */}
          <View style={[styles.CategoryFig, styles.BackColorGreen]}>
            <Image style={styles.CategoryImg} source={require('./public/images/category/babycare.png')} />
          </View>
          <Text style={styles.CategoryText}>Babycare</Text>
        </View>
        <View style={styles.CategoryItem}>
          <View style={styles.CategoryFig}>
            <Image style={styles.CategoryImg} source={require('./public/images/category/beauty.png')} />
          </View>
          <Text style={styles.CategoryText}>Beauty</Text>
        </View>
        <View style={styles.CategoryItem}>
          <View style={styles.CategoryFig}>
            <Image style={styles.CategoryImg} source={require('./public/images/category/bread.png')} />
          </View>
          <Text style={styles.CategoryText}>Bread</Text>
        </View>
        <View style={styles.CategoryItem}>
          <View style={styles.CategoryFig}>
            <Image style={styles.CategoryImg} source={require('./public/images/category/cheese.png')} />
          </View>
          <Text style={styles.CategoryText}>Cheese</Text>
        </View>
        <View style={styles.CategoryItem}>
          <View style={styles.CategoryFig}>
            <Image style={styles.CategoryImg} source={require('./public/images/category/drinks.png')} />
          </View>
          <Text style={styles.CategoryText}>Drinks</Text>
        </View>
      </View>
      <View>
        <Image source={require('./public/images')} />
      </View>
    </SafeAreaView>
  );
}
