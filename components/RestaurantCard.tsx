import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline'

type RestaurantCard = {
    id: number,
    imgUrl: string,
    title: string,
    rating: number,
    genre: string,
    address: string,
    short_desc: string,
    dishes: object,
    long: number,
    lat: number
}

const RestaurantCard = (props: RestaurantCard) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
      <Image 
        source={{
            uri: props.imgUrl
        }}
        className="h-64 w-64 rounded-sm"
      />

      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{props.title}</Text>
        <View className='flex-row items-center space-x-1'>
            <StarIcon color="green" opacity={0.5} size={22}/>
            <Text className='text-xs text-gray-500'>
                <Text className='text-green-500'>{props.rating}</Text> · {props.genre}
            </Text>
        </View>

        <View className='flex-row items-center space-x-1'>
            <MapPinIcon color="gray" opacity={0.4} size={22}/>
            <Text className='text-xs text-gray-500'>Nearby · {props.address}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard