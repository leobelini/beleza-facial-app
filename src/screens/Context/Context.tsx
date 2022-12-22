import { Box, Center, Heading, Divider, Button, Flex } from "native-base";
import { useState } from "react";
import { OrgList } from "./OrgList";

export const Context = () => {
  const [currentOrganization, setOrganization] = useState<any>(undefined);
  return (
    <Center height="full">
      <Box
        width="3/4"
        borderColor="coolGray.200"
        borderWidth={1}
        padding={4}
        h="4/6"
      >
        <Heading color="coolGray.700">Selecione uma organização</Heading>
        <Divider mt={5} mb={5} />

        <OrgList selectedOrg={(item) => setOrganization(item)} />
        <Divider mt={5} mb={5} />
        <Flex w={"full"} direction="row" justifyContent="space-between">
          <Button w={`1/4`} colorScheme="danger">
            Sair
          </Button>
          <Divider orientation="vertical" />
          <Button
            w={`1/3`}
            colorScheme={currentOrganization ? `green` : `coolGray`}
            disabled={!currentOrganization}
          >
            Selecionar
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};
