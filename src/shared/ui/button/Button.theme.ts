import { ThemeComponent } from '../../config'

export const ButtonTheme: ThemeComponent = {
  variants: {
    green: ({ colors }) => ({
      root: {
        backgroundColor: colors.green[3],
        borderRadius: 10,
        '&:hover': {
          backgroundColor: colors.green[2],
        },
      },
      label: {
        color: 'black',
        fontWeight: 300,
      },
    }),
    gray: ({ colors }) => ({
      root: {
        backgroundColor: colors.gray[3],
        borderRadius: 10,
        '&:hover': {
          backroundColor: colors.gray[2],
        },
      },
      label: {
        color: 'black',
        fontWeight: 300,
      },
    }),
    transparent: () => ({
      root: {
        backgroundColor: 'inherit',
        fontSize: 20,
        fontWeight: 300,
        padding: 0,
      },
    }),
  },
}
