import { useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import data from "./data/data.json"
import List from "./components/List"


function App() {
  const [people, setPeople ] = useState(data)
  return (
    <>
    <Container>
      <div className="w-50 m-auto">
        <Card className="mt-5 p-3">
            <h2 className="mb-4">{people.length} Birthdays Today</h2>
            <List people = {people} />
            <Button variant="success" onClick={() => setPeople([])}>Clear All</Button>
        </Card>
      </div>
    </Container>
    </>
  );
}

export default App;
