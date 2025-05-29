import React from 'react';
import { Route, Switch } from 'wouter';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <Switch>
          <Route path="/">
            <h1 className="text-4xl font-bold mb-4">Welcome to your React App!</h1>
            <p className="text-lg">Start building your application here.</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;