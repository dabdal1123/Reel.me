import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '@components/Screen';
import { PrimaryButton } from '@components/PrimaryButton';
import { typography } from '@theme/typography';
import { spacing } from '@theme/spacing';
import { colors } from '@theme/colors';
import { AuthStackParamList } from '@navigation/RootNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

export function SignInScreen({ navigation }: Props) {
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={typography.title}>Welcome back</Text>
        <Text style={typography.subtitle}>Sign in to check-in, pay friends, and explore nearby spots.</Text>
      </View>
      <TextInput placeholder="Email" placeholderTextColor={colors.muted} style={styles.input} />
      <TextInput
        placeholder="Password"
        placeholderTextColor={colors.muted}
        secureTextEntry
        style={styles.input}
      />
      <PrimaryButton label="Sign In" onPress={() => navigation.replace('SignUp')} />
      <PrimaryButton label="Create account" onPress={() => navigation.navigate('SignUp')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing.sm,
    marginBottom: spacing.lg,
    marginTop: spacing.xl,
  },
  input: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.sm,
    color: colors.text,
    borderColor: colors.border,
    borderWidth: 1,
  },
});
