import {IOfflineRepositoryIssuesData, IRepositoryIssue} from "../models";
import { cleanGraphQLResponse } from "utils/graphqlHelper";


export const loadOfflineDemoIssues = async (): Promise<IOfflineRepositoryIssuesData> => {
    const result = await fetch('http://localhost:3000/dummy_data.json', {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        }
    });
    const resultJson = await result.json();
    return resultJson.data;
};


export const loadSingleOfflineIssue = async (issueNumber: number): Promise<IRepositoryIssue | null> => {
    const allIssues = await loadOfflineDemoIssues();
    const prepareData = cleanGraphQLResponse(allIssues.repository);
    const singleIssueData = prepareData?.issues.filter((issue: IRepositoryIssue) => issue.number === issueNumber);
    return singleIssueData.length ? singleIssueData[0] : null;
}


export const getGithubAccessToken = async (): Promise<string> => {
    const result = await fetch('http://localhost:5001/dev-demo/github-access');
    const resultJson = await result.json();
    return resultJson.data.token || '';
};