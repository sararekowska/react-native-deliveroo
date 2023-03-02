import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HomeHeader from '../components/HomeHeader'

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
    </SafeAreaView>
  )
}

export default HomeScreen