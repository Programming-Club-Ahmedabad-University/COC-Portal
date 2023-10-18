import React from "react";
import styles from "./ScoreCard.module.css";
import { Divider } from "@chakra-ui/react";

// typedefination for data object:
type ScoreCardData = {
  name1: string;
  score1: number;
  name2: string;
  score2: number;
};

function ScoreCard() {
  // data for the table:
  const data: ScoreCardData[] = [
    {
      name1: "Playera1",
      score1: 690,
      name2: "Playerb1",
      score2: 10,
    },
    {
      name1: "Playera2",
      score1: 100,
      name2: "Playerb2",
      score2: 10,
    },
    {
      name1: "Playera3",
      score1: 90,
      name2: "Playerb3",
      score2: 5,
    },
    {
      name1: "Playera4",
      score1: 40,
      name2: "Playerb4",
      score2: 0,
    },
  ];

  return (
    // table here:
    <div className={styles.tableWrapper}>
      <h1 className={styles.title}>ScoreCard</h1>

      <div className={styles.tableHeader}>
        <div>
          <h3>Team A</h3>
        </div>
        <div>
          <h3>Scores A</h3>
        </div>
        <div>
          <h3>Scores B</h3>
        </div>
        <div>
          <h3>Team B</h3>
        </div>
      </div>

      <Divider />

      {/* table entries: */}
      {data.map((item, index) => (
        <div className={styles.tableEntry} key={index}>
          <div>
            <h3>{item.name1}</h3>
          </div>
          <div>
            <h3>{item.score1}</h3>
          </div>
          <div>
            <h3>{item.score2}</h3>
          </div>
          <div>
            <h3>{item.name2}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScoreCard;
