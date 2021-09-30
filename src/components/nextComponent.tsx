import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Next: React.FC = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
        <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
);

export default Next;
