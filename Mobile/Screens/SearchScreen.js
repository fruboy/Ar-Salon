import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { Tab, Header } from 'react-native-elements';
import COLORS from '../consts/color';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons, FontAwesome5, Entypo, AntDesign } from '@expo/vector-icons';


const SearchScreen = ({navigation}) => {
    
    const [inputValue, setinputValue] = useState('');
    const [search, setsearch] = useState({
        searchByName:true,
        searchByLoc:false
    })
    return (
        <View style={{marginTop:20}}>
            
                <View style={{flexDirection:'row', alignContent:'center' , alignItems:'center', marginHorizontal:20,
                    paddingVertical:15, paddingHorizontal:20, borderRadius:5, backgroundColor:COLORS.gray
                }}>
                    <Ionicons name="search" size={20} color={COLORS.dark} style={{ marginRight:10 }} />
                    <TextInput style={{fontSize:18, color:'black'}} 
                        value={inputValue}
                        onChangeText={setinputValue}
                        placeholder='Search'
                    />
                </View>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={[styles.searchButton, search.searchByName? {borderBottomWidth: 2, borderBottomColor:COLORS.primary}:''] } onPress={()=>{}}>
                        <Text style={{textTransform:'uppercase',color:COLORS.primary, fontSize:14,marginVertical:20,fontWeight:'bold' }}>
                            Search by name
                        </Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.searchButton, search.searchByLoc? {borderBottomWidth: 2, borderBottomColor:COLORS.primary}:'']} onPress={()=>{}}>
                        <Text style={{textTransform:'uppercase',  marginVertical:20, color:COLORS.primary, fontSize:14, fontWeight:'bold'}}>
                            Search by place
                        </Text>
                    </TouchableOpacity>
                </View>


                
  
        
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

    container: {
       paddingHorizontal: 5,
        flexDirection:'row',
  
      

    },
    input:{
        fontSize:18,
        width:'75%',
        paddingHorizontal:15,
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom:20,
        marginTop: 30,
        backgroundColor:COLORS.light

        

    },
    btnPrimary: {
        backgroundColor: COLORS.primary,
        height: 40,
        width:'25%',
        
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom:20,
        marginTop: 30,
    },

    searchButton:{
        width:'50%', justifyContent:'center', alignItems:'center',
        
       
    }
})
