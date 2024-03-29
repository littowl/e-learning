import { Box, Flex, Stack, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { CourseContent } from 'widgets/course-content/ui'
import { ControlButtons } from 'features/control-buttons/ui'
import { CourseTags } from 'features/course-tags/ui'
import { CreateForm } from 'features/create-form/ui'

const CreateCourse = () => {
  const navigate = useNavigate()
  const onCancel = () => {
    navigate(-1)
  }
  const onSubmit = () => {}
  return (
    <Stack h="100%" pos="relative">
      <Text fw={500} fz={28}>
        Создание курса
      </Text>
      <Flex justify="space-between">
        <Stack w="30%">
          <CreateForm />
          <CourseTags />
        </Stack>
        <Stack w="60%">
          <CourseContent />
          <Box pos="absolute" bottom={50} right={0}>
            <ControlButtons onCancel={onCancel} onSubmit={onSubmit} />
          </Box>
        </Stack>
      </Flex>
    </Stack>
  )
}
export default CreateCourse
