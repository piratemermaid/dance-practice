import {
  Box,
  Image,
  SimpleGrid,
  Table,
  Td,
  Text,
  Th,
  Tr,
} from '@chakra-ui/react';

import PageLayout from '../components/PageLayout';
import { useLocation } from 'react-router-dom';
import dances from '../data/dances';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';

export default function DancePage() {
  const location = useLocation();

  const danceName = location.pathname.split('/dance/').pop();

  const danceInfo = dances[danceName.toLowerCase()];

  console.log('>>', danceInfo);

  return (
    <PageLayout title={danceName}>
      <Section>
        <SectionHeader>Frame</SectionHeader>
        <Box>
          {danceInfo.frame.map((frameNote, index) => (
            <Text key={index}>{frameNote}</Text>
          ))}
        </Box>
      </Section>
      <Section>
        <SectionHeader>Basic</SectionHeader>
        <SimpleGrid columns={[1, null, 2, 3]} spacing={4}>
          <Table>
            {danceInfo.basic.footwork.map((step, index) => (
              <Tr key={index}>
                <Th>{step.count}</Th>
                <Td>{step.direction}</Td>
                <Td>{step.foot} foot</Td>
                <Td>{step.technique ? `(${step.technique})` : null}</Td>
              </Tr>
            ))}
          </Table>
          <Box>
            {danceInfo.basic.technique.map((technique, index) => (
              <Text key={index}>{technique}</Text>
            ))}
            <Image
              src={`/images/gifs/${danceName.toLowerCase()}-basic.gif`}
              alt={danceName}
              sx={{ ml: 20 }}
            />
          </Box>
          <Box>
            <iframe
              width="560"
              height="315"
              src={danceInfo.basic.videoUrl}
              title="YouTube video player"
              //eslint-disable-next-line react/no-unknown-property
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              //eslint-disable-next-line react/no-unknown-property
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Box>
        </SimpleGrid>
      </Section>
    </PageLayout>
  );

  //   return (
  //     <PageLayout title={danceName}>
  //       <Text>Basic</Text>

  //       <Table>
  //         <Thead>
  //           <Tr>
  //             {danceInfo.basic.footwork.map((step, index) => (
  //               <Th key={index}>
  //                 <Text>{step.count}</Text>
  //                 <Text>{step.foot} foot</Text>
  //                 <Text>{step.direction}</Text>
  //                 <Text>{step.technique ? `(${step.technique})` : null}</Text>
  //               </Th>
  //             ))}
  //           </Tr>
  //         </Thead>
  //         <Tbody>
  //           {danceInfo.basic.footwork.map((step, index) => (
  //             <>
  //               <Tr>
  //                 <Th>{step.count}</Th>
  //               </Tr>
  //               <Tr>
  //                 <Td key={index} sx={{}}>
  //                   <Text>{step.foot} foot</Text>
  //                   <Text>{step.direction}</Text>
  //                   <Text>{step.technique ? `(${step.technique})` : null}</Text>
  //                 </Td>
  //               </Tr>
  //             </>
  //           ))}
  //         </Tbody>
  //       </Table>
  //       {/* {danceInfo.basic.footwork.map((step, index) => (
  //           <Tr key={index}>
  //             <Td>{step.foot}</Td>
  //             <Td>{step.direction}</Td>
  //             <Td>{step.technique}</Td>
  //           </Tr>
  //         ))} */}
  //       <Image
  //         src={`/images/gifs/${danceName.toLowerCase()}-basic.gif`}
  //         alt={danceName}
  //       />
  //     </PageLayout>
  //   );
}
