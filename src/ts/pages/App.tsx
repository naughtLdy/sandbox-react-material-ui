import * as React from "react";
import { default as AppComponent } from "../templates/App";

interface IAppProps {}

interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {};
  }

  render() {
    return <AppComponent />;
  }
}
