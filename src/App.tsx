import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { UserSearch } from "./components/UserSearch";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <UserSearch />
    </div>
  );
}

export default App;
