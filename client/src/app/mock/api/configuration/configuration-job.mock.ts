import { ConfigurationJobsResponse } from 'src/app/models';

const MockConfigurationJobOne: ConfigurationJobsResponse = {
	department: 'actor',
	jobs: ['really bad'],
};

const MockConfigurationJobTwo: ConfigurationJobsResponse = {
	department: 'grip',
	jobs: ['hold the mic'],
};

export const MockConfigurationJobResponse = [
	MockConfigurationJobOne,
	MockConfigurationJobTwo,
];
