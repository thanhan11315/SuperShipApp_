import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Colors';
import InputNumberGram from './InputNumberGram';
const FlexibleInputRowGram = ({
  value,
  setValue,
  label1,
  label2,
  showInput,
  showIcon,
  label3,
  label4,
  onSubmit,
}) => {
  const [errorText, setErrorText] = useState(false);
  const isMounted = useRef(false);

  const handBlur = () => {
    if (value === '') {
      setErrorText(true);
    }
  };

  useEffect(() => {
    if (value !== '') {
      setErrorText(false);
    }
  }, [value]);

  useEffect(() => {
    if (isMounted.current) {
      if (showInput) {
        handBlur();
      }
    } else {
      isMounted.current = true;
    }
  }, [onSubmit]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          {label1 && <Text style={styles.labelText}>{label1}</Text>}
          {label2 && <Text style={styles.labelItalic}>{label2}</Text>}
        </View>
        {showInput && (
          <View style={styles.inputContainer}>
            <InputNumberGram
              fontSize={16}
              label1={label1}
              value={value}
              setValue={setValue}
              onBlur={() => handBlur()}
            />
          </View>
        )}
        <View>
          <View style={{alignItems: 'flex-end'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {showIcon && (
                <View style={styles.iconContainer}>
                  <View style={styles.iconWrapper}>
                    <Icon name="check" size={14} color="white" />
                  </View>
                </View>
              )}
              {label3 && <Text style={styles.labelText}>{label3}</Text>}
            </View>
            {label4 && <Text style={styles.labelBold}>{label4}</Text>}
          </View>
        </View>
      </View>
      {errorText && (
        <Text style={styles.errorText}>{`Vui lòng nhập ${label1}`}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {
    color: colors.colorLightgray,
    fontSize: 14,
  },
  labelItalic: {
    color: colors.brand,
    fontSize: 14,
    fontStyle: 'italic',
  },
  inputContainer: {
    height: 40,
    paddingHorizontal: 10,
    flex: 1,
  },
  iconContainer: {
    marginRight: 10,
  },
  iconWrapper: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelBold: {
    color: colors.brand,
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorText: {
    paddingLeft: 8,
    color: 'red',
    fontSize: 14,
  },
});

export default FlexibleInputRowGram;
