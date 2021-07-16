// import ClockList from "./components/ClockList";
// import Form from "./components/Form";
// import Calculator from "./components/Calculator";
// import Text from "./components/inheritance/Text";
import Text from "./components/composition/Text";
import Emoji from "./components/composition/Emoji";
import Bracket from "./components/composition/Bracket";

function App() {
  // const quantity = [1, 2];
  return (
    <>
      {/* <ClockList quantity={quantity} /> */}
      {/* <Form /> */}
      {/* <Calculator /> */}

      <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <Text addEmoji={addEmoji} addBracket={addBracket} />
            )}
          </Bracket>
        )}
      </Emoji>
    </>
  );
}

export default App;
