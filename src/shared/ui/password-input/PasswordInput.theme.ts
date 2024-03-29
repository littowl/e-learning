import { ThemeComponent } from '../../config'

export const PasswordInputTheme: ThemeComponent = {
  styles: (theme) => {
    const isDark = theme.colorScheme === 'dark'
    return {
      root: { width: '100%' },
      input: {
        height: '42px',
        background: 'white',
      },
    }
  },
  defaultProps: {
    icon: null,
  },
}
