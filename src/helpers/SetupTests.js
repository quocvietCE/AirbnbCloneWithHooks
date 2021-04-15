import MockAsyncStorage from 'mock-async-storage';

const mockImpl = new MockAsyncStorage();
jest.mock('@react-native-community/async-storage', () => mockImpl);

jest.useFakeTimers();

jest.mock('axios');
jest.mock('@react-navigation/native');
jest.mock('@react-navigation/stack');
jest.mock('@react-navigation/drawer');
