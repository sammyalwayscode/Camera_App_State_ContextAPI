import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import UseCase from "./Components/UseCase";
import Task from "./Components/Task";
import { GlobalProvider } from "./ContextAPI/GlobalContext";
import EditPage from "./Components/EditPage"
import { v4 as uuid } from "uuid"


function App() {
	return (
		<GlobalProvider>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/usecase" component={UseCase} />

					<Route exact path="/task" component={Task} />

					<Route exact path="/task/:id" component={EditPage} />
				</Switch>
			</Router>
		</GlobalProvider>

	);
}

export default App;
