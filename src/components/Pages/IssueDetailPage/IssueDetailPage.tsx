import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {Box, Divider, Typography} from "@mui/material";
import { useAppSelector } from "hooks";
import { selectIssueById } from "redux/selectors";
import Loading from "components/atoms/Loading";
import Comment from "components/Comment";
import ErrorMessage from "components/atoms/ErrorMessage";
import {GET_REPO_ISSUE_BY_NUMBER} from "graphql/queries";
import {useLayoutEffect, useState} from "react";
import {cleanGraphQLResponse} from "utils/graphqlHelper";
import {IRepositoryIssue} from "../../../models";
import { loadSingleOfflineIssue} from 'services';

const IssueDetailPage = () => {
    const { issueId } = useParams();
    const issueNumber = parseInt(issueId!);
    const [skipServerData, setSkipServerData] = useState<boolean>(true);
    const [detailsData, setDetailsData] = useState<IRepositoryIssue>({} as IRepositoryIssue);
    const repoInfo = useAppSelector(state => state.info);
    const issueDetails = useAppSelector((state) =>
        selectIssueById(state, issueNumber));

    const { loading, error, data } = useQuery(GET_REPO_ISSUE_BY_NUMBER, {
        variables: { repoOwner: repoInfo.owner, repoName: repoInfo.name, issueNumber }, skip: skipServerData
    });

    useLayoutEffect(() => {
        if (!issueDetails.length) {
            setSkipServerData(false);
            return;
        }
        setDetailsData({...issueDetails[0]})
    }, [issueDetails]);


    useLayoutEffect(() => {
        if (data && Object.keys(data).length) {
            const displayData = cleanGraphQLResponse(data.repository.issue) as IRepositoryIssue;
            setDetailsData({...displayData});
        }
    }, [data]);


    useLayoutEffect(() => {
        if (error) {
            const loadOfflineData = async () => {
                const data = await loadSingleOfflineIssue(issueNumber);
                if (data) {
                    setDetailsData({...data});
                }
            };
            loadOfflineData();
        }
    }, [issueNumber, error]);


    if (loading) return <Loading />;
    if (error && !Object.keys(detailsData).length) return <ErrorMessage message={error.message} />;

    if (!error && !Object.keys(detailsData).length) return null;

    return (
        <Box sx={{my: 4}} className="inner-content">
            <Typography variant="h4" gutterBottom sx={{fontStyle: 'italic', color: 'rgb(223, 0, 0)'}}>
                Issue #{issueId}: Detail
            </Typography>
            <Typography variant="h6">
                {detailsData.title}
            </Typography>
            <Box sx={{ my: 2}}>
                <Comment
                    body={detailsData.bodyHTML}
                    key={detailsData.id}
                    authorAvatarUrl={detailsData.author.avatarUrl}
                    username={detailsData.author.login}
                    createdAt={detailsData.createdAt}
                />
            </Box>
            <Typography variant="h6">
                Comments:
            </Typography>
            <Divider sx={{mb: 2}} />
            {detailsData?.comments?.length ? detailsData.comments.map((c) => (
                <Comment
                    body={c.bodyHTML}
                    key={c.id}
                    authorAvatarUrl={c.author.avatarUrl}
                    username={c.author.login}
                    createdAt={c.createdAt}
                />
            )) : null}
        </Box>
    );
};

export default IssueDetailPage;