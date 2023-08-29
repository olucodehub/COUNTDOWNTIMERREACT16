export default function SumComponent() {
  const values = () => {
    const inputs = ['42', '1e3', '1.222', null, undefined, '-12'];

    let sum = inputs.filter((value) => typeof value === 'string'); // Filter out non-string values null, undefined

    sum = sum.map(parseFloat); // Convert strings to numbers using parseFloat

    sum = sum.map((value) => {
      const numValue = parseInt(value.toString().replace('.', ''), 10);
      return numValue; // Convert 1.222 to 1222
    });

    debugger;
    sum = sum.filter((value) => !isNaN(value)); // Filter any NaN values

    sum = sum.reduce((acc, value) => acc + value, 0); // Sum the values

    return sum;
  };

  const result = values();

  return (
    <div>
      <label>
        <strong>{result}</strong>
      </label>
    </div>
  );
}
