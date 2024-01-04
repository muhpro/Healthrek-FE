'use client';
import {
  Box,
  Circle,
  Divider,
  Flex,
  GridItem,
  ListItem,
  OrderedList,
  Select,
  SimpleGrid,
  Square,
  Text,
  Image,
  VStack,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { BarChart } from '../Bits/BarChart';
import Donut from '../Bits/Donut';
import LineChart from '../Bits/LineCards';
import MiniCards from '../Bits/MiniCards';
import ValueBox from '../Bits/ValueBox';
//   import { UserMetricsStandardResponse } from "services";
//Fixed couple things

function Dashboard({ data }: { data: any }) {
  const metrics = data;
  return (
    <VStack spacing="2rem" align="flex-start">
      <Box w="full">
        <SimpleGrid columns={4} gap="1rem">
          <GridItem colSpan={1}>
            <MiniCards
              label="All Infants Records"
              increase="12%"
              value={metrics?.infants}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <MiniCards
              label="New Infant Records"
              increase="12%"
              value={metrics?.infantForTheWeek}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <MiniCards
              label="Medical Visits"
              increase="12%"
              value={metrics?.medicalVisitForTheWeek}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <MiniCards
              label="All Users"
              increase="12%"
              value={metrics?.admins}
            />
          </GridItem>
          <GridItem colSpan={3}>
            <Box
              bgColor="white"
              fontWeight="semibold"
              borderRadius="6px"
              boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
              h="25rem"
              padding="1rem 0"
            >
              <Flex justifyContent="space-between" px="1rem" mb="1rem">
                <Text fontSize="12px">Medical Visits Per Day Record Chart</Text>
              </Flex>
              <Box
                width="full"
                h="21rem"
                fontSize=".7rem"
                px="1rem"
                position="relative"
              >
                <LineChart chart={metrics?.medicationVisitsPerDayRecord} />
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <VStack
              bgColor="white"
              fontWeight="semibold"
              borderRadius="6px"
              boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
              h="100%"
              padding="1rem 0"
              overflow="hidden"
              // justify="center"
            >
              <Flex justifyContent="space-between" px="1rem" mb="1rem">
                <Text fontSize="12px">Devices</Text>
              </Flex>
              <Box width="full" h="70%" pl=".5rem">
                <Donut />
              </Box>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box w="full" display="none">
        <SimpleGrid columns={3} gap="1rem">
          <GridItem colSpan={1}>
            <Box
              bgColor="white"
              fontWeight="semibold"
              borderRadius="6px"
              boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
              h="14rem"
              padding="1rem 0"
              overflow="hidden"
            >
              <Flex justifyContent="space-between" px="1rem" mb="-1rem">
                <Text fontSize="12px">Transaction Value</Text>
              </Flex>
              <Box width="85%" h="9.5rem" fontSize=".7rem" pr="1rem">
                <BarChart />
              </Box>
              <HStack gap="2" px="1rem">
                <ValueBox title="All Services" value="737" />
                <ValueBox title="Completed" value="151" />
                <ValueBox title="Pending" value="19" />
                <ValueBox title="Failed" value="321" />
              </HStack>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box
              bgColor="white"
              fontWeight="semibold"
              borderRadius="6px"
              boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
              h="14rem"
              padding="1rem 0"
              overflow="hidden"
            >
              <Flex justifyContent="space-between" px="1rem" mb="-1rem">
                <Text fontSize="12px">Transaction Value</Text>
              </Flex>
              <Box width="85%" h="9.5rem" fontSize=".7rem" pr="1rem">
                <BarChart />
              </Box>
              <HStack gap="2" px="1rem">
                <ValueBox title="All Services" value="737" />
                <ValueBox title="Completed" value="151" />
                <ValueBox title="Pending" value="19" />
                <ValueBox title="Failed" value="321" />
              </HStack>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box
              bgColor="white"
              fontWeight="semibold"
              borderRadius="6px"
              boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
              h="14rem"
              padding="1rem 0"
            >
              <Flex justifyContent="space-between" px="1rem" mb="-1rem">
                <Text fontSize="12px">Transaction Volume</Text>
              </Flex>
              <Box width="85%" h="9.5rem" fontSize=".7rem" pr="1rem">
                <BarChart />
              </Box>
              <HStack gap="2" px="1rem">
                <ValueBox title="All Services" value="737" />
                <ValueBox title="Completed" value="151" />
                <ValueBox title="Pending" value="19" />
                <ValueBox title="Failed" value="321" />
              </HStack>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
    </VStack>
  );
}

export default Dashboard;
