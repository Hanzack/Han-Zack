import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text, useTheme, Card } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LottieView from 'lottie-react-native';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(4, 'Min 4 chars').required('Password is required'),
});

const LoginForm = () => {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log('Logging in with:', data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../assets/paper-plane.json')} // Make sure you have this Lottie file
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
      </View>

      <Card style={styles.card}>
        <Card.Title title="Welcome Back!" />
        <Card.Content>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Email"
                mode="outlined"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                error={!!errors.email}
                style={styles.input}
              />
            )}
          />
          {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Password"
                mode="outlined"
                secureTextEntry
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                error={!!errors.password}
                style={styles.input}
              />
            )}
          />
          {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

          <Button
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            style={styles.button}
            labelStyle={{ color: 'white' }}
          >
            Login
          </Button>
        </Card.Content>
      </Card>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
    justifyContent: 'center',
    padding: 16,
  },
  animationContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#ffffffcc',
    elevation: 6,
  },
  input: {
    marginBottom: 12,
    backgroundColor: '#fff5f7',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#FF69B4', // Hot pink
  },
  error: {
    color: '#d32f2f',
    fontSize: 12,
    marginBottom: 6,
  },
});

export default LoginForm;
