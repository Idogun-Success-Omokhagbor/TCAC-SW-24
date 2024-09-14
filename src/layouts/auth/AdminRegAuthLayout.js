// layouts/auth/AdminRegAuthLayout.js
import Link from "next/link";
import {
  Box,
  Flex,
  Stack,
  HStack,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

const AdminRegAuthLayout = ({ formHeading, registrationForm, role }) => {
  const router = useRouter();

  return (
    <Box>
      {/* header */}
      <Flex
        justify="space-between"
        alignItems={"center"}
        mb={2}
        borderBottom="2px solid"
        borderColor="gray.100"
        zIndex="10"
        py={8}
        px={12}
      >
        <Link href="/" passHref>
          <Image
            src="/images/timsan-logo.png"
            alt="Logo"
            className="h-12 mb-6"
          />
        </Link>

        <HStack spacing={4}>
          <Text display={{ base: "none", md: "block" }} fontWeight="medium">
            Already Registered?
          </Text>
          <Button
            variant="outline"
            colorScheme="green"
            p={4}
            borderRadius="xl"
            border="1px solid black"
            boxShadow={"2px 2px 0px 0px #000000"}
            color={"black"}
            _hover={{
              color: "white",
              bg: "green.500",
              borderColor: "green.500",
            }}
            onClick={() => router.push(`/login/${role}`)}
          >
            Login
          </Button>
        </HStack>
      </Flex>

      <Flex
        minH="100vh"
        flexDirection={"column"}
        justify="center"
        align="center"
        bg="green.50"
      >
        <Heading
          as="h1"
          size="lg"
          fontWeight="bold"
          color="green"
          textAlign="center"
          mb={4}
        >
          {formHeading}
        </Heading>

        <Box
          w={{ base: "90%", md: "400px" }}
          p={8}
          boxShadow="lg"
          borderRadius="lg"
          bg="green.100"
          color="green.900"
        >
          {/* Registration form component */}
          {registrationForm}

          <Stack spacing={4} mt={6}>
            <Text fontSize="sm" color="gray.600">
              Already have an account?{" "}
              <Link href={`/login/${role}`} passHref>
                <Button
                  variant="link"
                  colorScheme="green"
                  _hover={{
                    color: "white",
                    bg: "green.500",
                    borderColor: "green.500",
                    px: "2",
                    py: "1",
                  }}
                >
                  Login
                </Button>
              </Link>
            </Text>
            <Text fontSize="sm" color="gray.600">
              Forgot password?{" "}
              <Link href={`/reset-password/${role}`} passHref>
                <Button
                  variant="link"
                  colorScheme="green"
                  _hover={{
                    color: "white",
                    bg: "green.500",
                    borderColor: "green.500",
                    px: "2",
                    py: "1",
                  }}
                >
                  Reset
                </Button>
              </Link>
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminRegAuthLayout;
