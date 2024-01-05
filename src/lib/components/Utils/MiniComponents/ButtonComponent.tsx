import { Button } from '@chakra-ui/react';

interface Props {
  content: string;
  isValid?: boolean;
  loading?: boolean;
  onClick?: any;
  bg?: any;
  color?: any;
  w?: any;
  type?: any;
  variant?: any;
  h?: any;
  isDisabled?: any;
}

const ButtonComponent = ({
  content,
  isValid,
  loading,
  onClick,
  variant = 'solid',
  bg = 'brand.100',
  color = 'white',
  w = ['fit-content', 'full'],
  type = 'button',
  h = '3.2rem',
  isDisabled,
}: Props) => {
  return (
    <Button
      type={type}
      w={w}
      h={h}
      variant={variant}
      textTransform="capitalize"
      isDisabled={isDisabled}
      isLoading={loading}
      bgColor={bg}
      color={color}
      border="1px solid"
      borderColor={bg}
      borderRadius="0px"
      onClick={onClick}
      _hover={{
        bgColor: 'transparent',
        color: bg,
      }}
    >
      {content}
    </Button>
  );
};

export default ButtonComponent;
