import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilmPage from "./FilmPage";
import FilmDetailsPage from "./FilmDetailsPage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/films" component={FilmPage} />
                <Route path="/films/:episodeId" component={FilmDetailsPage} />
            </Switch>
        </Router>
    );
};

export default App;
