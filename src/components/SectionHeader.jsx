import { Text } from '@chakra-ui/react';

export default function SectionHeader({ children }) {
  return (
    <Text
      sx={{
        fontSize: 24,
        color: 'purple.300',
        fontWeight: 300,
        textTransform: 'uppercase',
      }}
    >
      {children}
    </Text>
  );
}
