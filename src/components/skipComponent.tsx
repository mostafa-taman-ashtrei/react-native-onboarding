import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Skip: React.FC = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
        <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
);

export default Skip;
