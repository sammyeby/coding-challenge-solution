import { render, screen } from "@testing-library/react";
import { TestWrapperWithRoutes } from "utils/test-utils";
import {ReactElement} from "react";
import { MockedProvider } from "@apollo/client/testing";
import mockResponseResult from 'utils/singleIssueMockDataResponse';

const mockIssueId = 25294;
const IssueDetailPageWrapper = (): ReactElement => <TestWrapperWithRoutes initialEntries={[`/issues/${mockIssueId}`]} />

describe('<IssueDetailPage>', () => {
    it("renders without error", async () => {
        render(
            <MockedProvider mocks={mockResponseResult} addTypename={false}>
                <IssueDetailPageWrapper />
            </MockedProvider>
        );
        expect(await screen.findByText('Issue #25294: Detail')).toBeInTheDocument();
    });
});