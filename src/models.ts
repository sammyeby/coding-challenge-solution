
export interface IRepository {
    owner: string;
    name: string;
}

export enum IssuesStatesType {
    CLOSED = 'CLOSED',
    OPEN = 'OPEN'
}


export interface IIssueComment {
    id: string;
    url: string;
    createdAt: string;
    bodyText: string;
    bodyHTML: string;
    author: {
        login: string;
        avatarUrl: string;
    }
    totalCount?: number;
}

export interface IRepositoryIssue {
    title: string;
    url: string;
    closedAt: string;
    id: string;
    number: number;
    createdAt: string;
    bodyText: string;
    bodyHTML: string;
    author: {
        login: string;
        avatarUrl: string;
    }
    comments: IIssueComment[]
}

export type IRepositoryIssuesData = IRepositoryIssue[];

export interface IRepositoryState {
    info: IRepository
    issues: IRepositoryIssuesData
    states: IssuesStatesType
}

export interface IOfflineRepositoryIssuesData {
    repository: {
        issues: IRepositoryIssuesData
    }
}