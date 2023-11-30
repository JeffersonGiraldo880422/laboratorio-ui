// src/components/Header.js
import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box p={4} boxShadow="base" rounded="md" bg="gray.100">
      <Heading mb={4}>Mi Aplicación Chakra</Heading>
      <Button colorScheme="blue" mr={4}>
        Ver Detalles
      </Button>
      <Button colorScheme="teal">
        Ver Video
      </Button>
    </Box>
  );
};

export default Header;
