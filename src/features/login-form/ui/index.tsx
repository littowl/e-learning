import {
  Stack,
  Button,
  Input,
  PasswordInput,
  Center,
  Text,
} from '@mantine/core'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as loginUser } from 'shared/api/auth'
import { ROUTES } from 'shared/lib'

export const LoginForm = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const onSubmit = () => {
    loginUser(login, password)
      .then(({ data }) => {
        localStorage.setItem('refresh', data.refresh)
        navigate(ROUTES.home)
      })
      .catch(() => setError(true))
  }

  return (
    <Stack spacing={10} w="500px">
      <Input
        placeholder="Логин"
        size="md"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <PasswordInput
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Stack align="center">
        {error && <Text color="red">Неверный логин или пароль!</Text>}
        <Button variant="green" w="200px" onClick={onSubmit}>
          Войти
        </Button>
        <Link style={{ color: 'black' }} to={ROUTES.register}>
          Ещё нет аккаунта? Зарегистрироваться
        </Link>
      </Stack>
    </Stack>
  )
}
