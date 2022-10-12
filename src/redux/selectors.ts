import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";


const selectRepoIssues = (state: RootState ) => state.issues;

export const selectIssues = createSelector(selectRepoIssues, (issues) => issues);

export const selectIssueById = createSelector(selectRepoIssues,
    (state: RootState, issueId: number) => issueId,
    (issues, issueId) => issues.filter(issue => issue.number === issueId)
);
