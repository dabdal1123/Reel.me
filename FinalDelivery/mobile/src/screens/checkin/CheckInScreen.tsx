import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@components/Screen';
import { PrimaryButton } from '@components/PrimaryButton';
import { typography } from '@theme/typography';
import { spacing } from '@theme/spacing';
import { colors } from '@theme/colors';

export function CheckInScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={typography.title}>Auto check-in</Text>
        <Text style={typography.subtitle}>
          You are checked in at a trusted establishment. Friends who you share with can see your status.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={typography.subtitle}>Status</Text>
        <Text style={typography.body}>Active · Location verified · Safety toolkit on</Text>
        <PrimaryButton label="Share with connections" />
      </View>
      <View style={styles.card}>
        <Text style={typography.subtitle}>While you are here</Text>
        <Text style={typography.body}>Split bills, pay securely, or message venue staff without leaving the map.</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  card: {
    marginTop: spacing.lg,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 16,
    gap: spacing.sm,
    borderColor: colors.border,
    borderWidth: 1,
  },
});
