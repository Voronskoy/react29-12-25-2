import MoodTracker from "./components/MoodTracker/MoodTracker";
import TextSizeWrapper from "./components/TextSizeWrapper/TextSizeWrapper";
import GamesList from './components/GamesList/GamesList';

function App() {
  return (
    <>
      <TextSizeWrapper>
        <MoodTracker />
      </TextSizeWrapper>
      <TextSizeWrapper>
        <GamesList />
      </TextSizeWrapper>
    </>
  );
}

export default App;
