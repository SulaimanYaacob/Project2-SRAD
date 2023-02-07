import { Button, Group, Stack, Title } from "@mantine/core";

const Menu = () => {
  return (
    <Group align="center" h="100%" position="center">
      <Stack
        sx={{ border: "cornflowerblue solid 1px", borderRadius: "12px" }}
        justify="start"
        p="xl"
      >
        <Title color="blue" align="center" mb="xl">
          Applicant Menu
        </Title>
        <Button component="a" href="/register" variant="outline">
          Apply to study at UTM
        </Button>
        <Button component="a" href="/information" variant="outline">
          View Student Info
        </Button>
      </Stack>
    </Group>
  );
};

export default Menu;
