import { Center, Divider, Group, Stack, Text, Title } from "@mantine/core";
import { StudentHandler } from "../../business/StudentHandler";

function StudentInformation() {
  const students = new StudentHandler();
  const studentInfo = students.getStudentTypeInfo();

  return (
    <Center h="100%">
      <Group
        noWrap
        p="xl"
        position="center"
        align="flex-start"
        sx={{ border: "solid 1px black" }}
      >
        <Stack>
          <Title>Student Information</Title>
          <Divider />
          <Group align="flex-start">
            <Stack>
              <Text>Name: {studentInfo?.fullName}</Text>
              <Text>Gender: {studentInfo?.gender}</Text>
              <Text>IC: {studentInfo?.identityCard}</Text>

              <Text>Religion: {studentInfo?.religion}</Text>
              <Text>Country: {studentInfo?.country}</Text>
              <Text>Marital Status: {studentInfo?.maritalStatus}</Text>
              <Text>Nationality: {studentInfo?.nationality}</Text>
            </Stack>
            <Stack>
              <Text>Current CGPA: {studentInfo?.cgpa}</Text>
              <Text>Student Type: {studentInfo?.studentType}</Text>
            </Stack>
          </Group>
        </Stack>
        {studentInfo?.supervisor ? (
          <>
            <Divider orientation="vertical" />
            <Stack>
              <Title>Assign Supervisor</Title>
              <Divider />
              <Text>Name: {studentInfo.supervisor}</Text>
            </Stack>
          </>
        ) : null}
      </Group>
    </Center>
  );
}

export default StudentInformation;
