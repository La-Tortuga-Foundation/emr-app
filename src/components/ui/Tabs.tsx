import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  AccessibilityProps,
} from 'react-native';
import { theme, spacing } from '../../theme';

export interface Tab {
  key: string;
  label: string;
}

export interface TabsProps extends AccessibilityProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabKey: string) => void;
  testID?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  testID,
  accessibilityLabel,
  ...accessibilityProps
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      testID={testID}
      accessible={true}
      accessibilityRole="tablist"
      accessibilityLabel={accessibilityLabel || 'Section tabs'}
      {...accessibilityProps}
    >
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.key;
        const isFirst = index === 0;
        const isLast = index === tabs.length - 1;

        return (
          <TouchableOpacity
            key={tab.key}
            onPress={() => onChange(tab.key)}
            style={[
              styles.tab,
              isActive && styles.tabActive,
              isFirst && styles.tabFirst,
              isLast && styles.tabLast,
            ]}
            activeOpacity={0.7}
            hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
            accessible={true}
            accessibilityRole="tab"
            accessibilityLabel={tab.label}
            accessibilityState={{ selected: isActive }}
          >
            <Text
              style={[
                styles.tabText,
                isActive && styles.tabTextActive,
              ]}
            >
              {tab.label}
            </Text>
            {isActive && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.divider,
    gap: spacing(1),
  },
  tab: {
    paddingHorizontal: spacing(5),
    paddingVertical: spacing(4),
    minHeight: 48,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabFirst: {
    paddingLeft: spacing(6),
  },
  tabLast: {
    paddingRight: spacing(6),
  },
  tabActive: {
    // Active state managed by indicator
  },
  tabText: {
    fontSize: theme.fontSizes.base,
    fontWeight: '500',
    color: theme.colors.subtleText,
  },
  tabTextActive: {
    color: theme.colors.primary,
    fontWeight: '700',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: theme.colors.primary,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
});
