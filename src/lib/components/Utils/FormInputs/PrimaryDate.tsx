import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  Text,
} from '@chakra-ui/react';
import { useRef, useCallback } from 'react';
import { Controller, Path, FieldError, Control } from 'react-hook-form';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import useWindowSize from '../CustomHooks/usewindowSize';
import useOnClickOutside from '../CustomHooks/useClickOutside';

interface FormInputProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  required?: boolean;
  label?: string;
  error?: FieldError | undefined;
  control: Control<TFormValues>;
  fontSize?: string;
  placeholder?: string;
  min?: any;
  max?: any;
  disabled?: boolean;
  defaultValue?: any;
  disableWeekend?: boolean;
}

interface Size {
  width: number | undefined;
  height: number | undefined;
}

export const PrimaryDate = <TFormValues extends Record<string, any>>({
  name,
  label = '',
  error,
  control,
  fontSize = '.8rem',
  placeholder,
  min,
  max,
  disabled,
  defaultValue,
  disableWeekend,
}: FormInputProps<TFormValues>) => {
  //
  const size: Size = useWindowSize();
  const isMobile = size.width != null && size.width <= 750;
  const dateRef = useRef<any>();
  const handleDatePickerClose = useCallback(
    () => dateRef.current.closeCalendar(),
    [dateRef]
  );
  useOnClickOutside(dateRef, handleDatePickerClose);

  return (
    <FormControl
      isInvalid={error?.type === 'required' || error?.message !== undefined}
    >
      <FormLabel
        htmlFor={label}
        textTransform="capitalize"
        pos="relative"
        top={4}
        left={4}
        width="fit-content"
        zIndex={3}
        bg="white"
        fontSize={fontSize}
      >
        {label}
      </FormLabel>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }} //optional
        render={({ field: { onChange, value } }) => (
          <>
            <DatePicker
              value={defaultValue || value}
              ref={dateRef}
              onChange={(date: any) => {
                onChange(JSON.stringify(date?.toDate?.())?.replaceAll('"', ''));
              }}
              format={'DD/MM/YYYY'}
              inputClass={error?.type === 'required' ? 'dateError' : 'date'}
              containerClassName="dateWrapper"
              hideOnScroll={isMobile ? false : true}
              placeholder={placeholder || 'Please select'}
              minDate={min}
              maxDate={max}
              disabled={disabled}
              mapDays={({ date }) => {
                const isWeekend = [0, 6].includes(date.weekDay.index);

                if (disableWeekend && isWeekend)
                  return {
                    disabled: true,
                    style: { color: '#ccc' },
                  };
              }}
            />
          </>
        )}
      />
      <FormErrorMessage fontSize=".7rem" color="red">
        {(error?.type === 'required' && `${label} is required`) ||
          error?.message}
      </FormErrorMessage>
    </FormControl>
  );
};
