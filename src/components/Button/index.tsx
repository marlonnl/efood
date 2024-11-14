import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  children: string | JSX.Element
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  onClick?: () => void
}

const Button = ({
  type,
  title,
  to,
  children,
  variant = 'primary',
  disabled,
  onClick
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        variant={variant}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button
