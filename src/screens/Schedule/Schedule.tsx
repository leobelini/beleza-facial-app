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
      <Container width="full" mt={6} ml={5}>
        <ScrollView>
          <Box borderColor="coolGray.200" borderWidth={1} padding={4} w="full">
            <Heading color="coolGray.700">Paciente</Heading>
            <Divider mt={2} mb={2} />
            <VStack>
              <Text>
                <Text bold>Nome:</Text> <Text>Leonardo Siervo Belini</Text>
              </Text>
              <Text>
                <Text bold>Nascimento:</Text>{" "}
                <Text>11/06/1996 ({new Date().getFullYear() - 1996} anos)</Text>
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
            <Heading color="coolGray.700">Serviço</Heading>
            <Divider mt={2} mb={2} />
            <VStack>
              <Text>
                <Text bold>Nome:</Text> <Text>Limpeza de pele</Text>
              </Text>
              <Text>
                <Text bold>Agendado em:</Text> <Text>05/12/2022 as 18:30h</Text>
              </Text>
              <Text>
                <Text bold>Valor:</Text> <Text>R$ 130</Text>
              </Text>
              <Divider mt={2} mb={2} />
              <Flex w={"full"} direction="row" justifyContent="space-around">
                <Button colorScheme="danger">Cancelar</Button>
                <Divider orientation="vertical" />
                <Button colorScheme={`green`}>Realizar</Button>
              </Flex>
            </VStack>
          </Box>

          <Box
            borderColor="coolGray.200"
            borderWidth={1}
            padding={4}
            mt="10"
            w="full"
          >
            <Heading color="coolGray.700">Finalização do agendamento</Heading>
            <Divider mt={2} mb={2} />
            <VStack>
              <Text>
                <Text bold>Nome:</Text> <Text>Limpeza de pele</Text>
              </Text>
              <Text>
                <Text bold>Agendado em:</Text> <Text>05/12/2022 as 18:30h</Text>
              </Text>
              <Text>
                <Text bold>Valor:</Text> <Text>R$ 130</Text>
              </Text>
              <Divider mt={2} mb={2} />
              <Flex w={"full"} direction="row" justifyContent="space-around">
                <Button colorScheme="danger">Cancelar</Button>
                <Divider orientation="vertical" />
                <Button colorScheme={`green`}>Realizar</Button>
              </Flex>
            </VStack>
          </Box>
        </ScrollView>
      </Container>
    </Center>
  );
};
