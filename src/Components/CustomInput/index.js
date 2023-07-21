import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Constants} from '../../Assets/Constants';

const colors = Constants.colors;

const CustomInput = ({
  placeholder,
  placeholderText,
  keyboardType,
  secureTextEntry,
  autoCapitalize,
  onChangeText,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.inputGroupParent}>
      <Text style={styles.placeholderText}>{placeholder}</Text>
      <View style={styles.inputContainerView}>
        <TextInput
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholder={placeholderText}
          style={[
            styles.textInputContainer,
            isFocused && styles.textInputContainerFocused,
          ]}
          autoCapitalize={autoCapitalize}
          placeholderTextColor={colors.defaultPlaceholderGray}
          selectionColor={colors.defaultOrange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default CustomInput;
