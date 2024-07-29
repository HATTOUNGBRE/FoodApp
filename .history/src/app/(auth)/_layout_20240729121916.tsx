import {  Stack } from 'expo-router';
import { useAuth } from '@/src/provider/AuthProvider';

export default function AuthLayout() {
  const {session}= useAuth();
  return <Stack />;
};