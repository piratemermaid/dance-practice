import { Box, SimpleGrid, Text } from '@chakra-ui/react';

export default function PageLayout({ title, children }) {
  return (
    <SimpleGrid spacing={4}>
      <Box>
        <Text fontSize="xl" sx={{ fontSize: '2rem' }} color={'blue.300'}>
          {title}
        </Text>
      </Box>

      <Box>{children}</Box>
    </SimpleGrid>
  );
}
