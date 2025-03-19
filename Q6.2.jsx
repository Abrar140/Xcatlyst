

function ExpensiveComponent({ numbers }) {

  const sortedNumbers = useMemo(() => {
    return numbers.sort((a, b) => a - b);
  }, [numbers]);
  
  return <div>{sortedNumbers.join(", ")}</div>;
}
