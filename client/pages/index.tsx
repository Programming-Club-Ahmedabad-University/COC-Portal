import styles from "./styles/index.module.css";
import RootLayout from "./Layout";
import ScoreCard from "./components/ScoreCard/ScoreCard";
import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

export default function Home() {
  const [showScoreCard, setShowScoreCard] = useState(false);
  const [showScoreBoard, setShowScoreBoard] = useState(false);

  return (
    <RootLayout>
      <main className={styles.main}>
        <div className={styles.btnGrp}>
          {/* button to show ScoreCard component */}
          <Button
            onClick={() => {
              setShowScoreCard(!showScoreCard);
              setShowScoreBoard(false);
            }}
          >
            Show ScoreCard
          </Button>

          {/* button to show ScoreBoard component */}
          <Button
            onClick={() => {
              setShowScoreBoard(!showScoreBoard);
              setShowScoreCard(false);
            }}
          >
            Show ScoreBoard
          </Button>
        </div>

        {showScoreCard && <ScoreCard />}
        {showScoreBoard && <ScoreBoard />}
      </main>
    </RootLayout>
  );
}
