import { ActionIcon, Box, Button, Flex } from '@mantine/core'
import { ChevronDown, GraduationCap, UserCircle2 } from 'lucide-react'
import { ReactNode } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'

export const Layout = ({ children }: { children: ReactNode }) => {
  const isLogin = useMatch(ROUTES.login)
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        flexGrow: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        padding: '24px 60px',
      }}
    >
      {!isLogin && (
        <Flex justify="space-between">
          <Flex gap="lg">
            <Button
              variant="transparent"
              rightIcon={<ChevronDown />}
              onClick={() => navigate(ROUTES.courses)}
            >
              {' '}
              Все курсы{' '}
            </Button>
            <Button
              variant="transparent"
              onClick={() => navigate(ROUTES.create)}
            >
              Создать курс
            </Button>
          </Flex>
          <Flex
            sx={{
              alignSelf: 'end',
              gap: 25,
            }}
          >
            <ActionIcon onClick={() => navigate(ROUTES.teacher)}>
              <GraduationCap />
            </ActionIcon>
            <ActionIcon onClick={() => navigate(ROUTES.student)}>
              <UserCircle2 />
            </ActionIcon>
          </Flex>
        </Flex>
      )}
      {children}
    </Box>
  )
}
