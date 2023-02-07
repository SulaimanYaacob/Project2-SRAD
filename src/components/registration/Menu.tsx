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
        <Button variant="outline">View initiated applications</Button>
        <Button component="a" href="/information" variant="outline">
          View application status
        </Button>
        <Button variant="outline">Apply to become representative agent</Button>
      </Stack>
      {/* <Stack sx={{ border: "solid 2px black" }} p="xl">
        <Title align="center">Announcement</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
          quis! Voluptas architecto maxime soluta autem adipisci eligendi saepe
          beatae praesentium nemo et nobis, alias veritatis. Voluptatibus eaque
          numquam minus nisi.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
          quis! Voluptas architecto maxime soluta autem adipisci eligendi saepe
          beatae praesentium nemo et nobis, alias veritatis. Voluptatibus eaque
          numquam minus nisi.
        </Text>
      </Stack> */}
    </Group>
  );
};

export default Menu;
