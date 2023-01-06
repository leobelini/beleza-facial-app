import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  ScrollView,
  Text,
  VStack,
} from "native-base";

export const Schedule = () => {
  return (
    <Center w="full">
      <ScrollView w={"full"}>
        <Center w={"full"}>
          <Container width="full" mt={6} mb={6}>
            <Box
              borderColor="coolGray.200"
              borderWidth={1}
              padding={4}
              w="full"
            >
              <Center>
                <Heading color="coolGray.700">Paciente</Heading>
              </Center>
              <Divider mt={2} mb={2} />
              <VStack>
                <Text>
                  <Text bold>Nome:</Text> <Text>Leonardo Siervo Belini</Text>
                </Text>
                <Text>
                  <Text bold>Nascimento:</Text>{" "}
                  <Text>
                    11/06/1996 ({new Date().getFullYear() - 1996} anos)
                  </Text>
                </Text>
                <Text>
                  <Text bold>Horário:</Text> <Text>03/12/2022 09:00h</Text>
                </Text>
              </VStack>
            </Box>

            <Box
              borderColor="coolGray.200"
              borderWidth={1}
              padding={4}
              mt="10"
              w="full"
            >
              <Center>
                <Heading color="coolGray.700">Procedimento</Heading>
              </Center>
              <Divider mt={2} mb={2} />
              <VStack>
                <Text>
                  <Text bold>Nome:</Text> <Text>Limpeza de pele</Text>
                </Text>
                <Text>
                  <Text bold>Agendado em:</Text>{" "}
                  <Text>05/12/2022 as 18:30h</Text>
                </Text>
                <Text>
                  <Text bold>Valor:</Text> <Text>R$ 130</Text>
                </Text>
              </VStack>
            </Box>

            <Box padding={4} mt="10" w="full">
              <Button colorScheme={`green`}>Realizar</Button>
              <Button colorScheme="danger" mt="3.5">
                Cancelar
              </Button>
            </Box>
          </Container>
        </Center>
      </ScrollView>
    </Center>
  );
};
