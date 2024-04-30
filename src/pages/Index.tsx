import { Box, Flex, Text, Button, useColorMode, VStack, HStack, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Input, Table, Thead, Tbody, Tr, Th, Td, Tab, TabList, TabPanels, TabPanel, Tabs } from '@chakra-ui/react';
import { FaPowerOff } from 'react-icons/fa';

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="white" color="almostBlack">
      <Flex justifyContent="space-between" p="4" borderBottom="1px" borderColor="gray.200">
        <HStack spacing="24px">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Bots</Button>
          <Button variant="ghost">Settings</Button>
          <Button variant="ghost">Account</Button>
        </HStack>
        <HStack spacing="24px">
          <Button onClick={toggleColorMode} variant="ghost">Test Mode</Button>
          <Button rightIcon={<FaPowerOff />} colorScheme="blue">Log out</Button>
        </HStack>
      </Flex>
      <SimpleGrid columns={3} spacing={10} p={10}>
        <Stat p={6} boxShadow="md" borderRadius="lg">
          <StatLabel>✨ Trades</StatLabel>
          <StatNumber>$21,359</StatNumber>
        </Stat>
        <Stat p={6} boxShadow="md" borderRadius="lg">
          <StatLabel>💰 Profit</StatLabel>
          <StatNumber>$1,230</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" /> 70%
          </StatHelpText>
        </Stat>
        <Stat p={6} boxShadow="md" borderRadius="lg">
          <StatLabel>⛰️ Milestones</StatLabel>
          <VStack>
            <Text>Reached $20K</Text>
            <Input placeholder="Set new milestone" size="sm" />
            <Button size="sm">Take Profit</Button>
          </VStack>
        </Stat>
      </SimpleGrid>
      <Box boxShadow="md" borderRadius="lg" p={6} m={10}>
        <Text>Asset Development Chart Here</Text>
      </Box>
      <Tabs variant="enclosed" m={10}>
        <TabList>
          <Tab>Trades</Tab>
          <Tab>Activities</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Input placeholder="Search Trades" my={4} />
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Name</Th>
                  <Th>Start</Th>
                  <Th>End</Th>
                  <Th>Duration</Th>
                  <Th>Result</Th>
                  <Th>Profit</Th>
                  <Th>% Change</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* Mock data rows here */}
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <Text>Activities Data Here</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex justifyContent="center" p={4} bg="gray.100">
        <Text color="gray.600">© 2023 Crypto Dashboard</Text>
      </Flex>
    </Box>
  );
};

export default Index;