import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '@components/Screen';
import { PrimaryButton } from '@components/PrimaryButton';
import { FeatureList } from '@components/FeatureList';
import { typography } from '@theme/typography';
import { spacing } from '@theme/spacing';
import { colors } from '@theme/colors';
import { AuthStackParamList } from '@navigation/RootNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

export function SignUpScreen({ navigation }: Props) {
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={typography.title}>Create your Reel.me account</Text>
        <Text style={typography.subtitle}>
          Stay connected with friends, auto check-in at trusted spots, and move money with crypto-powered safety.
        </Text>
      </View>
      <TextInput placeholder="Full name" placeholderTextColor={colors.muted} style={styles.input} />
      <TextInput placeholder="Email" placeholderTextColor={colors.muted} style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor={colors.muted} style={styles.input} secureTextEntry />
      <PrimaryButton label="Create account" onPress={() => navigation.replace('SignIn')} />
      <View style={styles.featureList}>
        <FeatureList
          title="What you can do"
          items={[
            'Discover and auto check-in to safe establishments',
            'Send or request money with transparent fees',
            'Message friends and split tabs instantly',
            'Manage connections and social trust badges',
          ]}
        />
      </View>
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
  featureList: {
    marginTop: spacing.lg,
    gap: spacing.sm,
  },
});
