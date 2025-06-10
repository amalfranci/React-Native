// Remove this line: import searchBar from "../components/searchBar";
import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const SearchBarApp = () => { // Use PascalCase for component names


const [input,setInput] = useState('')

  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4  '>
     <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#ab8bff'/>
     <TextInput  onPress={()=>{}}
     placeholder='Search Movies'
     placeholderTextColor='#ab8bff'
     className='flex-1 ml-2 text-white'
     value={input} 
     onChangeText={setInput}
     
     />

    </View>
  )
}

export default SearchBarApp