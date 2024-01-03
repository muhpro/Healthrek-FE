'use client';

import {
  Box,
  Text,
  Grid,
  Stack,
  Image,
  Flex,
  Divider,
  Circle,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import { MainHeader } from '../MiniComponents/MainHeader';

const VerifyUser = ({ data }: { data: any }) => {
  return (
    <Box w="90%" mx="auto" minH="80vh" mt="1.5rem" overflow="hidden" pb="5">
      <Grid templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']} gap={5}>
        <Flex
          w={['90%', '100%', '40vw']}
          h={['100%', '100%', '60vh']}
          justifyContent="center"
          display={['none', 'flex']}
          alignItems="center"
          textAlign="center"
          mx="1.3rem"
          borderRadius="8px"
        >
          <Image
            src="/assets/admina.jpg"
            my={['1rem', '2rem !important', '5rem']}
            objectFit="contain"
          />
        </Flex>

        <Stack
          alignItems="center !important"
          justifyContent="center"
          spacing={2}
          mt="5rem"
          w="full"
        >
          <Circle size="3rem" mx="auto" mb="1rem">
            <Image src="/assets/lock.png" w="full" h="auto" />
          </Circle>

          <Box borderRadius="10px" bgColor="#F8F6F5" p="1rem">
            <MainHeader
              text={data?.message}
              size="1rem"
              fw={600}
              lh="normal"
              ls="0"
            />
            <Text
              fontSize="1rem"
              w="70%"
              fontWeight="500"
              textAlign="center"
              mx="auto"
            >
              Your account has been verified. Please login to start investing
            </Text>
          </Box>

          <Divider mb="1rem !important" mt="1rem !important" />
          <Flex>
            <Text fontSize=".8rem" fontWeight="bold" color="brand.100">
              <Link href="/login"> Back to login</Link>
            </Text>
          </Flex>
        </Stack>
      </Grid>
    </Box>
  );
};

export default VerifyUser;
