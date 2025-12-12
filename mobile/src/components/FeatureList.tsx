import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';
import { typography } from '@theme/typography';

interface FeatureListProps {
  title: string;
  items: string[];
}

export function FeatureList({ title, items }: FeatureListProps) {
  return (
    <View style={styles.container}>
      <Text style={typography.title}>{title}</Text>
      {items.map((item) => (
        <View key={item} style={styles.item}>
          <View style={styles.bullet} />
          <Text style={typography.body}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  item: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: colors.secondary,
  },
});
