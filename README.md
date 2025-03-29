<h1 align="center">String Calculator</h1>
<br/>
<p>A simple string calculator that can add numbers from a given string input with customizable delimiters and validation options.</p>

## Implementation Approach

The calculator is implemented using two classes:

### 1. `Calculator`

- Handles basic addition logic.
- Ensures numbers larger than the allowed maximum are ignored.
- Throws errors for negative numbers if required.

### 2. `StringCalculator` (Extends `Calculator`)

- Parses input strings and extracts numbers.
- Supports custom delimiters, multi-character delimiters, and multiple delimiters.
- Converts input into a format suitable for `Calculator` to process.

### Test-Driven Development (TDD) Approach  
I followed the TDD methodology by first writing failing test cases before implementing the functionality. Each feature is built incrementally, ensuring all tests passed before moving to the next. I have completed all the steps of [TDD Kata 1](https://osherove.com/tdd-kata-1/).


## Usage

```typescript
const calculator = new StringCalculator();
const result = calculator.add("1,2,3"); // Returns 6
console.log(result); // 6
```

## Features

### 1. Supports adding numbers from a comma-separated string

```typescript
calculator.add("1,2"); // Returns 3
```

### 2. Handles empty string and single-digit string

```typescript
calculator.add(""); // Returns 0
calculator.add("5"); // Returns 5
```

### 3. Handles an unknown amount of numbers

```typescript
calculator.add("1,2,3,4,5"); // Returns 15
```

### 4. Supports newline (`\n`) as a delimiter

```typescript
calculator.add("1\n2,3"); // Returns 6
```

### 5. Allows custom delimiters

You can define a custom delimiter by specifying it at the beginning of the string using the pattern:
`//[delimiter]\n[numbers…]`

```typescript
calculator.add("//;\n1;2"); // Returns 3
```

### 6. Throws an exception for negative numbers

```typescript
calculator.add("1,-2,3"); // Throws "negative numbers not allowed -2"
calculator.add("-1,-2,-3"); // Throws "negative numbers not allowed -1,-2,-3"
```

### 7. Ignores numbers greater than a specified limit (default: 1000)

```typescript
calculator.add("2,1001"); // Returns 2 (1001 is ignored)
```

### 8. Supports multiple custom delimiters, including delimiters of any length

```typescript
calculator.add("//[***]\n1***2***3"); // Returns 6
calculator.add("//[*][%]\n1*2%3"); // Returns 6
calculator.add("//[***][%%]\n1***2%%3"); // Returns 6
```

## Customizable Options

### 1. Allow Only Positive Numbers

By default, negative numbers are not allowed. If a negative number is found, an error will be thrown.

```typescript
calculator.add("-9"); // Throws "negative numbers not allowed -9"
calculator.add("1,2,-3"); // Throws "negative numbers not allowed -3"
```

To allow negative numbers, set allowOnlyPositiveNumbers to false:

```typescript
calculator.add("1,2,-3", false); // Returns 0 (default sum behavior)
```

### 2. Ignore Numbers Larger than a Certain Limit

By default, numbers larger than 1000 are ignored.

```typescript
calculator.add("1,1001,2"); // Returns 3 (1001 is ignored)
calculator.add("1001"); // Returns 0
```

You can change this limit by setting maxAllowedNumber:

```typescript
calculator.add("1,2000,2", true, 2000); // Returns 2003 (2000 is now included)
```

### 3. Custom Delimiters

You can define a custom delimiter by specifying it at the beginning of the string in the format: `"//[delimiter]\n[numbers…]"`

```typescript
calculator.add("//;\n1;2"); // Returns 3 (using `;` as a delimiter)
```

### 4. Multi-character Delimiters

You can use a delimiter of any length.

```typescript
calculator.add("//[***]\n1***2***3"); // Returns 6
```

### 5. Multiple Delimiters

You can define multiple custom delimiters of any length.

```typescript
calculator.add("//[*][%]\n1*2%3"); // Returns 6
calculator.add("//[***][%%]\n1***2%%3"); // Returns 6
```
