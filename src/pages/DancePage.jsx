import {
  Box,
  Center,
  Image,
  SimpleGrid,
  Table,
  Td,
  Text,
  Th,
  Tr,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';
import YoutubeVideo from '../components/YoutubeVideo';
import dances from '../data/dances';

export default function DancePage() {
  const location = useLocation();

  const danceName = location.pathname.split('/dance/').pop();

  const danceInfo = dances[danceName.toLowerCase()];

  const getColumns = (step) => {
    let columns = 1;
    if (step.gifName) columns++;
    if (step.footwork?.length) columns++;

    return columns;
  };

  return (
    <PageLayout title={danceName}>
      <Section>
        <SectionHeader>Frame</SectionHeader>
        <Box>
          {danceInfo.frame?.map((frameNote, index) => (
            <Text key={index}>{frameNote}</Text>
          ))}
        </Box>
      </Section>

      {danceInfo.steps?.map((step, index) => (
        <Section key={index}>
          <SectionHeader>{step.name}</SectionHeader>
          {step.description && (
            <Text sx={{ color: 'purple.100' }}>{step.description}</Text>
          )}
          <Box>
            {step.notes?.map((note, index) => (
              <Text key={index}>- {note}</Text>
            ))}
          </Box>
          <SimpleGrid columns={getColumns(step)} spacing={10}>
            {step.footwork?.length && (
              <Table>
                {step.footwork.map((step, index) => (
                  <Tr key={index}>
                    <Th>{step.count}</Th>
                    <Td>{step.direction}</Td>
                    <Td>{step.foot ? `${step.foot} foot` : ''}</Td>
                    <Td>{step.technique ? `(${step.technique})` : null}</Td>
                  </Tr>
                ))}
              </Table>
            )}
            <Center sx={{ my: 4 }}>
              <YoutubeVideo url={step.videoUrl} />
            </Center>
            {step.gifName && (
              <Image src={`/images/gifs/${step.gifName}.gif`} alt={step.name} />
            )}
          </SimpleGrid>
        </Section>
      ))}
    </PageLayout>
  );
}
