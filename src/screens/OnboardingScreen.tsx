import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Done from '../components/doneComponent';
import Dots from '../components/dotsCompoenet';
import Next from '../components/nextComponent';
import Skip from '../components/skipComponent';

interface props {
    navigation: any;
}

const OnboardingScreen: React.FC<props> = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace('Home')}
            onDone={() => navigation.navigate('Home')}
            pages={[
                {
                    backgroundColor: '#3787f0',
                    image: (
                        <Image
                            style={{
                                width: 350,
                                height: 350,
                            }}
                            source={require('../assets/pic1.png')}
                        />
                    ),
                    title: 'Welcome',
                    subtitle:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                },
                {
                    backgroundColor: '#ad0909',
                    image: (
                        <Image
                            style={{
                                width: 350,
                                height: 350,
                            }}
                            source={require('../assets/pic4.png')}
                        />
                    ),
                    title: 'Page 2 ',
                    subtitle:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                },
                {
                    backgroundColor: '#1b9409',
                    image: (
                        <Image
                            style={{
                                width: 350,
                                height: 350,
                            }}
                            source={require('../assets/pic3.png')}
                        />
                    ),
                    title: 'Page 3',
                    subtitle:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                },
                {
                    backgroundColor: '#626662',
                    image: (
                        <Image
                            style={{
                                width: 350,
                                height: 350,
                            }}
                            source={require('../assets/pic2.png')}
                        />
                    ),
                    title: 'Page 4',
                    subtitle:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                },
            ]}
        />
    );
};

export default OnboardingScreen;
