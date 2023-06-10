export interface ButtonBaseProps {
  class?: string
  type?: 'button' | 'submit'
  link?: string
  size?: 'small' | 'medium' | 'large'
}

export interface InputBaseProps {
  label?: string
  preIcon?: string
  sufIcon?: string
  placeholder?: string
  name: string
}
