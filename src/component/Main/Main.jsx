import React from 'react';
import { MainWrapper, Image, Text, TopText, BottomText, Button } from './MainStyles';

export const Main = () => {
    return (
        <MainWrapper>
            <Text>
                <TopText>Want anything to be easy with LaslesVPN.</TopText>
                <BottomText>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</BottomText>
                <Button>Get Started</Button>
            </Text>
            <Image alt="Main" src="./img1.jpg" />            
        </MainWrapper>
    )
};
