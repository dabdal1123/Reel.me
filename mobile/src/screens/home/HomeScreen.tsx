import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@components/Screen';
import { PrimaryButton } from '@components/PrimaryButton';
import { FeatureList } from '@components/FeatureList';
import { typography } from '@theme/typography';
import { spacing } from '@theme/spacing';
import { colors } from '@theme/colors';
import { useNavigation } from '@react-navigation/native';

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Screen>
      <View style={styles.hero}>
        <Text style={typography.title}>You are checked-in</Text>
        <Text style={typography.subtitle}>Auto check-ins keep your friends updated and unlock location perks.</Text>
        <PrimaryButton label="View Check-in" onPress={() => navigation.navigate('CheckIn' as never)} />
      </View>
      <View style={styles.section}>
        <FeatureList
          title="Quick actions"
          items={['Share status with friends', 'Split a bill', 'Request a ride home', 'Invite contacts to join']}
        />
      </View>
      <View style={styles.card}>
        <Text style={typography.subtitle}>Safe spots nearby</Text>
        <Text style={typography.body}>
          Explore establishments vetted by your network. Enable auto check-in to keep rewards and safety tools active.
        </Text>
        <PrimaryButton label="Explore map" onPress={() => navigation.navigate('Explore' as never)} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  section: {
    marginTop: spacing.lg,
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
