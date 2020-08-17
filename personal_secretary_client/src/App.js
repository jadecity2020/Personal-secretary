import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  withRouter,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Layout from './components/shared/Layout.jsx'
import Homepage from './components/routes/Homepage.jsx'
import History from './components/routes/History.jsx'
import NewSpendCreate from './components/routes/NewSpendCreate.jsx'
import NewIncomeCreate from './components/routes/NewIncomeCreate.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import HistoryCharts from "./components/routes/HistoryCharts";


function App() {
// spendings? dailyAmount(spendings) : console.log("hi")

  return (
    <div className="App">
      <Layout>
      <Route
          path="/"
          exact
          render={(routerProps) => (
            <Homepage
              {...routerProps}
            />
          )}
        />
        <Route
          path="/history"
          exact
          render={(routerProps) => (
            <History
              {...routerProps}
            />
          )}
        />
        <Route
          path="/history/Charts"
          exact
          render={(routerProps) => (
            <HistoryCharts
              {...routerProps}
            />
          )}
        />
        <Route
          path="/logSpent"
          exact
          render={(routerProps) => (
            <NewSpendCreate
              {...routerProps}
            />
          )}
        />
        <Route
          path="/logReceived"
          exact
          render={(routerProps) => (
            <NewIncomeCreate
              {...routerProps}
            />
          )}
        />
      </Layout>
    </div>
  );
}

export default App;
