import type { HTMLAttributes, ReactNode } from 'react';

export type AvatarColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'indigo'
  | 'teal'
  | 'amber'
  | 'violet'
  | 'neutral';
export type AvatarSize = 'xs' | 'sm' | 'small' | 'medium' | 'lg' | 'large' | 'xl';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  alt?: string;
  children?: ReactNode;
  color?: AvatarColor;
  size?: AvatarSize;
  src?: string;
}

declare const Avatar: import('react').ForwardRefExoticComponent<
  AvatarProps & import('react').RefAttributes<HTMLSpanElement>
>;

export default Avatar;

export interface AvatarGroupProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  max?: number;
  total?: number;
}

export declare const AvatarGroup: import('react').ForwardRefExoticComponent<
  AvatarGroupProps & import('react').RefAttributes<HTMLSpanElement>
>;
