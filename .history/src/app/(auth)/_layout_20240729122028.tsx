import {  Redirect, Stack } from 'expo-router';
import { useAuth } from '@/src/provider/AuthProvider';

export default function AuthLayout() {
  const {session}= useAuth();

  if (session){
    return <Redirect href="/" />;
  }
  return <Stack />;
};