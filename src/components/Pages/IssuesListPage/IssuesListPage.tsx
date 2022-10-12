import {useEffect, useLayoutEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {useNavigate} from "react-router-dom";
import Loading from "components/atoms/Loading";
import IssueItem from "components/IssueItem";
import {GET_REPO_ISSUES} from "graphql/queries";
import {cleanGraphQLResponse} from "utils/graphqlHelper";
import RepoSearch from "components/RepoSearch";
import {IRepository, IssuesStatesType, IRepositoryIssuesData} from "../../../models";
import styled from "@emotion/styled";
import {Box, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "hooks";
import {selectIssues} from "redux/selectors";
import {setIssuesState, setRepoInfo, storeRepoIssues} from "redux/reducer";
import ErrorMessage from "components/atoms/ErrorMessage";
import { loadOfflineDemoIssues } from 'services';


const StyledIssuesList = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px #d8dee4;
  border-radius: 4px;

  > div:not(:last-of-type) {
    border-bottom: solid 1px #d8dee4;
  }
`;


const IssuesListPage = () => {
    const [repoIssues, setRepoIssues] = useState<IRepositoryIssuesData>([]);
    const [noGithubAccess, setNoGithubAccess] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const repoInfo = useAppSelector(state => state.info);
    const issueState = useAppSelector(state => state.states);
    const repoIssuesInStore = useAppSelector(selectIssues);

    const {loading, error, data} = useQuery(GET_REPO_ISSUES, {
        variables: {repoOwner: repoInfo.owner, repoName: repoInfo.name, issueState},
    });

    const getRepoIssues = (repoData: IRepository) => {
        dispatch(setRepoInfo(repoData));
    };


    const getRepoIssuesByState = (issuesState: boolean) => {
        dispatch(setIssuesState(issuesState ? IssuesStatesType.OPEN : IssuesStatesType.CLOSED));
    };


    const searchRepoIssue = (searchTerm: string) => {
        if (!searchTerm) {
            return;
        }
        const searchResult = repoIssuesInStore.filter((issue) =>
            issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            issue.bodyText.toLowerCase().includes(searchTerm.toLowerCase()));
        setRepoIssues([...searchResult]);
    };

    const resetRepoIssueSearch = () => {
        setRepoIssues([...repoIssuesInStore]);
    };

    const viewIssueDetails = (issueId: number) => {
        navigate(`/issues/${issueId}`);
    };

    useEffect(() => {
        if (data) {
            const preparedData = cleanGraphQLResponse(data.repository);
            dispatch(storeRepoIssues([...preparedData?.issues]));
            setRepoIssues([...preparedData?.issues]);
        }
    }, [dispatch, data]);


    useLayoutEffect(() => {
        if (error) {
            setNoGithubAccess(true);
            const loadOfflineData = async () => {
                const data = await loadOfflineDemoIssues();
                const offlineDataData = cleanGraphQLResponse(data.repository);
                dispatch(storeRepoIssues([...offlineDataData?.issues]));
                setRepoIssues([...offlineDataData?.issues]);
            };
            loadOfflineData();
        }
    }, [dispatch, error]);


    return (
        <div style={{position: 'relative', paddingTop: '15px'}} className="inner-content">
            <Typography variant="h4" gutterBottom>
                <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>
                    {repoInfo.owner}/{repoInfo.name}
                </span> issues</Typography>

            <Box sx={{mt: 3}}>
                <RepoSearch
                    issueState={(issueState === IssuesStatesType.OPEN)}
                    searchSubmitHandler={getRepoIssues}
                    filterSearchSubmitHandler={searchRepoIssue}
                    toggleIssuesStateHandler={getRepoIssuesByState}
                    resetFilterHandler={resetRepoIssueSearch}
                    owner={repoInfo.owner}
                    name={repoInfo.name}
                    isSearching={loading}
                    isOffline={noGithubAccess}
                />
            </Box>
            {error && !noGithubAccess ?
                <ErrorMessage message={`${error.message}`}/> :
                <Box sx={{my: 3, position: 'relative', minHeight: '400px'}}>
                    {loading ? <Loading/> : (
                        <StyledIssuesList role="list">
                            {repoIssues.length ? repoIssues.map((issue) => (
                                <IssueItem
                                    title={issue.title}
                                    key={issue.id}
                                    body={issue.bodyText}
                                    onClickFn={() => {
                                        viewIssueDetails(issue.number)
                                    }}
                                />
                            )) : <ErrorMessage message="No Issues found!"/>}
                        </StyledIssuesList>
                    )}
                </Box>
            }
        </div>
    )
};

export default IssuesListPage;