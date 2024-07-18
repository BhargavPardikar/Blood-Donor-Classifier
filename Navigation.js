// Navigation.js
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import OnboardingScreen from './OnboardingScreen';
import PhoneAuth from './PhoneAuth';
import Registration from './Registration';
import DonorMenu from './DonorMenu';
import EligibilityCheck from './EligiblityCheck';
import BloodBanks from './BloodBanks';

const AppNavigator = createStackNavigator(
  {
    Onboarding: OnboardingScreen,
    PhoneRegistration:PhoneAuth,
    Registration: Registration,
    DonorMenu: DonorMenu,
    EligibilityCheck: EligibilityCheck,
    BloodBanks: BloodBanks,
  },
  {
    initialRouteName: 'Onboarding',
    headerMode: 'none', // Hide the navigation header
  }
);

export default createAppContainer(AppNavigator);
