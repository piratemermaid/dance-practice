import { Link } from 'react-router-dom';
import { Card, SimpleGrid, Text } from '@chakra-ui/react';

import PageLayout from '../components/PageLayout';
import dances from '../data/dances';

export default function HomePage() {
  return (
    <PageLayout title="Dances">
      <SimpleGrid columns={3} spacing={2}>
        {Object.entries(dances).map(([key, dance]) => (
          <Link to={`/dance/${dance.name}`} key={key}>
            <Card
              key={dance.name}
              sx={{ height: '200px', width: '300px', justifyContent: 'center' }}
            >
              <Text sx={{ fontSize: 30, color: 'purple.300' }}>
                {dance.name}
              </Text>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </PageLayout>
  );
}
