import { IconProps } from '@/lib/types/component-props/icon.props';

export type DataInputWrapperPropsType = {
  label?: string | React.ReactNode;
  icon?: IconProps['icon'];
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  elementId?: string;
};
