import {Box, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Button from "../atoms/Button";


const HomePage = () => {
    const navigate = useNavigate();

    const goToSolution = () => {
        navigate('/issues');
    };

    return (
        <Box className="inner-content" sx={{my: 4, padding: '10px'}}>
            <Typography variant="h3" gutterBottom>
                MediaMarktSaturn
            </Typography>
            <Typography variant="h5" sx={{mb: 3}}>Technology</Typography>
            <Typography variant="h6" sx={{mb: 3, textAlign: 'center'}} gutterBottom>
                Challenge for the job opening Senior Frontend Engineer
            </Typography>

            <Typography variant="body1" sx={{mb: 3}} gutterBottom>
                This scenario is meant to test your every capability in programming modern day applications.
                Specifically,
                we
                want you to build a frontend for a GraphQL API. The result of your little scenario is then presented by
                you
                in
                person.
            </Typography>

            <Typography variant="body1" sx={{mb: 3}} gutterBottom>
                We want you to build a frontend for the GitHub GraphQL API. The frontend should allow to browse the
                issues
                of a
                GitHub repository, specifically of the official React repository. You will build a little search which
                allows to
                search for a text term in either the body or title of the issues as well as for the status OPEN or
                CLOSED.
                After
                listing these issues, a user should be able to view a single issue and all the comments. Please ensure
                that
                sufficient queries of users are faster than initial requests with a reasonable caching strategy.
            </Typography>
            <Typography variant="body1" sx={{mb: 3}} gutterBottom>
                Every important aspect of the application shall be tested. Rules to programming style apply as usual and
                documentation shall be down to a minimum. Your application should be able to handle wrong input by the
                user or
                any unusual behavior.
            </Typography>
            <Typography variant="body1" sx={{mb: 3}} gutterBottom>
                For this scenario we expect you to deliver a high quality web application. Your code should be typed
                using
                either Typescript or Flow. Furthermore, we expect you to use all available ES6+ features, including
                Async
                programming style. Your implementation is based on React with a structured state management using Redux
                and a
                sensible routing strategy. Alternatively, you may apply Apollo and appropriate client side state
                management.
            </Typography>
            <Typography variant="subtitle1" sx={{fontWeight: 'bold'}} gutterBottom>
                Relevant links:
            </Typography>
            <ul>
                <li>
                    <a href="https://developer.github.com/v4/" target="_blank"
                       rel="noreferrer">https://developer.github.com/v4/ </a> (GitHub GraphQL API)
                </li>
                <li>
                    <a href="https://github.com/facebook/react" target="_blank"
                       rel="noreferrer">https://github.com/facebook/react </a> (Repository of React)
                </li>
            </ul>
            <Typography variant="subtitle1" sx={{fontWeight: 'bold'}} gutterBottom>
                Following are the relevant technologies to use:
            </Typography>
            <ul>
                <li>
                    ECMAScript 6+ with async
                </li>
                <li>
                    TypeScript 2.5+ as a bonus instead of ECMAScript 6+
                </li>
                <li>React.js</li>
                <li>Webpack</li>
            </ul>

            <Typography variant="subtitle1" sx={{fontWeight: 'bold'}} gutterBottom>
                Further remarks:
            </Typography>
            <ul>
                <li>
                    Most important for us is to understand how you tackle complex problems. Therefore, please finish
                    this
                    challenge as far as possible under the given technological requirements. A correct and
                    understandable partial
                    implementation is more important than a complete one.
                </li>
                <li>
                    The assignment will be presented in a live demo as part of the personal interview.
                </li>
                <li>As you will probably not have an internet connection in the presentation room, please make
                    sure the assignment works offline.
                </li>
                <li>Webpack</li>
            </ul>

            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography gutterBottom>
                    Happy coding!
                </Typography>
                <Button onClick={goToSolution}>View Solution</Button>
            </Box>
        </Box>
    );
};

export default HomePage