import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import icons from '../../../constants/icons';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {validateEmail} from '../../utils/validateEmail';
import {userLoginAPI} from '../../redux/users/userSlice';
import {useDispatch} from 'react-redux';

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      return () => {
        setEmail('');
        setPassword('');
        setErrors({});
        setIsShowPassword(false);
      };
    }, []),
  );

  const clearFieldError = field => {
    setErrors(prev => {
      const newErrors = {...prev};
      delete newErrors[field];
      return newErrors;
    });
  };

  const setFieldError = (field, message) => {
    setErrors(prev => ({
      ...prev,
      [field]: {...prev[field], message},
    }));
  };
  const navigation = useNavigation();

  const handleValidate = () => {
    let isValid = true;
    if (!email) {
      setFieldError('email', 'Email is required');
      isValid = false;
    }
    // if (email && validateEmail(email) === false) {
    //   setFieldError('email', 'Email is not valid');
    //   isValid = false;
    // }
    if (!password) {
      setFieldError('password', 'Password is required');
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async () => {
    // if (!handleValidate()) {
    //   return;
    // }
    const data = {
      username: 'Admin',
      password: 'MatKhauMoi',
      idKho: 0,
      idKhu: 0,
      idVt: 0,
    };
    try {
      await dispatch(userLoginAPI(data));
    } catch (error) {
      console.log('Login error: ', error?.response?.data || error.message);
    }
  };

  return (
    <SafeAreaView className="px-6 flex-1">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text className="text-3xl font-bold mt-20 mb-6">Login</Text>
        <Text className="text-lg text-gray-700 mb-10">
          Welcome back to the app
        </Text>
        <Text className="mb-1 text-lg">Email</Text>
        <TextInput
          className="border border-gray-500 h-14 rounded-xl text-black px-3 "
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
        <View className="flex flex-row justify-between mb-1 mt-6">
          <Text className="text-lg">Password</Text>
          <TouchableOpacity>
            <Text className="text-blue-600">Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View className="relative">
          <TextInput
            className="border border-gray-500 h-14 rounded-xl text-black px-3 "
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
          {errors.password?.message && (
            <Text className="text-red-600">{errors.password.message}</Text>
          )}
          {isShowPassword ? (
            <TouchableOpacity
              onPress={() => setIsShowPassword(false)}
              className="absolute top-4 right-3">
              <Image source={icons.eyeOpen} className="w-6 h-6" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setIsShowPassword(true)}
              className="absolute top-4 right-3">
              <Image source={icons.eyeOff} className="w-6 h-6" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          className="mt-6 bg-blue-600 h-14 rounded-[30px] flex items-center justify-center">
          <Text className="text-white text-lg">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          className="mt-6 mx-auto">
          <Text className="text-lg font-bold text-blue-600">
            Create an account?
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
