import {
  Box,
  Center,
  Heading,
  Input,
  FormControl,
  VStack,
  Icon,
  Button,
  Divider,
  Text,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
export const SignIn = () => {
  return (
    <Center height="full">
      <Box width="3/4" borderColor="coolGray.200" borderWidth={1} padding={4}>
        <Center>
          <Heading color="coolGray.700">Entrar</Heading>
        </Center>
        <Divider mt={5} mb={5} />
        <VStack width="full">
          <FormControl>
            <FormControl.Label>
              <Text fontSize="md">E-mail</Text>
            </FormControl.Label>
            <Input
              placeholder="seu@email.com.br"
              InputLeftElement={
                <Icon as={<MaterialIcons name="person" />} size={5} ml={2} />
              }
              keyboardType="email-address"
            />
            <FormControl.Label mt={3}>
              <Text fontSize="md">Senha</Text>
            </FormControl.Label>
            <Input
              placeholder="sua_senha"
              InputLeftElement={
                <Icon as={<MaterialIcons name="lock" />} size={5} ml={2} />
              }
              secureTextEntry
            />
          </FormControl>
          <Button mt={7}>Entrar</Button>
        </VStack>
      </Box>
    </Center>
  );
};
