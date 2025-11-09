import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const labelStyle = isFocused || value
    ? "text-gray-500 text-sm -mb-2" // label au-dessus
    : "text-gray-400 text-base";   // placeholder normal

  return (
    <View className="relative mb-6">
      <Text className={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        className="border-b border-gray-300 pb-2 text-base"
        placeholder={isFocused ? '' : placeholder}
        placeholderTextColor="#A0A0A0"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default FloatingLabelInput;
