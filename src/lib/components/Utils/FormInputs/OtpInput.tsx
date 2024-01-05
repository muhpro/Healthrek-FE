import React from 'react';
import {
  PinInput,
  PinInputField,
  HStack,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FieldError, UseFormRegister, Path, Controller } from 'react-hook-form';

interface FormInputProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  otpCount?: number;
  error?: FieldError | undefined;
  requestError?: any;
  control: any;
}

export const OtpInput = <TFormValues extends Record<string, any>>({
  otpCount,
  error,
  name,
  requestError,
  control,
}: FormInputProps<TFormValues>) => {
  return (
    <FormControl isInvalid={!!(error?.type === 'required' || error?.message)}>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }} //optional
        render={({ field: { onChange, value } }) => (
          <HStack justify="center" gap="1rem">
            <PinInput
              onChange={(value: any) => {
                onChange(value);
              }}
            >
              {[...Array(otpCount)].map((_, index) => (
                <PinInputField key={index} w="4rem" h="4rem" />
              ))}
            </PinInput>
          </HStack>
        )}
      />
      <FormErrorMessage fontSize=".7rem" color="red" justifyContent="center">
        {(error?.type === 'required' && `${name} is required`) ||
          error?.message ||
          requestError}
      </FormErrorMessage>
    </FormControl>
  );
};
