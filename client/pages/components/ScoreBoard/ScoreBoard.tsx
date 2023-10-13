import styles from "./ScoreBoard.module.css";

function ScoreBoard() {
  const data = {
    players: [
      {
        Name: "John Doe",
        Rank: 1,
        "Points Scored": 95,
      },
      {
        Name: "Alice Smith",
        Rank: 2,
        "Points Scored": 89,
      },
      {
        Name: "Bob Johnson",
        Rank: 3,
        "Points Scored": 87,
      },
      {
        Name: "Sarah Williams",
        Rank: 4,
        "Points Scored": 84,
      },
      {
        Name: "Michael Brown",
        Rank: 5,
        "Points Scored": 80,
      },
      {
        Name: "Emily Davis",
        Rank: 6,
        "Points Scored": 78,
      },
      {
        Name: "Daniel Wilson",
        Rank: 7,
        "Points Scored": 75,
      },
      {
        Name: "Olivia Harris",
        Rank: 8,
        "Points Scored": 72,
      },
      {
        Name: "James Lee",
        Rank: 9,
        "Points Scored": 68,
      },
      {
        Name: "Grace Anderson",
        Rank: 10,
        "Points Scored": 65,
      },
    ],
  };

  // function of eligibility:
  // if points >= 90 => leader
  // if points >= 80 => coleader
  // if points >= 70 => elder
  // if points >= 60 => member

  function eligibility(points: number) {
    if (points >= 90) {
      return "leader";
    } else if (points >= 80) {
      return "coleader";
    } else if (points >= 70) {
      return "elder";
    } else if (points >= 60) {
      return "member";
    } else {
      return "not eligible";
    }
  }

  return (
    <div>
      <h1 className={styles.title}>ScoreBoard</h1>

      {/* table here: */}
      <div className={styles.tableHeader}>
        <div>Name</div>
        <div>#</div>
        <div>Points</div>
        <div>Eligibility</div>
      </div>

      {/* table entries: */}
      {data.players.map((item, index) => (
        <div className={styles.tableEntry} key={index}>
          <div>{item.Name}</div>
          <div>{item.Rank}</div>
          <div>{item["Points Scored"]}</div>
          <div>{eligibility(item["Points Scored"])}</div>
        </div>
      ))}
    </div>
  );
}

export default ScoreBoard;
