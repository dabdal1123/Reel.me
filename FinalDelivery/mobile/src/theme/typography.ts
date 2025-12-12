import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const typography = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
  },
  body: {
    color: colors.text,
    fontSize: 16,
  },
  button: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
});
