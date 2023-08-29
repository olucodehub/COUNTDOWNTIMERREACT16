export default function SumComponent() {
  const values = () => {
    const inputs = ['42', '1e3', '1.222', null, undefined, '-12'];

    // From the array, Filter out non-string values ex. null, undefined
    let sum = inputs.filter((value) => typeof value === 'string');

    // From the array, Convert strings to numbers using parseFloat ex. 1e3
    sum = sum.map(parseFloat);

    sum = sum.map((value) => {
      // From the array, Convert decimals to interger equivalent and to a base 10 ex. 1.222 to 1222
      const numValue = parseInt(value.toString().replace('.', ''), 10);
      return numValue;
    });

    // If any, Filter out NaN values
    sum = sum.filter((value) => !isNaN(value));

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
