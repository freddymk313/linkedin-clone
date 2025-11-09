import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // const handleRegister = () => {
  //   console.log('Register data:', formData);
  // };

  const handleLogin = () => {
    if (isFormIncomplete) return;

    console.log('Register data:', formData);
    router.replace('/(tabs)/home'); // remplace la page actuelle
  };


  const isFormIncomplete = !formData.email || !formData.password || !formData.firstName || !formData.lastName;

  const [checked, setChecked] = useState(false);

  

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />

      {/* KeyboardAvoidingView */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // iOS = padding, Android = height
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} // Ajuste si nécessaire
      >
        <ScrollView contentContainerStyle={{ paddingHorizontal: 18, paddingBottom: 24 }}>

          {/* Header */}
          <View className="mt-10 mb-10">
            <Image
              source={require('../assets/logo/logo.png')}
              className="w-[100px] h-12"
              resizeMode="contain"
            />
          </View>

          {/* Title */}
          <Text className="text-4xl font-bold text-black mb-2">Sign in</Text>

          {/* Sign in link */}
          <View className="flex-row items-center mb-5">
            <Text className="text-gray-500 text-base">or </Text>
            <Link href={"/register"} asChild>
              <Pressable>
                <Text className="text-blue-700 font-bold text-base">Join LinkedIn</Text>
              </Pressable>
            </Link>
          </View>

          {/* Social Buttons */}
          <View className="gap-y-3 mb-4">
            <TouchableOpacity className="border border-gray-700 rounded-full py-3 items-center">
              <View className="flex-row items-center">
                <Image
                  source={require('../assets/logo/google.png')}
                  className="w-6 h-6 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-black font-medium text-base">Sign in with Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="border border-gray-700 rounded-full py-3 items-center">
              <View className="flex-row items-center">
                <Image
                  source={require('../assets/logo/apple.png')}
                  className="w-6 h-6 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-black font-medium text-base">Sign in with Apple</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="border border-gray-700 rounded-full py-3 items-center">
              <View className="flex-row items-center">
                <Image
                  source={require('../assets/logo/facebook.png')}
                  className="w-6 h-6 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-black font-medium text-base">Sign in with Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap mb-8">
            <Text className="text-gray-500 text-base">By clicking Continue, you agree to LinkedIn's </Text>
            <TouchableOpacity>
              <Text className="text-blue-700 font-bold text-base">User Agreement, Privacy Policy, </Text>
            </TouchableOpacity>
            <Text className="text-gray-500 text-base">and </Text>
            <TouchableOpacity>
              <Text className="text-blue-700 font-bold text-base">Cookie Policy</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View className="flex-row items-center mb-8">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-4 text-gray-700">or</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Form */}
          {/* Email */}
          {/* <View className="mb-8">
          <TextInput
            className="border-b border-gray-700 pb-2 pt-3 text-[17.5px]"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            placeholder="Enter or Phone"
            placeholderTextColor="#A0A0A0" // Couleur du placeholder
          />
        </View> */}

          {/* Email */}
          <View className="mb-6 relative">
            {/* Label flottant */}
            {(formData.email) && (
              <Text className="absolute -top-2 text-gray-500 text-base bg-white">Email or Phone</Text>
            )}

            <TextInput
              className="border-b border-gray-700 py-4 text-[17.5px] text-black"
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              placeholder={formData.email ? '' : 'Email or Phone'}
              placeholderTextColor="#A0A0A0"
            />
          </View>


          {/* Password */}
          {/* <View className="mb-4">
          <View className="flex-row items-center border border-gray-300 rounded bg-white">
            <TextInput
              className="flex-1 px-3 py-3 text-base"
              value={formData.password}
              onChangeText={(value) => handleInputChange('password', value)}
              secureTextEntry={!showPassword}
              autoComplete="password-new"
            />
            <TouchableOpacity className="px-3 py-3" onPress={() => setShowPassword(!showPassword)}>
              <Text className="text-gray-500 font-medium">{showPassword ? 'hide' : 'show'}</Text>
            </TouchableOpacity>
          </View>
        </View> */}

          {/* <View className='mb-6'>
                    <View className="flex-row items-center border border-gray-300 rounded bg-white">
          <TextInput
            className="border-b border-gray-700 pb-2 pt-4 text-[17.5px]"
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
            ecureTextEntry={!showPassword}
              autoComplete="password-new"
            autoCapitalize="none"
            autoComplete="password"
            placeholder="Password"
            placeholderTextColor="#A0A0A0" // Couleur du placeholder
          />
          </View>
        </View> */}

          {/* Password */}
          <View className="mb-6 relative">
            {/* Label flottant */}
            {(formData.password || showPassword) && (
              <Text className="absolute -top-2 text-gray-500 text-base bg-white">Password</Text>
            )}

            <View className="flex-row items-center border-b border-gray-700">
              <TextInput
                className="flex-1 py-4 text-[17.5px] text-black"
                value={formData.password}
                onChangeText={(value) => handleInputChange('password', value)}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoComplete="password"
                placeholder={formData.password ? '' : 'Password'}
                placeholderTextColor="#A0A0A0"
              />
              <TouchableOpacity
                className="px-3"
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text className="text-gray-500 font-medium">
                  {showPassword ? 'Hide' : 'Show'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* <View className="flex-row items-center mt-2 mb-5">
          <Text className="text-gray-500 text-lg">Remember me. </Text>
          <TouchableOpacity>
            <Text className="text-blue-700 font-semibold text-lg">Learn more</Text>
          </TouchableOpacity>
        </View> */}

          <View className="flex-row items-center mt-2 mb-5">
            {/* Checkbox */}
            <TouchableOpacity
              className={`w-5 h-5 border rounded-sm mr-2 flex items-center justify-center ${checked ? 'bg-green-700 border-green-700' : 'bg-white border-gray-400'}`}
              onPress={() => setChecked(!checked)}
            >
              {checked && <Text className="text-white font-bold text-sm">✓</Text>}
            </TouchableOpacity>

            <Text className="text-gray-500 text-lg mr-2">Remember me.</Text>

            <TouchableOpacity>
              <Text className="text-blue-700 font-semibold text-lg">Learn more</Text>
            </TouchableOpacity>
          </View>

          {/* Register Button */}
            <Pressable
              className={`rounded-full py-3.5 items-center mb-6 bg-blue-600/90`}
              // onPress={handleLogin}
              // disabled={isFormIncomplete}
              onPress={()=> router.replace('/(tabs)/home')}
            >
              <Text className="text-white font-semibold text-base">Countinue</Text>
            </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
