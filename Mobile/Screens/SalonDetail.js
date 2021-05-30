import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity, FlatList} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import { useRoute } from '@react-navigation/native';
import Stars from 'react-native-stars';
import salons from '../consts/salon';
import COLORS from "../consts/color";
import { Dimensions } from 'react-native'
import { Ionicons, MaterialIcons, FontAwesome5, Entypo, AntDesign } from '@expo/vector-icons';
import { BottomSheet, ListItem} from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import CheckBox from '../Components/CheckBox';

const SalonDetail = ({route, navigation}) => {

    const [isVisible, setisVisible] = useState(false)
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [timeslot, settimeslot] = useState([]);


    const [selectedTime, setselectedTime] = useState()
    const [service, setservice] = useState([])
    const [checked, setchecked] = useState(false)


    const {width} = Dimensions.get('screen');
    const itemId= route.params.id
    console.log(itemId);
    const selectedSalon = salons.find((item)=>item.id==itemId);
    console.log(selectedSalon);




    const createTimeSlots =(start, end)=>{
        let startTime = moment(start, 'HH:mm')
        let endTime = moment(end, 'HH:mm')
        let arr = []
        while (startTime <= endTime){
            arr.push(new moment(startTime).format('HH:mm'));
            startTime.add(60 , 'minutes')
        }

        
        return arr
    }

    const renderTimeSlot =({item, index})=>{
        console.log(index)
        return(
        <TouchableOpacity style={selectedTime===index.toString() ? {backgroundColor:COLORS.primary,...styles.service}  : {backgroundColor:'rgb(243,245,247)',...styles.service}} onPress={()=>{setselectedTime(index.toString())}} >
            <Text style={selectedTime===index.toString() ? {color:'white',...styles.name}  : {color:COLORS.primary, ...styles.name}}>
                {item}
            </Text>
        </TouchableOpacity>)
    }

    const handleServieBox = (title, price) => {
        setchecked(!checked);
        setservice([...service,{
            title,
            price
        }])
    

    }


    const onUnchecked = (title) => {
        const updatedState = service.filter((item)=>item.title!==title)
        setservice(updatedState);
    }
    
    useEffect(() => {
        settimeslot(createTimeSlots('10:00', '16:00'))

    }, [])



    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ backgroundColor:'white'}}
            style={{flex:1}}
            
        >
            <StatusBar barStyle='light-content'  translucent= {isVisible ? false : true } />
            <ImageBackground style={styles.headerImage} source={selectedSalon.image} >
            <View style={styles.header}>
                  <TouchableOpacity >
                    <MaterialIcons name="arrow-back-ios" size={28} color="white" onPress={()=>{navigation.goBack()}} />
                </TouchableOpacity>
                <TouchableOpacity   >
                    <FontAwesome5 name="heart" size={24} color="white" />
                </TouchableOpacity>
            </View>
              
            </ImageBackground>
            <View style={{paddingHorizontal: 20, marginTop: 20,}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>
                    {selectedSalon.name}
                </Text>
                <Text style={{fontSize:14, fontWeight:"bold" , color:COLORS.light, marginTop: 5,}}>
                    {selectedSalon.location}
                </Text>
              
               
            </View>
            <View style={{marginTop: 5, paddingHorizontal:20, flexDirection:'row' , justifyContent:'space-between' }}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    


                        <Stars
                            display={3}
                            count={5}
                            starSize={40}
                            fullStar={<AntDesign name="star" size={20} color="orange" />}
                            emptyStar={<AntDesign name="staro" size={20} color="orange" />}
                         />
                    
            
                     <Text style={{fontWeight:'bold', color: COLORS.light, fontSize: 18,paddingHorizontal:8
                     
                     }}>
                         4.0
                     </Text>
                </View>

                <Text style={{fontWeight:'bold', color: COLORS.light, fontSize: 16,}}>
                    351 reviws
                </Text>
               
            </View>

            <View style={{marginTop:10, paddingHorizontal:20, }}>
                <Text style={{color:COLORS.light,}}>
                    {selectedSalon.details}
                </Text>
            </View>
            <View style={{}}>

            
               {selectedSalon?.service?.map((item,index)=>{
                   return(
                       <View key={index} style={{}}>
                           <CheckBox  title={item.name} price={item.price} checked={checked} onPress={()=>handleServieBox(item.name, item.price)} unchecked={()=>{onUnchecked(item.name)}} />
                       </View>
                       
                   );
               })}
            </View>
            <TouchableOpacity style={styles.btnPrimary} opacity={0.9} onPress={()=>{}} >
                <Text style={{color:COLORS.white, fontSize:16, fontWeight:'bold'}} onPress={()=>{setisVisible(true)}}>
                    BOOK NOW
                </Text>
            </TouchableOpacity>

            <BottomSheet
               
                isVisible={isVisible}
                containerStyle={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
            >
                           <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          
         
         
        />
                    
                    <View style={{backgroundColor:'rgb(243,245,247)', height:210}}>

                  


                        <FlatList
                            data={timeslot}
                            renderItem={renderTimeSlot}
                            keyExtractor={(item,index)=>index.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />

                             <TouchableOpacity style={styles.btnPrimary} opacity={0.9} onPress={()=>{}} >
                                <Text style={{color:COLORS.white, fontSize:16, fontWeight:'bold'}} onPress={()=>{setisVisible(false); navigation.navigate('Home')}}>
                                    BOOK NOW
                                </Text>
                            </TouchableOpacity>
                                          
                    </View>

                    
               
              
                
            </BottomSheet>
      

                    {/* {
                        timeslot.map((item, index)=>{
                           <View style={{}} key={index} >
                               <Text style={{}}>
                                   Hello
                               </Text>
                           </View>
                       }) 
                    } */}


                   
        </ScrollView>
    )
}

export default SalonDetail

const styles = StyleSheet.create({
    headerImage:{
        height:350,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: 'hidden',
    },
    header:{
        flexDirection:'row',    
        alignItems:"center",
        marginTop: 60,    
        marginHorizontal:20,
        justifyContent:'space-between'
    },
    iconCotainer:{
        position: 'relative',
        height:60,width:60,
        backgroundColor: COLORS.primary,
        borderRadius:40,
        top:-30,
        left:290,
        justifyContent:'center',
        alignItems:'center'
        
    },
    btnPrimary: {
        backgroundColor: COLORS.primary,
        height: 50,
        width:'80%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom:20,
        marginTop: 30,
    },
    service:{
        flexDirection:"row",
        marginHorizontal:5,
        padding:10,
        borderRadius:10,
        height:50,
        marginTop: 20,
    },

    name:{
        
        fontSize:18,
        fontWeight:'bold',
        paddingHorizontal:10,
        marginRight: 5,
    }
})
