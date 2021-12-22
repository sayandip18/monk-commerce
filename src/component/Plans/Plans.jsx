import React from 'react';
import { Card, CardDisplay, Heading, Plan, Text } from './PlanStyles';

import { PlanInfo } from '../utils/data';

export const Plans = () => {
    return (
        <div>
            <Plan>
                <Heading>Choose your plan</Heading>
                <Text>Let's choose the package that is best for you and explore it happily and cheerfully.</Text>
            </Plan>
            <CardDisplay>
                <Card />
            </CardDisplay>
        </div>
    )
};
