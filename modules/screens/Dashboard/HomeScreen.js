import React from 'react'
import { Box, Text } from '@gluestack-ui/themed'
import { Dimensions } from 'react-native';
import { dimens } from '../dimens';
import appColors from '../../appTheme/appColors';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen= () => {
  return (
    <Box bgColor='$white25' height= {windowHeight} padding={dimens.defaultPadding}>
      <Box>
        <Text fontSize="$2xl" color='$black25' lineHeight="$4xl">Hello Mayank,</Text>
        <Text fontSize='$lg' color='$gray25'>Have a nice day!</Text>
      </Box>
    </Box>
  )
}

export default HomeScreen