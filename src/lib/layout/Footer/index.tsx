import { Box, SimpleGrid, Text, VStack, HStack } from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import NextLink from 'next/link';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Box w="90%" mx="auto" py={['3rem', '5rem']}>
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 5 }}
        justifyContent="space-between"
        alignItems="start"
        gap="5"
      >
        <VStack spacing="2" align="start">
          <Text fontSize="1.1rem" color="gray.700" fontWeight="bold">
            Ownland
          </Text>
          <VStack align="start" fontSize=".9rem">
            <NextLink href="/">About Us </NextLink>
            <NextLink href="/contact">Contact Us</NextLink>
            <NextLink href="/">Careers </NextLink>
            <NextLink href="/">CSR </NextLink>
          </VStack>
        </VStack>
        <VStack spacing="2" align="start">
          <Text fontSize="1.1rem" color="gray.700" fontWeight="bold">
            Legal
          </Text>
          <VStack align="start" fontSize=".9rem">
            <NextLink href="/privacy-policy">Privacy Policy</NextLink>
            <NextLink href="/">Terms & Conditions</NextLink>
          </VStack>
        </VStack>
        <VStack spacing="2" align="start">
          <Text fontSize="1.1rem" color="gray.700" fontWeight="bold">
            Features
          </Text>
          <VStack align="start" fontSize=".9rem">
            <NextLink href="/buy">Buy Property </NextLink>
            <NextLink href="/sell">Sell Property</NextLink>
            <NextLink href="/rent">Rent</NextLink>
            <NextLink href="/clean">Cleaning & Repairs</NextLink>
          </VStack>
        </VStack>
        <VStack spacing="2" align="start">
          <Text fontSize="1.1rem" color="gray.700" fontWeight="bold">
            Enquiry
          </Text>
          <VStack align="start" fontSize=".9rem">
            <NextLink href="/">Chat with us</NextLink>
            <NextLink href="/">FAQs</NextLink>
          </VStack>
        </VStack>
        <VStack spacing="2" align="start">
          <Text fontSize="1.1rem" color="gray.700" fontWeight="bold">
            Social media
          </Text>
          <VStack align="start" fontSize=".9rem">
            <NextLink href="https://www.facebook.com/propertymataaz">
              <HStack spacing="3" cursor="pointer">
                <FaFacebook /> <Text>Ownland</Text>
              </HStack>
            </NextLink>
            <NextLink href="https://twitter.com/Ownland">
              <HStack spacing="3" cursor="pointer">
                <FaTwitter /> <Text>Ownland</Text>
              </HStack>
            </NextLink>
            <NextLink href="https://www.linkedin.com/company/the-property-box-limited">
              <HStack spacing="3" cursor="pointer">
                <FaLinkedin /> <Text>Ownland</Text>
              </HStack>
            </NextLink>
            <NextLink href="https://www.instagram.com/Ownland/">
              <HStack spacing="3" cursor="pointer">
                <FaInstagram /> <Text>Ownland</Text>
              </HStack>
            </NextLink>
          </VStack>
        </VStack>
      </SimpleGrid>

      <VStack pt="4" align="start" spacing="5">
        <Text
          borderBottom="1px solid"
          py="4"
          borderTop="1px solid"
          w="full"
          textAlign="justify"
          fontSize={{ base: '14', lg: '16' }}
        >
          OWNLAND is a product of OWNLAND Limited, a subsidiary of Oxygen
          Holdings. Payments on Liquede are made via ——; a PCI DSS certified
          payment platform with bank-level security to ensure your transactions
          and financial information are kept safe at all times.
        </Text>
        <Text fontSize="14">
          © {date} Ownland Limited. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
