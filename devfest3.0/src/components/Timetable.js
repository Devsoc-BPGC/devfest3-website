import React from 'react'
import { Text,Table,Flex,Box, Divider } from '@chakra-ui/react';
import Daycard from './Daycard';
import Timecard from './Timecard';
function Timetable() {
    function DevfestEvent(name, time, venue) {
        this.name = name;
        this.time = time;
        this.venue = venue;
      }
    const Day_Schedule = [[new DevfestEvent("Inaugration","11:00-1:00","Auditorium"),new DevfestEvent("Game Jam","2:00 onwards","Initation"),new DevfestEvent("Hackathon","2:00 onwards","Initation")],
    [new DevfestEvent("Speaker Event","11:00-1:00","Auditorium"),new DevfestEvent("BitsKreig Event","2:00 onwards","Initation"),new DevfestEvent("Algo Event","2:00 onwards","Initation")],
    [new DevfestEvent("Workshop","11:00-1:00","Auditorium"),new DevfestEvent("Hackathon Result","2:00 onwards","Completion"),new DevfestEvent("Game Jam Result","2:00 onwards","Completion")]]

  return (
    <Box height="100%" width="100%" display="flex" flexDir="column" alignItems="center">
    <Text flexGrow={1} padding="30px" width="100%" textAlign="start" textColor="white" fontSize="5rem" fontFamily="Megrim">TIMETABLE</Text>
    <Flex height="80%" width="90%" justifyContent="space-between">
    <Box width="45%">
      <Daycard num="1" events={Day_Schedule[0]}/>
      <Daycard num="2" events={Day_Schedule[1]}/>
      <Daycard num="3" events={Day_Schedule[2]}/>
    </Box>
    <Box width="1.5px" backgroundColor="white"></Box>
    <Box width="45%">
      <Timecard events={Day_Schedule[0]}></Timecard>
      <Timecard events={Day_Schedule[1]}></Timecard>
      <Timecard events={Day_Schedule[2]}></Timecard>
    </Box>
    </Flex>
    </Box>
  )
}

export default Timetable