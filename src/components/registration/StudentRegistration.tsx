import {
  Button,
  Chip,
  Divider,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { StudentHandler, StudentInfo } from "../../business/StudentHandler";

const StudentRegistration = () => {
  const navigate = useNavigate();
  const { setStudentInfo } = new StudentHandler();
  const { getInputProps, onSubmit, values } = useForm<StudentInfo>({
    initialValues: {
      studentType: "Undergraduate",
      fullName: "",
      identityCard: 0,
      gender: "",
      maritalStatus: "",
      country: "",
      nationality: "",
      religion: "",
      cgpa: 0,
    },
  });

  const handleSubmit = (data: StudentInfo) => {
    if (data.cgpa < 2) {
      alert("You have not met the minimum CGPA requirement");
      navigate("/");
      return;
    }

    if (data.pscCourseTaken === "no" && data.studentType === "Undergraduate") {
      alert("You are not elibile to register as an undergraduate student");
      navigate("/");
      return;
    }

    setStudentInfo(data);
    navigate("/information");
  };

  return (
    <Stack h="100%" align="center" justify="center" spacing="xl">
      <form
        onSubmit={onSubmit((data) => {
          handleSubmit(data);
        })}
      >
        <Stack
          spacing="xl"
          p="xl"
          sx={{ border: "solid grey 1px", borderRadius: "12px" }}
        >
          <Stack align="center">
            <Title align="center" order={2}>
              Personal Information
            </Title>
            <Divider w="25vw" />
          </Stack>
          <Stack spacing="xl">
            <Group spacing="xl" align="flex-start" grow>
              <Stack>
                <TextInput {...getInputProps("fullName")} label="Full name" />
                <TextInput
                  label="Identity card"
                  {...getInputProps("identityCard")}
                />
                <Stack spacing="xs">
                  <Text fw="500" fz="sm">
                    Gender
                  </Text>
                  <Chip.Group position="center" {...getInputProps("gender")}>
                    <Chip value="Male">Male</Chip>
                    <Chip value="Female">Female</Chip>
                  </Chip.Group>
                </Stack>
                <Stack spacing="sm">
                  <Text fw="500" fz="sm">
                    Marital Status
                  </Text>
                  <Chip.Group
                    {...getInputProps("maritalStatus")}
                    position="center"
                  >
                    <Chip value="Married">Married</Chip>
                    <Chip value="Single">Single</Chip>
                  </Chip.Group>
                </Stack>
              </Stack>
              <Stack>
                <Select
                  {...getInputProps("country")}
                  label="Country of Birth"
                  data={[
                    { label: "Selangor", value: "selangor" },
                    { label: "Johor", value: "johor" },
                    { label: "Kedah", value: "kedah" },
                    { label: "Kelantan", value: "kelantan" },
                    { label: "Perak", value: "perak" },
                  ]}
                />
                <Select
                  {...getInputProps("nationality")}
                  label="Nationality"
                  data={[
                    { label: "Malaysian", value: "malaysian" },
                    { label: "Chinese", value: "chinese" },
                    { label: "Indian", value: "indian" },
                  ]}
                />
                <Select
                  {...getInputProps("religion")}
                  label="Religion"
                  data={[
                    { label: "Islam", value: "islam" },
                    { label: "Christian", value: "christian" },
                    { label: "Hindu", value: "hindu" },
                  ]}
                />
                <NumberInput
                  label="CGPA"
                  {...getInputProps("cgpa")}
                  min={0}
                  max={4}
                />
              </Stack>
            </Group>
            <Stack align="center">
              <Title order={5}>Type Of Student</Title>
              <Chip.Group {...getInputProps("studentType")} noWrap>
                <Chip value="Undergraduate">Undergraduate</Chip>
                <Chip value="Postgraduate">Postgraduate</Chip>
              </Chip.Group>
              {values.studentType === "Undergraduate" && (
                <>
                  <Title order={5}>Have you taken PSC Course?</Title>
                  <Chip.Group {...getInputProps("pscCourseTaken")} noWrap>
                    <Chip value="yes">Yes</Chip>
                    <Chip value="no">No</Chip>
                  </Chip.Group>
                </>
              )}
            </Stack>
          </Stack>
          <Button type="submit" variant="outline">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default StudentRegistration;
