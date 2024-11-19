import {
  Box,
  Center,
  Flex,
  Image,
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
          {step.technique?.length && (
            <Box>
              <Text
                sx={{
                  fontSize: 16,
                  textTransform: 'uppercase',
                  fontWeight: 300,
                  color: 'blue.200',
                }}
              >
                Technique
              </Text>
              {step.technique.map((technique, index) => (
                <Text key={index}>- {technique}</Text>
              ))}
            </Box>
          )}
          {step.notes?.length && (
            <Box>
              <Text
                sx={{
                  fontSize: 16,
                  textTransform: 'uppercase',
                  fontWeight: 300,
                  color: 'blue.200',
                }}
              >
                Notes
              </Text>
              {step.notes.map((note, index) => (
                <Text key={index}>- {note}</Text>
              ))}
            </Box>
          )}
          <Flex gap="10" wrap="wrap" justifyContent="center">
            {step.footwork?.length && (
              <Box>
                <Table>
                  {step.footwork.map((step, index) => (
                    <Tr key={index}>
                      <Th>{step.count}</Th>
                      {step.countDesc && <Th>{step.countDesc}</Th>}
                      <Td>{step.direction}</Td>
                      <Td>{step.foot ? `${step.foot} foot` : ''}</Td>
                      <Td>{step.technique ? `(${step.technique})` : null}</Td>
                    </Tr>
                  ))}
                </Table>
              </Box>
            )}
            <Box>
              <Center sx={{ my: 4 }}>
                <YoutubeVideo url={step.videoUrl} />
              </Center>
            </Box>
            {step.gifName && (
              <Box sx={{ maxWidth: '200px' }}>
                <Image
                  src={`/images/gifs/${step.gifName}.gif`}
                  alt={step.name}
                />
              </Box>
            )}
          </Flex>
        </Section>
      ))}
    </PageLayout>
  );
}
