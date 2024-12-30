```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run only when 'count' changes
    console.log('Count:', count); 
    return () => {
      // Cleanup function
      console.log('Cleanup function ran');
    };
  }, [count]); // 'count' is correctly included in the dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```