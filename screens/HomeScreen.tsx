import React, { useLayoutEffect } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HomeHeader from '../components/HomeHeader'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

  return (
    <SafeAreaView className='bg-white pt-5'>
        <HomeHeader />

        <ScrollView 
          className='bg-gray-100' 
          contentContainerStyle={{
            paddingBottom: 100
          }}
        >
          <Categories />

          <FeaturedRow 
            id="123"
            title="Featured"
            description="Paid placements from out partners"
          />
          <FeaturedRow 
            id="1234"
            title="Tasty Discounts"
            description="Everyone's been enjoying these juicy discounts!"
          />
          <FeaturedRow 
            id="12345"
            title="Offers near you!"
            description="Why not support your local restaurant tonight?"
          />
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen