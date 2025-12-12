import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@components/Screen';
import { FeatureList } from '@components/FeatureList';
import { typography } from '@theme/typography';
import { spacing } from '@theme/spacing';
import { colors } from '@theme/colors';

export function MessagesScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={typography.title}>Messages</Text>
        <Text style={typography.subtitle}>
          Keep conversations, location safety, and payments together with friends and trusted businesses.
        </Text>
      </View>
      <View style={styles.card}>
        <FeatureList
          title="Suggested threads"
          items={['Friends nearby', 'Venue concierge', 'Payment receipts', 'Group ride planning']}
        />
      </View>
      <View style={styles.card}>
        <Text style={typography.subtitle}>Safety reminders</Text>
        <Text style={typography.body}>
          Messages keep an audit trail for check-ins, payments, and shared locations so your network stays informed.
        </Text>
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
