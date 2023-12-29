import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface TaskCardProps {
  id: number;
  name: string;
  description: string;
  status: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  name,
  description,
  status,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      mb="4"
      boxShadow="md"
    >
      <Flex alignItems="center" mb="4">
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
      </Flex>
      <Text fontSize="xl" mb="4">
        {description}
      </Text>
      <Text fontSize="sm" color="gray.500">
        {status}
      </Text>
    </Box>
  );
};

export default TaskCard;