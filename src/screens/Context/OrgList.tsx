import {
  Avatar,
  Center,
  Divider,
  Flex,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";

import { MaterialIcons } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";

type OrgListProps = {
  selectedOrg: (item: any) => void;
};

export const OrgList = ({ selectedOrg }: OrgListProps) => {
  const [current, setCurrent] = useState<any>(undefined);
  const ItemMemo = React.memo(Item);

  const selectItem = useCallback((item: any) => {
    selectedOrg(item);
    setCurrent(item);
  }, []);

  return (
    <>
      <ScrollView>
        {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((item) => (
          <ItemMemo
            key={item}
            onClick={() => selectItem(item)}
            selected={item === current}
            item={item}
          />
        ))}
      </ScrollView>
    </>
  );
};

type ItemProps = {
  onClick: () => void;
  selected: boolean;
  item: any;
};
const Item = ({ item, onClick, selected }: ItemProps) => {
  return (
    <>
      <Pressable onPress={onClick}>
        {({ isPressed }: any) => {
          return (
            <Flex
              direction="row"
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}
              padding={3}
              backgroundColor={selected && "tertiary.50"}
            >
              <HStack>
                <Center>
                  <Avatar size={"md"} backgroundColor="coolGray.100">
                    <MaterialIcons name="business" size={35} />
                  </Avatar>
                </Center>
                <Divider orientation="vertical" ml={5} mr={5} />
              </HStack>
              <VStack mr={20}>
                <Text fontSize={"lg"} bold>
                  Ana Elisa - Beleza Facial
                </Text>
                <Text noOfLines={2}>
                  Ana Elisa Cardoso uma profissional dedicada e especializada em
                  beleza facial com diversos procedimentos não invasivo para
                  melhorar o seu bem estar.
                </Text>
              </VStack>
            </Flex>
          );
        }}
      </Pressable>
      <Divider mt={2} mb={2} backgroundColor="coolGray.100" />
    </>
  );
};
