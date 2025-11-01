import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {
  Button,
  Input,
  CheckboxGroup,
  RadioGroup,
  SegmentedControl,
  KeypadNumeric,
  Card,
  SectionHeader,
  Tabs,
} from '../components/ui';
import { theme, spacing } from '../theme';

export const StyleguideScreen: React.FC = () => {
  // State for interactive components
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
  const [radioValue, setRadioValue] = useState<string | null>(null);
  const [painLevel, setPainLevel] = useState<string | number | null>(null);
  const [keypadValue, setKeypadValue] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const checkboxOptions = [
    { value: 'option1', label: 'Headache', description: 'Pain in the head' },
    { value: 'option2', label: 'Fever', description: 'Elevated temperature' },
    { value: 'option3', label: 'Cough', description: 'Persistent coughing' },
  ];

  const radioOptions = [
    { value: 'mild', label: 'Mild', description: 'Minor discomfort' },
    { value: 'moderate', label: 'Moderate', description: 'Notable discomfort' },
    { value: 'severe', label: 'Severe', description: 'Significant discomfort' },
  ];

  const painScaleOptions = Array.from({ length: 11 }, (_, i) => ({
    value: i,
    label: i.toString(),
  }));

  const tabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'vitals', label: 'Vitals' },
    { key: 'history', label: 'History' },
    { key: 'notes', label: 'Notes' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <SectionHeader
          title="Design System Styleguide"
          subtitle="La Tortuga EMR Component Library"
        />

        {/* Buttons Section */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Buttons</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Primary - Medium</Text>
            <Button onPress={() => {}} size="md" variant="primary">
              Primary Button
            </Button>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Primary - Large</Text>
            <Button onPress={() => {}} size="lg" variant="primary">
              Large Button
            </Button>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Ghost</Text>
            <Button onPress={() => {}} variant="ghost">
              Ghost Button
            </Button>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Danger</Text>
            <Button onPress={() => {}} variant="danger">
              Danger Button
            </Button>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Disabled</Text>
            <Button onPress={() => {}} disabled>
              Disabled Button
            </Button>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Loading</Text>
            <Button onPress={() => {}} loading>
              Loading
            </Button>
          </View>
        </Card>

        {/* Input Section */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Input Fields</Text>

          <View style={styles.row}>
            <Input
              label="Default Input"
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Enter text here"
              helperText="This is helper text"
              showClearButton
            />
          </View>

          <View style={styles.row}>
            <Input
              label="Numeric Input"
              value={inputValue}
              onChangeText={setInputValue}
              keyboardType="numeric"
              placeholder="0"
            />
          </View>

          <View style={styles.row}>
            <Input
              label="Input with Error"
              value=""
              onChangeText={() => {}}
              errorText="This field is required"
            />
          </View>

          <View style={styles.row}>
            <Input
              label="Disabled Input"
              value="Cannot edit"
              onChangeText={() => {}}
              disabled
            />
          </View>

          <View style={styles.row}>
            <Input
              label="Multiline Input"
              value={inputValue}
              onChangeText={setInputValue}
              multiline
              numberOfLines={3}
              placeholder="Enter multiple lines..."
            />
          </View>
        </Card>

        {/* Checkbox Group Section */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Checkbox Group</Text>

          <View style={styles.row}>
            <CheckboxGroup
              label="Select Symptoms (Multiple)"
              options={checkboxOptions}
              selectedValues={checkboxValues}
              onChange={setCheckboxValues}
            />
          </View>

          <Text style={styles.resultText}>
            Selected: {checkboxValues.join(', ') || 'None'}
          </Text>
        </Card>

        {/* Radio Group Section */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Radio Group</Text>

          <View style={styles.row}>
            <RadioGroup
              label="Severity Level (Single)"
              options={radioOptions}
              selectedValue={radioValue}
              onChange={setRadioValue}
            />
          </View>

          <Text style={styles.resultText}>
            Selected: {radioValue || 'None'}
          </Text>
        </Card>

        {/* Segmented Control Section */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Segmented Control (Pain Scale 0-10)</Text>

          <View style={styles.row}>
            <SegmentedControl
              label="Pain Level"
              options={painScaleOptions}
              selectedValue={painLevel}
              onChange={setPainLevel}
            />
          </View>

          <Text style={styles.resultText}>
            Selected Pain Level: {painLevel !== null ? painLevel : 'Not selected'}
          </Text>
        </Card>

        {/* Keypad Numeric Section */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Numeric Keypad</Text>

          <View style={styles.row}>
            <KeypadNumeric
              label="Enter Temperature (°C)"
              onChange={setKeypadValue}
              onSubmit={() => alert(`Submitted: ${keypadValue}`)}
              allowDecimal
              maxLength={5}
            />
          </View>

          <Text style={styles.resultText}>
            Current Value: {keypadValue || '0'}
          </Text>
        </Card>

        {/* Tabs Section */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Tabs Navigation</Text>

          <View style={styles.row}>
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
          </View>

          <Text style={styles.resultText}>
            Active Tab: {activeTab}
          </Text>
        </Card>

        {/* Cards & Headers Section */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Cards & Section Headers</Text>

          <View style={styles.row}>
            <Card elevation="sm">
              <SectionHeader
                title="Small Elevation Card"
                subtitle="This card has small shadow"
              />
              <Text style={styles.cardContent}>
                Content inside a card with small elevation
              </Text>
            </Card>
          </View>

          <View style={styles.row}>
            <Card elevation="md">
              <SectionHeader
                title="Medium Elevation Card"
                subtitle="Default shadow level"
              />
              <Text style={styles.cardContent}>
                Content inside a card with medium elevation
              </Text>
            </Card>
          </View>

          <View style={styles.row}>
            <Card elevation="lg">
              <SectionHeader
                title="Large Elevation Card"
                subtitle="Most prominent shadow"
              />
              <Text style={styles.cardContent}>
                Content inside a card with large elevation
              </Text>
            </Card>
          </View>
        </Card>

        {/* Color Palette */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Color Palette</Text>

          <View style={styles.colorGrid}>
            <View style={styles.colorItem}>
              <View style={[styles.colorSwatch, { backgroundColor: theme.colors.primary }]} />
              <Text style={styles.colorLabel}>Primary</Text>
            </View>
            <View style={styles.colorItem}>
              <View style={[styles.colorSwatch, { backgroundColor: theme.colors.primaryDark }]} />
              <Text style={styles.colorLabel}>Primary Dark</Text>
            </View>
            <View style={styles.colorItem}>
              <View style={[styles.colorSwatch, { backgroundColor: theme.colors.success }]} />
              <Text style={styles.colorLabel}>Success</Text>
            </View>
            <View style={styles.colorItem}>
              <View style={[styles.colorSwatch, { backgroundColor: theme.colors.warning }]} />
              <Text style={styles.colorLabel}>Warning</Text>
            </View>
            <View style={styles.colorItem}>
              <View style={[styles.colorSwatch, { backgroundColor: theme.colors.error }]} />
              <Text style={styles.colorLabel}>Error</Text>
            </View>
            <View style={styles.colorItem}>
              <View style={[styles.colorSwatch, { backgroundColor: theme.colors.text }]} />
              <Text style={styles.colorLabel}>Text</Text>
            </View>
          </View>
        </Card>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            ✓ All components use design tokens
          </Text>
          <Text style={styles.footerText}>
            ✓ 48px minimum touch targets with hitSlop
          </Text>
          <Text style={styles.footerText}>
            ✓ WCAG AA contrast ratios (≥4.5:1)
          </Text>
          <Text style={styles.footerText}>
            ✓ VoiceOver/TalkBack accessibility labels
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: spacing(4),
  },
  section: {
    marginBottom: spacing(4),
  },
  sectionTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: spacing(4),
  },
  row: {
    marginBottom: spacing(4),
  },
  label: {
    fontSize: theme.fontSizes.sm,
    fontWeight: '600',
    color: theme.colors.subtleText,
    marginBottom: spacing(2),
  },
  resultText: {
    fontSize: theme.fontSizes.base,
    color: theme.colors.subtleText,
    marginTop: spacing(2),
    fontStyle: 'italic',
  },
  cardContent: {
    fontSize: theme.fontSizes.base,
    color: theme.colors.text,
    marginTop: spacing(2),
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing(3),
  },
  colorItem: {
    alignItems: 'center',
    width: 80,
  },
  colorSwatch: {
    width: 60,
    height: 60,
    borderRadius: theme.radii.md,
    marginBottom: spacing(2),
    borderWidth: 1,
    borderColor: theme.colors.divider,
  },
  colorLabel: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.text,
    textAlign: 'center',
  },
  footer: {
    marginTop: spacing(4),
    padding: spacing(4),
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radii.md,
    borderWidth: 1,
    borderColor: theme.colors.success,
  },
  footerText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.success,
    marginBottom: spacing(1),
  },
});
