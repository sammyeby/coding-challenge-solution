import { gql } from "@apollo/client";


export const GET_REPO_ISSUES = gql`
    query Issues($repoOwner: String!, $repoName: String!, $issueState: IssueState!) {
        repository(owner: $repoOwner, name: $repoName) {
            issues(last:20, states:[$issueState]) {
                edges {
                    node {
                        title
                        url
                        closedAt
                        id
                        number
                        createdAt
                        bodyText
                        bodyHTML
                        author {
                            login
                            avatarUrl
                        }
                        comments(first:5) {
                            edges {
                                node {
                                    id
                                    url
                                    createdAt
                                    bodyText
                                    bodyHTML
                                    author {
                                        login
                                        avatarUrl
                                    }
                                }
                            }
                            totalCount
                        }
                        labels(first:5) {
                            edges {
                                node {
                                    name
                                }
                            }
                        }
                    }
                }
                totalCount
            }
        }
    }
`;

export const GET_REPO_ISSUE_BY_NUMBER = gql`
    query IssuesByNumber($repoOwner: String!, $repoName: String!, $issueNumber: Int!) {
        repository(owner: $repoOwner, name: $repoName) {
            issue(number: $issueNumber) {
                title
                url
                closedAt
                id
                number
                createdAt
                bodyText
                bodyHTML
                author {
                    login
                    avatarUrl
                }
                comments(first:5) {
                    edges {
                        node {
                            id
                            url
                            createdAt
                            bodyText
                            bodyHTML
                            author {
                                login
                                avatarUrl
                            }
                        }
                    }
                    totalCount
                }
                labels(first:5) {
                    edges {
                        node {
                            name
                        }
                    }
                }
            }
        }
    }
`;
