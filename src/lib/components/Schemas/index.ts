

export interface IMainHeader {
  size?: any;
  text: string;
  align?: any;
  color?: any;
  w?: any;
  fw?: any;
  lh?: any
  ls?: any
}
export interface IContentDisplay {
  rtl?: boolean;
  text: string;
  img?: any;
  sub: string;
  btn?: any;
  onClick?: any;
  gap?: any;
  social?: boolean;
  w?: any;
}


export interface IPrimaryInput {
  label?: string;
  placeholder?: string;
  h?: any;
  count?: any;
  error?: any;
  name?: any;
  type?: any;
  onChange?: any;
}

export interface IReceiptProps{
  title: string;
  sub: any;
}

export interface IPageProps{
  searchParams: any
}
export interface UserProfile{
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
export interface IBlankInput{
  placeholder?: string;
  fontSize?: string;
  label?: string;
  border?: string;
  h?: string;
  w?: string;
  defaultValue?: any;
  readonly?: boolean;
  borderColor?: string;
  type?: string;
  disableLabel?: boolean

}