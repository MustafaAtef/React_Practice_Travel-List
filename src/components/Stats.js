export default function Stats({ numItems, numPacked }) {
  if (!numItems)
    return (
      <p className="stats">
        <em>Start adding items to pack! 🚀</em>
      </p>
    );
  let percentage = (numPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage.toFixed(
              2
            )}%)`}
      </em>
    </footer>
  );
}
