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
import { Link } from 'expo-router';
// import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

const Register = () => {
    // const navigation = useNavigation();
    const router = useRouter();
    const [step, setStep] = useState(1);
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

    const handleNextStep = () => {
        if (step === 1 && formData.email) setStep(2);
        else if (step === 2 && formData.password) setStep(3);
        else if (step === 3) console.log('Final Data:', formData);
    };

    const getProgress = () => {
        if (step === 1) return '30%';
        if (step === 2) return '60%';
        if (step === 3) return '90%';
    };

    const [checked, setChecked] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar style="auto" />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
            >
                <ScrollView contentContainerStyle={{ paddingHorizontal: 18, paddingBottom: 24 }}>

                    {/* Header */}
                    <View className="mt-10 mb-6">
                        <Image
                            source={require('../assets/logo/logo.png')}
                            className="w-[100px] h-12"
                            resizeMode="contain"
                        />
                    </View>

                    {/* Progress Bar */}
                    <View className="w-full h-2 bg-gray-300 rounded-full mb-6">
                        <View className="h-2 bg-blue-600/90 rounded-full" style={{ width: getProgress() }} />
                    </View>

                    <View>
                        <Text className="text-4xl font-bold text-black mb-2">Join LinkedIn</Text>

                        {/* Sign in link */}
                        <View className="flex-row items-center mb-5">
                            <Text className="text-gray-500 text-base">or </Text>
                            {/* <Link href={"/"} asChild> */}
                                <Pressable onPress={() => router.back()} >
                                    <Text className="text-blue-700 font-bold text-base">Sign in</Text>
                                </Pressable>
                            {/* </Link> */}
                        </View>
                    </View>

                    {/* Step Content */}
                    {step === 1 && (
                        <View>
                            {/* <Text className="text-3xl font-bold mb-4">Sign up</Text> */}


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

                            <View className="flex-row flex-wrap mb-8">
                                <Text className="text-gray-500 text-base">By clicking & Join or Continue, you agree to the LinkedIn </Text>
                                <TouchableOpacity>
                                    <Text className="text-blue-700 font-bold text-base">User Agreement, Privacy Policy, </Text>
                                </TouchableOpacity>
                                <Text className="text-gray-500 text-base">and </Text>
                                <TouchableOpacity>
                                    <Text className="text-blue-700 font-bold text-base">Cookie Policy.</Text>
                                </TouchableOpacity>
                                <Text className="text-gray-500 text-base">For phone number signups, you may receive SMS notifications.</Text>
                            </View>

                            <TouchableOpacity
                                className="rounded-full py-3.5 items-center mb-6 bg-blue-600/90"
                                onPress={handleNextStep}
                                disabled={!formData.email}
                            >
                                <Text className="text-white font-semibold text-base">Agree & Join</Text>
                            </TouchableOpacity>

                            {/* Social login */}
                            <View className="flex-row items-center mb-6">
                                <View className="flex-1 h-px bg-gray-300" />
                                <Text className="mx-4 text-gray-700">or</Text>
                                <View className="flex-1 h-px bg-gray-300" />
                            </View>

                            {/* <View className="gap-y-3">
                                <TouchableOpacity className="border border-gray-700 rounded-full py-3 items-center">
                                    <Text className="text-black font-medium text-base">Continue with Google</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="border border-gray-700 rounded-full py-3 items-center">
                                    <Text className="text-black font-medium text-base">Continue with Apple</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="border border-gray-700 rounded-full py-3 items-center">
                                    <Text className="text-black font-medium text-base">Continue with Facebook</Text>
                                </TouchableOpacity>
                            </View> */}

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
                        </View>
                        // </View>
                    )}

                    {step === 2 && (
                        <View>
                            {/* <Text className="text-3xl font-bold mb-4">Create Password</Text> */}
                            <View className="mb-6 relative">
                                <View className="flex-row items-center border-b border-gray-700">
                                    <TextInput
                                        className="flex-1 py-4 text-[17.5px] text-black"
                                        value={formData.password}
                                        onChangeText={(value) => handleInputChange('password', value)}
                                        secureTextEntry={!showPassword}
                                        autoCapitalize="none"
                                        placeholder="Password"
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

                            <TouchableOpacity
                                className="rounded-full py-3.5 items-center mb-6 bg-blue-600/90"
                                onPress={handleNextStep}
                                disabled={!formData.password}
                            >
                                <Text className="text-white font-semibold text-base">Agree & Join</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    {step === 3 && (
                        <View>
                            {/* <Text className="text-3xl font-bold mb-4">Add your details</Text> */}

                            <View className="mb-6">
                                <TextInput
                                    className="border-b border-gray-700 py-4 text-[17.5px]"
                                    value={formData.firstName}
                                    onChangeText={(value) => handleInputChange('firstName', value)}
                                    placeholder="First Name"
                                    placeholderTextColor="#A0A0A0"
                                />
                            </View>

                            <View className="mb-6">
                                <TextInput
                                    className="border-b border-gray-700 py-4 text-[17.5px]"
                                    value={formData.lastName}
                                    onChangeText={(value) => handleInputChange('lastName', value)}
                                    placeholder="Last Name"
                                    placeholderTextColor="#A0A0A0"
                                />
                            </View>

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

                            <TouchableOpacity
                                className="rounded-full py-3.5 items-center mb-6 bg-blue-600/90"
                                onPress={handleNextStep}
                                disabled={!formData.firstName || !formData.lastName}
                            >
                                <Text className="text-white font-semibold text-base">Continue</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Register;
