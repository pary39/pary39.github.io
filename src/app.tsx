import { Route, Switch } from 'wouter-preact';
import { Home } from './pages/home/Home.tsx';
import { Settings } from './pages/settings/Settings.tsx';
import { Navbar } from './components/navbar/Navbar';

export function App() {
  return (
    <>
      <div className="container max-w-2xl flex items-center flex-col m-auto h-screen">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/settings" component={Settings} />
        </Switch>
        <Navbar />
      </div>
    </>
  );
}
