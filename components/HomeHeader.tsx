import React from 'react'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import { View, Text, Image, TextInput } from 'react-native'

const HomeHeader = () => {
  return (
    <>
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
            <Image 
                source={{
                    uri: 'https://t.ly/5EC_'
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />

            <View className='flex-1'>
                <Text className='font-bold text-gray-400 text-xs'>
                    Deliver Now!
                </Text>
                <Text className='font-bold text-xl'>
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB"></ChevronDownIcon>
                </Text>
            </View>

            <UserIcon size={35} color="#00CCBB"/>
        </View>

        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
            <View className='flex-1 flex-row space-x-2 bg-gray-200 p-3'>
                <MagnifyingGlassIcon color='gray' size={20}/>
                <TextInput placeholder='Restaurants and cuisines' keyboardType='default'/>
            </View>

            <AdjustmentsVerticalIcon color='#00CCBB'/>
        </View>
    </>
  )
}

export default HomeHeader