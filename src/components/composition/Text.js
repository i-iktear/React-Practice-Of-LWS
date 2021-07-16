const Text = ({ addEmoji, addBracket }) => {
  let text = "Hi, Aurko here";
  if (addEmoji) {
    text = addEmoji("Text Changed! yahoo", "😁😁😁");
  }
  if (addBracket) {
    text = addBracket(text);
  }
  return <div>{text}</div>;
};

export default Text;
