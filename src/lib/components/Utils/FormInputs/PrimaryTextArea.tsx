import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { FieldError, UseFormRegister, Path } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

interface FormInputProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  placeholder?: string;
  fontSize?: string;
  label?: string;
  register: UseFormRegister<TFormValues>;
  error?: FieldError | undefined;
  type?: string;
  required?: boolean;
  disableLabel?: boolean;
  validate?: any;
  icon?: boolean;
  variant?: string;
  borderColor?: string;
  borderRadius?: string;
  placeholderColor?: string;
  defaultValue?: any;
  format?: string;
  value?: string | number | undefined;
  testId?: string;
  w?: string;
  padding?: string;
  onChange?: any;
  iconClass?: string | undefined;
  changePasswordType?: any;
  border?: string;
  passwordVisible?: boolean;
  h?: string;
  readonly?: boolean;
}
export const PrimaryTextArea = <TFormValues extends Record<string, any>>({
  name,
  required = false,
  type = 'text',
  label = '',
  register,
  validate = {},
  error,
  disableLabel = false,
  placeholder = '',
  fontSize = '.8rem',
  passwordVisible,
  defaultValue,
  changePasswordType,
  border,
  borderColor = 'gray.300',
  icon,
  h = '2.6rem',
  w = 'full',
  readonly = false,
  padding,
}: FormInputProps<TFormValues>) => {
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
      <Textarea
        placeholder={placeholder}
        {...register(name, { required, ...validate })}
        defaultValue={defaultValue}
        isDisabled={disableLabel}
        padding={padding}
        size="sm"
        minH={h}
        resize="none"
        fontSize={fontSize}
        focusBorderColor="none"
        _focusVisible={{
          borderColor: 'gray.300',
          boxShadow: 'none',
        }}
        w={w}
        // bgColor="rgba(25,25,25,.03)"
        // borderColor="transparent"
        borderRadius="5px"
        // boxShadow="0px 0px 9px rgba(0, 127, 130, 0.37)"
      />
      <FormErrorMessage fontSize=".7rem" color="red">
        {(error?.type === 'required' && `${label} is required`) ||
          error?.message}
      </FormErrorMessage>
    </FormControl>
  );
};
