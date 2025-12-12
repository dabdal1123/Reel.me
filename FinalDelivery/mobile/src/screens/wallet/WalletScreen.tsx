import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@components/Screen';
import { PrimaryButton } from '@components/PrimaryButton';
import { FeatureList } from '@components/FeatureList';
import { typography } from '@theme/typography';
import { spacing } from '@theme/spacing';
import { colors } from '@theme/colors';

export function WalletScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={typography.title}>Wallet</Text>
        <Text style={typography.subtitle}>Move cash or crypto with transparent fees and social trust signals.</Text>
      </View>
      <View style={styles.balanceCard}>
        <Text style={typography.subtitle}>Available balance</Text>
        <Text style={typography.title}>$0.00</Text>
        <View style={styles.actions}>
          <PrimaryButton label="Add funds" />
          <PrimaryButton label="Send" />
          <PrimaryButton label="Request" />
        </View>
      </View>
      <View style={styles.section}>
        <FeatureList
          title="Payment shortcuts"
          items={[
            'Send an amount flow for friends nearby',
            'Settle bills after a check-in',
            'Route to lowest-fee network automatically',
          ]}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  balanceCard: {
    marginTop: spacing.lg,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 16,
    gap: spacing.sm,
    borderColor: colors.border,
    borderWidth: 1,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  section: {
    marginTop: spacing.lg,
  },
});
