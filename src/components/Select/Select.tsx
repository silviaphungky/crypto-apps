import { IconArrowDown } from 'components/icons'
import React, { useRef, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'

interface SelectProps {
  options: { label: string; value: string | number }[]
  onSelect: (selectedOption: { label: string; value: string | number }) => void
  selectedOption: { label: string; value: string | number } | null
}

const Select: React.FC<SelectProps> = ({
  selectedOption,
  options,
  onSelect,
}) => {
  const [showPicker, setShowPicker] = useState(false)

  const handleTogglePicker = () => {
    setShowPicker(!showPicker)
  }

  const handleSelectOption = (option: {
    label: string
    value: string | number
  }) => {
    onSelect(option)
    setShowPicker(false)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleTogglePicker}
        style={styles.selectContainer}
      >
        <Text style={styles.selectButtonText}>
          {selectedOption?.label || 'Default'}
        </Text>
        <IconArrowDown />
      </TouchableOpacity>

      <Modal visible={showPicker} transparent animationType="slide">
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setShowPicker(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.pickerContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={styles.optionButton}
                  onPress={() => handleSelectOption(option)}
                >
                  <Text style={styles.optionText}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  selectContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectButtonText: {
    fontSize: 13,
    fontWeight: '600',
    marginHorizontal: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 10,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 14,
  },
})

export default Select
