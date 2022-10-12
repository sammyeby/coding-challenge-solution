import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { TestWrapperWithRoutes } from "utils/test-utils";
import {ReactElement} from "react";
import { MockedProvider } from "@apollo/client/testing";
import mockResponseResult from 'utils/issuesMockDataResponse';


const IssuesListPageWrapper = (): ReactElement => <TestWrapperWithRoutes initialEntries={['/issues']} />

const IssuesListPageWithMockProvider = () => (
    <MockedProvider mocks={mockResponseResult} addTypename={false}>
        <IssuesListPageWrapper />
    </MockedProvider>
)

describe('<IssuesListPage>', () => {

    it("renders without error", async () => {
        render(<IssuesListPageWithMockProvider />);

        expect(await screen.findByText('Bug: defaultValue property missing on select element ref')).toBeInTheDocument();
    });


    it('should search issues list by given term', async () => {
        render(<IssuesListPageWithMockProvider />);

        let issuesListItems = await screen.findAllByRole('listitem');
        expect(issuesListItems.length).toBe(2);

        const searchInputField = screen.getByRole('textbox', {name: /Search Title or body/i});
        const submitSearchButton = screen.getByRole('button', {name: /Search Issues/i})

        await userEvent.type(searchInputField, 'Bug: defaultValue');
        await userEvent.click(submitSearchButton);

        issuesListItems = await screen.findAllByRole('listitem');

        expect(issuesListItems.length).toBe(1);

        await userEvent.type(searchInputField, 'just some rubbish');
        await userEvent.click(submitSearchButton);

        expect(await screen.findByText('No Issues found!')).toBeInTheDocument();
    });


    it('should load issues and navigate successfully to detail page', async () => {
        render(<IssuesListPageWithMockProvider />);

        const issuesList = await screen.findAllByRole('listitem');
        userEvent.click(issuesList[0]);

        expect(await screen.findByText('Issue #25294: Detail')).toBeInTheDocument();
    });

});