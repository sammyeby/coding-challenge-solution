import {useState, FormEvent, ChangeEvent} from "react";
import {TextField, Box, Divider, Typography, Switch} from "@mui/material";
import Button from "components/atoms/Button";
import {IRepository} from "../models";
import styled from "@emotion/styled";


const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 10px;

  > div {
    margin-right: 10px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    > div, button {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

const StyledSwitch = styled(Switch)`
  .MuiSwitch-switchBase.Mui-checked {
    color: rgb(223, 0, 0);
  }

  .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: rgb(223, 0, 0);
  }
`;


interface RepoSearchProps extends IRepository {
    issueState: boolean;
    isSearching?: boolean;
    isOffline?: boolean;
    searchSubmitHandler: (values: IRepository) => void;
    resetFilterHandler: () => void;
    filterSearchSubmitHandler: (term: string) => void;
    toggleIssuesStateHandler: (state: boolean) => void;
}


const RepoSearch = (
    {
        searchSubmitHandler,
        filterSearchSubmitHandler,
        toggleIssuesStateHandler,
        resetFilterHandler,
        owner,
        name,
        issueState,
        isSearching,
        isOffline
    }: RepoSearchProps) => {
    const [searchValues, setSearchValues] = useState<Record<string, string>>({owner, name});
    const [filterTerm, setFilterTerm] = useState<string>('');

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const {owner, name} = searchValues;
        searchSubmitHandler({owner: owner.trim(), name: name.trim()});
    };

    const filterSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        filterSearchSubmitHandler(filterTerm);
    };

    const resetFilterSearchHandler = () => {
        resetFilterHandler();
        setFilterTerm('');
    };


    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setSearchValues({
            ...searchValues,
            [name]: value
        });
    };

    const filterInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setFilterTerm(value);
    };

    const toggleIssuesState = (event: ChangeEvent<HTMLInputElement>) => {
        toggleIssuesStateHandler(event.target.checked);
    };

    return (
        <Box>
            <StyledForm onSubmit={submitHandler} noValidate>
                <TextField
                    name="owner"
                    value={searchValues.owner}
                    onChange={inputChangeHandler}
                    label="Repository Owner"
                    disabled={isSearching || isOffline}
                />
                <TextField
                    name="name"
                    value={searchValues.name}
                    onChange={inputChangeHandler}
                    label="Repository Name"
                    disabled={isSearching || isOffline}
                />
                <Button
                    variant="contained"
                    type="submit"
                    disabled={isSearching || isOffline}
                >
                    Get Issues
                </Button>
            </StyledForm>
            <Divider/>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{paddingLeft: '10px'}}>
                    <Typography variant="subtitle2" gutterBottom>
                        Issues state:
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'center', maxWidth: '500px'}}>
                        <Typography>Closed</Typography>
                        <StyledSwitch checked={issueState} onChange={toggleIssuesState} disabled={isSearching || isOffline}/>
                        <Typography sx={{color: 'rgb(223, 0, 0)'}}>Open</Typography>
                    </Box>
                </Box>
                <Box sx={{mt: 2}}>
                    <StyledForm onSubmit={filterSubmitHandler} noValidate>
                        <TextField
                            name="text"
                            value={filterTerm}
                            onChange={filterInputChangeHandler}
                            label="Search Title or body"
                            disabled={isSearching}
                        />
                        <Button
                            variant="outlined"
                            className="secondary"
                            type="button"
                            sx={{mr: 1}}
                            disabled={isSearching}
                            onClick={resetFilterSearchHandler}
                        >
                            Reset
                        </Button>
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={isSearching}
                        >
                            Search Issues
                        </Button>
                    </StyledForm>
                </Box>
            </Box>
        </Box>
    );
};

export default RepoSearch;