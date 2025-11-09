import { View, Text, ScrollView, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    const { width } = useWindowDimensions();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="px-4">
                <View className="mt-4">
                    <Text className="text-2xl font-semibold mb-4">Welcome back 👋</Text>

                    {/* Exemple de post */}
                    <View className="mb-6 rounded-xl py-3">
                        <View className="flex-row items-center mb-2">
                            <Image
                                source={require('@/assets/logo/voda.jpeg')}
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <View>
                                <Text className="font-semibold text-base">Vodacom Congo (RDC)</Text>
                                <Text className="text-gray-500 text-sm">8h ago</Text>
                            </View>
                        </View>
                        <Text className="text-gray-800 mb-2">
                            🚨 Alerte à la fausse information (Fake News)
                        </Text>
                        {/* <Image
              source={require('@/assets/images/poster.jpeg')} // image du post
              className="w-full h-84 rounded-lg"
              resizeMode="contain"
            /> */}
                        <Image
                            source={require('@/assets/images/poster.jpeg')}
                            className="w-full h-60 rounded-lg"
                            resizeMode="cover"
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

export default Home;
