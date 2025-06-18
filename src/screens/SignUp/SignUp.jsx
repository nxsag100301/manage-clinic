import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import icons from '../../../constants/icons';
import {useNavigation} from '@react-navigation/native';
import {validateEmail} from '../../utils/validateEmail';

const SignUp = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();

  const setFieldError = (field, message) => {
    setErrors(prev => ({
      ...prev,
      [field]: {message},
    }));
  };

  const clearFieldError = field => {
    setErrors(prev => {
      const newErrors = {...prev};
      delete newErrors[field];
      return newErrors;
    });
  };

  const handleSubmit = () => {
    let isValid = true;
    setErrors({});

    if (!name.trim()) {
      setFieldError('name', 'Name is required');
      isValid = false;
    }

    if (!email.trim()) {
      setFieldError('email', 'Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setFieldError('email', 'Email is not valid');
      isValid = false;
    }

    if (!password) {
      setFieldError('password', 'Password is required');
      isValid = false;
    }

    if (!confirmPassword) {
      setFieldError('confirmPassword', 'Please confirm your password');
      isValid = false;
    } else if (password && confirmPassword !== password) {
      setFieldError('confirmPassword', 'Passwords do not match');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    console.log('Sign Up Info:', {name, email, password});
  };

  useEffect(() => {
    return () => {
      setErrors({});
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
        <ScrollView
          contentContainerClassName="px-6 pb-10"
          keyboardShouldPersistTaps="handled">
          <Text className="text-3xl font-bold mt-20 mb-6">Sign Up</Text>
          <Text className="text-lg text-gray-700 mb-8">Create an account</Text>

          {/* Name */}
          <Text className="mb-1 text-lg">Name</Text>
          <TextInput
            className="border border-gray-500 h-14 rounded-xl text-black px-3"
            placeholder="Your name"
            placeholderTextColor="#6B7280"
            value={name}
            onChangeText={text => {
              setName(text);
              if (errors.name) {
                clearFieldError('name');
              }
            }}
          />
          {errors.name?.message && (
            <Text className="text-red-600">{errors.name.message}</Text>
          )}

          {/* Email */}
          <Text className="mb-1 mt-4 text-lg">Email</Text>
          <TextInput
            className="border border-gray-500 h-14 rounded-xl text-black px-3"
            placeholder="Example@gmail.com"
            placeholderTextColor="#6B7280"
            value={email}
            onChangeText={text => {
              setEmail(text);
              if (errors.email) {
                clearFieldError('email');
              }
            }}
          />
          {errors.email?.message && (
            <Text className="text-red-600">{errors.email.message}</Text>
          )}

          {/* Password */}
          <Text className="mt-4 text-lg">Password</Text>
          <View className="relative">
            <TextInput
              className="border border-gray-500 h-14 rounded-xl text-black px-3"
              placeholder="Your password"
              placeholderTextColor="#6B7280"
              secureTextEntry={!isShowPassword}
              value={password}
              onChangeText={text => {
                setPassword(text);
                if (errors.password) {
                  clearFieldError('password');
                }
              }}
            />
            <TouchableOpacity
              onPress={() => setIsShowPassword(prev => !prev)}
              className="absolute top-4 right-3">
              <Image
                source={isShowPassword ? icons.eyeOpen : icons.eyeOff}
                className="w-6 h-6"
              />
            </TouchableOpacity>
          </View>
          {errors.password?.message && (
            <Text className="text-red-600">{errors.password.message}</Text>
          )}

          {/* Confirm Password */}
          <Text className="mt-4 text-lg">Confirm Password</Text>
          <View className="relative">
            <TextInput
              className="border border-gray-500 h-14 rounded-xl text-black px-3"
              placeholder="Your confirm password"
              placeholderTextColor="#6B7280"
              secureTextEntry={!isShowConfirmPassword}
              value={confirmPassword}
              onChangeText={text => {
                setConfirmPassword(text);
                if (errors.confirmPassword) {
                  clearFieldError('confirmPassword');
                }
              }}
            />
            <TouchableOpacity
              onPress={() => setIsShowConfirmPassword(prev => !prev)}
              className="absolute top-4 right-3">
              <Image
                source={isShowConfirmPassword ? icons.eyeOpen : icons.eyeOff}
                className="w-6 h-6"
              />
            </TouchableOpacity>
          </View>
          {errors.confirmPassword?.message && (
            <Text className="text-red-600">
              {errors.confirmPassword.message}
            </Text>
          )}

          {/* Submit */}
          <TouchableOpacity
            onPress={handleSubmit}
            className="mt-6 bg-blue-600 h-14 rounded-[30px] flex items-center justify-center">
            <Text className="text-white text-lg">Sign Up</Text>
          </TouchableOpacity>

          {/* Go to Login */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="mt-6 mx-auto">
            <Text className="text-lg font-bold text-blue-600">
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
