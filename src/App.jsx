import { useState } from "react";
import MoodTracker from "./components/MoodTracker/MoodTracker";
import TextSizeWrapper from "./components/TextSizeWrapper/TextSizeWrapper";
import GamesList from "./components/GamesList/GamesList";
import ClickCount from "./components/ClickCount/ClickCount";
import { ClickContext } from "./context";

function App() {
  const [cliclCount, setCliclCount] = useState(0);
  return (
    <ClickContext.Provider value={{ cliclCount, setCliclCount }}>
      <ClickCount />
      <TextSizeWrapper>
        <MoodTracker />
      </TextSizeWrapper>
      <TextSizeWrapper>
        <GamesList />
      </TextSizeWrapper>
    </ClickContext.Provider>
  );
}

export default App;
