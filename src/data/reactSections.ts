import type { Section } from '../types';

export const reactSections: Section[] = [
  {
    id: 'intro',
    title: 'Introduction to React',
    subtitle: 'What is React & Why Use It?',
    icon: '⚛️',
    content: [
      {
        heading: 'What is React?',
        description: 'React is a JavaScript library for building user interfaces. Think of it like building blocks for websites - you create small pieces (components) and combine them to make a complete website.',
        points: [
          'Created by Facebook (Meta) in 2013',
          'Used by Netflix, Instagram, Airbnb, and thousands of companies',
          'Makes building interactive websites easier and faster',
          'Free and open-source'
        ]
      },
      {
        heading: 'What is SPA (Single Page Application)?',
        description: 'A Single Page Application loads only one HTML page and updates the content dynamically without refreshing the page. It\'s like a book where you flip through pages instantly without closing and reopening the book.',
        info: {
          type: 'tip',
          title: 'Real World Example',
          content: 'Gmail is an SPA - when you click on an email, the page doesn\'t reload, it just shows the email content smoothly.'
        }
      },
      {
        heading: 'Virtual DOM',
        description: 'The Virtual DOM is like a blueprint of your website that React keeps in memory. When something changes, React compares the old blueprint with the new one and only updates the parts that actually changed, making your website super fast.',
        points: [
          'Regular DOM: Updates the entire page (slow)',
          'Virtual DOM: Updates only what changed (fast)',
          'React handles this automatically - you don\'t need to worry about it!'
        ],
        info: {
          type: 'note',
          content: 'Think of it like autocorrect - it only changes the wrong words, not the entire sentence.'
        }
      }
    ]
  },
  {
    id: 'jsx',
    title: 'JSX Syntax',
    subtitle: 'Writing HTML in JavaScript',
    icon: '📝',
    content: [
      {
        heading: 'What is JSX?',
        description: 'JSX stands for JavaScript XML. It lets you write HTML-like code inside JavaScript. It looks like HTML but has the power of JavaScript.',
        code: `// This is JSX - looks like HTML but it's JavaScript!
function Greeting() {
  return <h1>Hello, World!</h1>;
}

// You can use JavaScript variables inside JSX
function Welcome() {
  const name = "Sarah";
  return <h1>Hello, {name}!</h1>;
}`,
        info: {
          type: 'important',
          title: 'Key Rule',
          content: 'Use curly braces { } to include JavaScript expressions in JSX.'
        }
      },
      {
        heading: 'JSX Rules You Must Know',
        subsections: [
          {
            heading: '1. Return One Parent Element',
            description: 'You must wrap multiple elements in a single parent element.',
            code: `// ❌ Wrong - Multiple parent elements
function Wrong() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  );
}

// ✅ Correct - Wrapped in one parent
function Correct() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

// ✅ Also Correct - Using Fragment <>
function AlsoCorrect() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}`
          },
          {
            heading: '2. Use className Instead of class',
            description: 'Since "class" is a reserved word in JavaScript, we use "className" in JSX.',
            code: `// ❌ Wrong
<div class="container">Content</div>

// ✅ Correct
<div className="container">Content</div>`
          },
          {
            heading: '3. Close All Tags',
            description: 'In JSX, every tag must be closed, even self-closing tags.',
            code: `// ❌ Wrong
<img src="photo.jpg">
<input type="text">

// ✅ Correct
<img src="photo.jpg" />
<input type="text" />`
          },
          {
            heading: '4. Use camelCase for Attributes',
            code: `// HTML uses kebab-case
<button onclick="handleClick()">Click</button>

// JSX uses camelCase
<button onClick={handleClick}>Click</button>`
          }
        ]
      }
    ]
  },
  {
    id: 'setup',
    title: 'Project Setup',
    subtitle: 'Getting Started with React',
    icon: '🛠️',
    content: [
      {
        heading: 'Setting Up React with Vite (Recommended)',
        description: 'Vite is a modern build tool that is faster than Create React App. It\'s the recommended way to start new React projects.',
        code: `# Install Node.js first from nodejs.org

# Create a new React project with Vite
npm create vite@latest my-app -- --template react

# Navigate to your project folder
cd my-app

# Install dependencies
npm install

# Start the development server
npm run dev`,
        info: {
          type: 'tip',
          title: 'Why Vite?',
          content: 'Vite is much faster than Create React App. It starts your dev server in seconds, not minutes!'
        }
      },
      {
        heading: 'Alternative: Create React App',
        description: 'An older but still popular way to set up React.',
        code: `# Create a new React app
npx create-react-app my-app

# Navigate to your project
cd my-app

# Start the app
npm start`
      },
      {
        heading: 'Folder Structure Best Practices',
        description: 'A well-organized project structure makes your code easier to maintain.',
        code: `my-app/
├── public/              # Static files (images, fonts)
│   └── favicon.ico
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Button.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── hooks/          # Custom hooks
│   │   └── useAuth.js
│   ├── utils/          # Helper functions
│   │   └── formatDate.js
│   ├── styles/         # CSS files
│   │   └── App.css
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── package.json
└── vite.config.js`,
        info: {
          type: 'note',
          content: 'This is just a suggestion. As you learn more, you can organize your folders differently based on your project needs.'
        }
      }
    ]
  },
  {
    id: 'components',
    title: 'Components',
    subtitle: 'Building Blocks of React',
    icon: '🧩',
    content: [
      {
        heading: 'What are Components?',
        description: 'Components are like LEGO blocks. Each component is a piece of your website that you can reuse. A button, a header, a form - all can be components.',
        info: {
          type: 'tip',
          content: 'Think of a website like a car. The engine, wheels, and seats are all separate components that work together.'
        }
      },
      {
        heading: 'Functional Components',
        description: 'These are the modern way to create components. They\'re just JavaScript functions that return JSX.',
        code: `// A simple component
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

// Using the component
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}`,
        info: {
          type: 'important',
          title: 'Naming Rule',
          content: 'Component names MUST start with a capital letter: Button, not button.'
        }
      },
      {
        heading: 'Component Reusability',
        description: 'The power of components is that you can use them multiple times. Write once, use everywhere!',
        code: `// Create a reusable Button component
function Button({ text, color }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

// Use it multiple times with different values
function App() {
  return (
    <div>
      <Button text="Save" color="green" />
      <Button text="Delete" color="red" />
      <Button text="Cancel" color="gray" />
    </div>
  );
}`
      },
      {
        heading: 'Real World Example',
        description: 'Here\'s a practical example of a reusable Card component.',
        code: `function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card 
        title="iPhone 15"
        description="Latest model with amazing features"
        imageUrl="/iphone.jpg"
      />
      <Card 
        title="MacBook Pro"
        description="Powerful laptop for developers"
        imageUrl="/macbook.jpg"
      />
    </div>
  );
}`
      }
    ]
  },
  {
    id: 'props',
    title: 'Props',
    subtitle: 'Passing Data to Components',
    icon: '📦',
    content: [
      {
        heading: 'What are Props?',
        description: 'Props (short for "properties") are like arguments you pass to a function. They let you send data from a parent component to a child component.',
        info: {
          type: 'note',
          content: 'Think of props like settings on your phone - you pass different settings to make your phone work the way you want.'
        }
      },
      {
        heading: 'Using Props',
        code: `// Child component receives props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Parent component sends props
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}`,
        info: {
          type: 'important',
          title: 'Props are Read-Only',
          content: 'You cannot change props inside a component. They are like sealed packages - you can read them but not modify them.'
        }
      },
      {
        heading: 'Destructuring Props (Cleaner Way)',
        description: 'Instead of writing props.name every time, you can destructure props to make code cleaner.',
        code: `// Without destructuring
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.age} years old</p>
    </div>
  );
}

// With destructuring (cleaner!)
function UserCard({ name, email, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age} years old</p>
    </div>
  );
}`
      },
      {
        heading: 'Default Props',
        description: 'You can set default values for props in case they\'re not provided.',
        code: `function Button({ text = "Click Me", color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

// Usage
<Button />  // Shows "Click Me" with blue color
<Button text="Submit" />  // Shows "Submit" with blue color
<Button text="Delete" color="red" />  // Shows "Delete" with red color`
      },
      {
        heading: 'Children Props',
        description: 'The special "children" prop lets you pass content between component tags.',
        code: `function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Usage
function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>This is inside the card!</p>
      <button>Click me</button>
    </Card>
  );
}`,
        info: {
          type: 'tip',
          content: 'Children props are great for wrapper components like modals, cards, and layouts.'
        }
      }
    ]
  },
  {
    id: 'state',
    title: 'State & Events',
    subtitle: 'Making Components Interactive',
    icon: '🎮',
    content: [
      {
        heading: 'What is State?',
        description: 'State is like a component\'s memory. It remembers information that can change over time. When state changes, React automatically re-renders (updates) your component.',
        info: {
          type: 'note',
          content: 'Think of state like a light switch - it can be ON or OFF, and when you flip it, the light changes.'
        }
      },
      {
        heading: 'useState Hook',
        description: 'useState is a React Hook that lets you add state to functional components.',
        code: `import { useState } from 'react';

function Counter() {
  // Create state variable "count" with initial value 0
  // setCount is the function to update count
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}`,
        info: {
          type: 'important',
          title: 'useState Syntax',
          content: 'const [value, setValue] = useState(initialValue) - Always use this pattern!'
        }
      },
      {
        heading: 'Event Handling',
        description: 'Events are user actions like clicks, typing, or hovering. React lets you handle these events easily.',
        code: `function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}

// Common events:
// onClick - when user clicks
// onChange - when input value changes
// onSubmit - when form is submitted
// onMouseEnter - when mouse enters element
// onKeyDown - when key is pressed

function EventExamples() {
  return (
    <>
      <button onClick={() => console.log('Clicked!')}>
        Click Me
      </button>
      
      <input 
        onChange={(e) => console.log(e.target.value)}
        placeholder="Type something..."
      />
      
      <div onMouseEnter={() => console.log('Mouse entered!')}>
        Hover over me
      </div>
    </>
  );
}`
      },
      {
        heading: 'Practical Example: Toggle Button',
        code: `import { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);  // Flip the value
  };

  return (
    <div>
      <p>The light is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
}`
      },
      {
        heading: 'Conditional Rendering',
        description: 'Show different content based on conditions. Like showing different messages for logged-in vs logged-out users.',
        code: `function Greeting({ isLoggedIn }) {
  // Method 1: if/else
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in</h1>;
  }
}

// Method 2: Ternary operator (cleaner)
function Greeting({ isLoggedIn }) {
  return (
    <h1>
      {isLoggedIn ? 'Welcome back!' : 'Please sign in'}
    </h1>
  );
}

// Method 3: && operator (for showing/hiding)
function Notification({ hasMessages }) {
  return (
    <div>
      {hasMessages && <p>You have new messages!</p>}
    </div>
  );
}`
      },
      {
        heading: 'Controlled vs Uncontrolled Components',
        description: 'Controlled components: React controls the input value through state. Uncontrolled: The DOM controls the value.',
        code: `// ✅ Controlled Component (Recommended)
import { useState } from 'react';

function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input 
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// ❌ Uncontrolled Component
function UncontrolledInput() {
  return <input />;  // React doesn't control the value
}`,
        info: {
          type: 'tip',
          title: 'Which to Use?',
          content: 'Always use controlled components for forms. They give you more control and make form validation easier.'
        }
      },
      {
        heading: 'Complete Form Example',
        code: `import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}`
      }
    ]
  },
  {
    id: 'hooks-lifecycle',
    title: 'Hooks & Lifecycle',
    subtitle: 'Managing Side Effects',
    icon: '🔄',
    content: [
      {
        heading: 'useEffect Hook',
        description: 'useEffect lets you perform side effects in components. Side effects are actions that happen outside of rendering, like fetching data, timers, or updating the document title.',
        info: {
          type: 'note',
          content: 'Think of useEffect as "do something when the component loads or when something changes".'
        }
      },
      {
        heading: 'Basic useEffect',
        code: `import { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Runs after every render
  useEffect(() => {
    console.log('Component rendered!');
  });

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`
      },
      {
        heading: 'Dependency Arrays',
        description: 'The dependency array controls when useEffect runs.',
        code: `import { useEffect, useState } from 'react';

function DependencyExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // 1. No dependency array - runs after every render
  useEffect(() => {
    console.log('Runs every time');
  });

  // 2. Empty array [] - runs only once (when component mounts)
  useEffect(() => {
    console.log('Runs only once');
  }, []);

  // 3. With dependencies - runs when those values change
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);  // Only runs when count changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}`,
        info: {
          type: 'important',
          title: 'Common Mistake',
          content: 'Forgetting the dependency array causes infinite loops! Always include it.'
        }
      },
      {
        heading: 'Cleanup Functions',
        description: 'Cleanup functions run before the component unmounts or before the effect runs again. They\'re important for preventing memory leaks.',
        code: `import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Setup: Start the timer
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup: Stop the timer when component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <p>Seconds: {seconds}</p>;
}`,
        info: {
          type: 'warning',
          title: 'Always Clean Up',
          content: 'Always clean up subscriptions, timers, and event listeners to prevent memory leaks!'
        }
      },
      {
        heading: 'Fetching Data Example',
        code: `import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when component mounts
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);  // Empty array = run once

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`
      }
    ]
  },
  {
    id: 'advanced-hooks',
    title: 'Advanced Hooks',
    subtitle: 'useRef, useMemo, useCallback',
    icon: '⚡',
    content: [
      {
        heading: 'useRef Hook',
        description: 'useRef creates a reference to a DOM element or stores a value that persists across renders without causing re-renders.',
        code: `import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Access the input element directly
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}`,
        info: {
          type: 'tip',
          content: 'useRef is perfect for accessing DOM elements, storing previous values, or storing timers.'
        }
      },
      {
        heading: 'useRef for Storing Values',
        code: `import { useRef, useState, useEffect } from 'react';

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}`
      },
      {
        heading: 'useMemo Hook',
        description: 'useMemo memoizes (caches) expensive calculations so they only run when needed, not on every render.',
        code: `import { useMemo, useState } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // This calculation only runs when count changes
  const expensiveValue = useMemo(() => {
    console.log('Calculating...');
    return count * 1000;
  }, [count]);

  return (
    <div>
      <p>Result: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      
      {/* Typing here won't recalculate expensiveValue */}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}`,
        info: {
          type: 'important',
          content: 'Only use useMemo for expensive calculations. Don\'t overuse it - it adds complexity!'
        }
      },
      {
        heading: 'useCallback Hook',
        description: 'useCallback memoizes functions so they don\'t get recreated on every render.',
        code: `import { useCallback, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is recreated every render
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []);  // Function won't change

  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
}`,
        info: {
          type: 'note',
          content: 'useCallback is useful when passing functions to child components to prevent unnecessary re-renders.'
        }
      },
      {
        heading: 'useLayoutEffect',
        description: 'useLayoutEffect is like useEffect, but it runs synchronously after DOM mutations and before the browser paints.',
        code: `import { useLayoutEffect, useRef } from 'react';

function MeasureElement() {
  const divRef = useRef();

  useLayoutEffect(() => {
    // Measure the element before the browser paints
    const height = divRef.current.offsetHeight;
    console.log('Height:', height);
  }, []);

  return <div ref={divRef}>Content</div>;
}`,
        info: {
          type: 'warning',
          content: 'Use useLayoutEffect only when you need to measure DOM elements or make visual changes before the browser paints. Otherwise, use useEffect.'
        }
      },
      {
        heading: 'Custom Hooks',
        description: 'Custom hooks let you extract component logic into reusable functions. They must start with "use".',
        code: `import { useState, useEffect } from 'react';

// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserList() {
  const { data, loading, error } = useFetch('https://api.example.com/users');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}`,
        info: {
          type: 'tip',
          title: 'Custom Hook Benefits',
          content: 'Custom hooks help you reuse logic across components and keep your code clean and organized.'
        }
      }
    ]
  },
  {
    id: 'routing',
    title: 'React Router',
    subtitle: 'Navigation Between Pages',
    icon: '🌐',
    content: [
      {
        heading: 'What is React Router?',
        description: 'React Router enables navigation between different pages in your React app without reloading the page. It\'s essential for building multi-page applications.',
        code: `# Install React Router
npm install react-router-dom`
      },
      {
        heading: 'Basic Routing Setup',
        code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}`,
        info: {
          type: 'important',
          content: 'Always wrap your app in <BrowserRouter> at the top level.'
        }
      },
      {
        heading: 'Dynamic Routes (URL Parameters)',
        description: 'Dynamic routes let you create pages with variable URLs, like user profiles or product pages.',
        code: `import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserProfile() {
  const { userId } = useParams();  // Get the URL parameter
  
  return <h1>User Profile: {userId}</h1>;
}

// Visit: /user/123 → Shows "User Profile: 123"
// Visit: /user/456 → Shows "User Profile: 456"`,
        info: {
          type: 'tip',
          content: 'Use :paramName in the path and useParams() hook to access the value.'
        }
      },
      {
        heading: 'Nested Routes',
        description: 'Nested routes let you create layouts with shared components.',
        code: `import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      
      {/* Child routes render here */}
      <Outlet />
      
      <footer>Footer</footer>
    </div>
  );
}`
      },
      {
        heading: 'Protected Routes (Authentication)',
        description: 'Protect certain routes so only authenticated users can access them.',
        code: `import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// Usage
function App() {
  const isAuthenticated = false;  // Check if user is logged in

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}`,
        info: {
          type: 'important',
          content: 'Always redirect unauthenticated users to the login page before showing protected content.'
        }
      },
      {
        heading: '404 Not Found Page',
        code: `function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}`
      },
      {
        heading: 'Query Strings',
        description: 'Access URL query parameters like ?search=react&page=2',
        code: `import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const query = searchParams.get('search');  // Get 'search' parameter
  const page = searchParams.get('page');     // Get 'page' parameter

  return (
    <div>
      <p>Search: {query}</p>
      <p>Page: {page}</p>
      
      <button onClick={() => setSearchParams({ search: 'react', page: '1' })}>
        Search React
      </button>
    </div>
  );
}

// URL: /search?search=react&page=2`
      }
    ]
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    subtitle: 'Fetching & Managing Data',
    icon: '📡',
    content: [
      {
        heading: 'What is an API?',
        description: 'API (Application Programming Interface) is like a waiter in a restaurant - you tell it what you want, and it brings you the data from the server.',
        info: {
          type: 'note',
          content: 'Most modern apps use REST APIs to communicate with servers using HTTP requests.'
        }
      },
      {
        heading: 'Using Fetch API',
        description: 'Fetch is the built-in JavaScript way to make HTTP requests.',
        code: `import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`
      },
      {
        heading: 'Using Axios (Recommended)',
        description: 'Axios is a popular library that makes HTTP requests easier and cleaner.',
        code: `# Install Axios
npm install axios`,
        subsections: [
          {
            heading: 'GET Request',
            code: `import { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}`
          },
          {
            heading: 'POST Request',
            code: `import { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: 1
      });
      
      console.log('Created:', response.data);
      alert('Post created!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea 
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button type="submit">Create Post</button>
    </form>
  );
}`
          },
          {
            heading: 'DELETE Request',
            code: `import axios from 'axios';

function DeletePost({ postId }) {
  const handleDelete = async () => {
    try {
      await axios.delete(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`);
      alert('Post deleted!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
}`
          }
        ]
      },
      {
        heading: 'Loading States',
        description: 'Always show a loading indicator while data is being fetched.',
        code: `function DataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('API_URL');
      setData(response.data);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="spinner">
        <p>Loading...</p>
      </div>
    );
  }

  return <div>{/* Display data */}</div>;
}`,
        info: {
          type: 'tip',
          content: 'Use a spinner or skeleton screen for better UX during loading.'
        }
      },
      {
        heading: 'Error Handling',
        code: `function DataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('API_URL');
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <div>{/* Display data */}</div>;
}`
      },
      {
        heading: 'Pagination',
        code: `import { useState, useEffect } from 'react';
import axios from 'axios';

function PaginatedList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, [page]);

  const fetchItems = async () => {
    setLoading(true);
    const response = await axios.get(\`API_URL?page=\${page}&limit=10\`);
    setItems(response.data);
    setLoading(false);
  };

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <ul>
          {items.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      )}
      
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}`
      },
      {
        heading: 'Debouncing (Search Optimization)',
        description: 'Debouncing delays API calls until the user stops typing, reducing unnecessary requests.',
        code: `import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Wait 500ms after user stops typing
    const timer = setTimeout(() => {
      if (query) {
        searchAPI(query);
      }
    }, 500);

    // Cleanup: cancel the timer if query changes
    return () => clearTimeout(timer);
  }, [query]);

  const searchAPI = async (searchQuery) => {
    const response = await axios.get(\`API_URL?q=\${searchQuery}\`);
    setResults(response.data);
  };

  return (
    <div>
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}`,
        info: {
          type: 'important',
          content: 'Debouncing saves API calls and improves performance, especially for search features.'
        }
      }
    ]
  },
  {
    id: 'state-management',
    title: 'State Management',
    subtitle: 'Context API & Redux',
    icon: '🧠',
    content: [
      {
        heading: 'Why State Management?',
        description: 'When your app grows, passing props through many components becomes messy (called "prop drilling"). State management solutions solve this by providing global state.',
        info: {
          type: 'note',
          content: 'Think of it like a central warehouse where all components can access data instead of passing it hand-to-hand.'
        }
      },
      {
        heading: 'Context API',
        description: 'React\'s built-in solution for global state. Perfect for small to medium apps.',
        code: `import { createContext, useContext, useState } from 'react';

// 1. Create Context
const ThemeContext = createContext();

// 2. Create Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Use the Context
function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header className={theme}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  );
}`
      },
      {
        heading: 'Real-World Context Example: User Authentication',
        code: `import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    // Call your API
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    const userData = await response.json();
    setUser(userData);
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for easy access
export function useAuth() {
  return useContext(AuthContext);
}

// Usage in any component
function Profile() {
  const { user, logout } = useAuth();

  if (!user) return <p>Please login</p>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}`,
        info: {
          type: 'tip',
          content: 'Create custom hooks like useAuth() to make using Context easier throughout your app.'
        }
      },
      {
        heading: 'Context API Performance Issue',
        description: 'Context causes ALL components using it to re-render when ANY value changes. For large apps, use Redux.',
        info: {
          type: 'warning',
          content: 'If your context value changes frequently, it can cause performance issues. Split into multiple contexts if needed.'
        }
      },
      {
        heading: 'Redux Toolkit (Modern Redux)',
        description: 'Redux is the industry standard for complex state management. Redux Toolkit makes it much easier to use.',
        code: `# Install Redux Toolkit
npm install @reduxjs/toolkit react-redux`
      },
      {
        heading: 'Redux Setup',
        code: `// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// App.jsx
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}`
      },
      {
        heading: 'Creating a Slice',
        description: 'A slice is a piece of your Redux state with reducers and actions.',
        code: `// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;  // Redux Toolkit allows "mutating" code
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`
      },
      {
        heading: 'Using Redux in Components',
        code: `import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  // Read from Redux store
  const count = useSelector((state) => state.counter.value);
  
  // Get dispatch function
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}`,
        info: {
          type: 'important',
          content: 'useSelector reads state, useDispatch sends actions. Remember this pattern!'
        }
      },
      {
        heading: 'Async Actions with Thunks',
        description: 'For API calls and async logic, use createAsyncThunk.',
        code: `import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create async thunk
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await axios.get('https://api.example.com/users');
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default usersSlice.reducer;

// Usage in component
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';

function UserList() {
  const { list, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {list.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`
      },
      {
        heading: 'Redux DevTools',
        description: 'Redux DevTools let you see all state changes and time-travel debug your app.',
        code: `// Install browser extension: Redux DevTools
// It works automatically with Redux Toolkit!

// In your browser, you can:
// - See all actions dispatched
// - View state changes
// - Time travel (undo actions)
// - Replay actions`,
        info: {
          type: 'tip',
          content: 'Install Redux DevTools Chrome/Firefox extension for an amazing debugging experience!'
        }
      }
    ]
  },
  {
    id: 'styling',
    title: 'Styling in React',
    subtitle: 'CSS Modules, Styled Components, Tailwind',
    icon: '🎨',
    content: [
      {
        heading: 'Styling Methods Overview',
        points: [
          'CSS Modules: Scoped CSS that prevents class name conflicts',
          'Styled Components: Write CSS inside JavaScript',
          'Tailwind CSS: Utility-first CSS framework',
          'Material UI / Ant Design: Pre-built component libraries'
        ]
      },
      {
        heading: 'CSS Modules',
        description: 'CSS Modules automatically scope CSS to the component, preventing style conflicts.',
        code: `/* Button.module.css */
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

.button:hover {
  background-color: darkblue;
}

.primary {
  background-color: green;
}`,
        subsections: [
          {
            heading: 'Using CSS Modules',
            code: `// Button.jsx
import styles from './Button.module.css';

function Button({ children, primary }) {
  return (
    <button className={\`\${styles.button} \${primary ? styles.primary : ''}\`}>
      {children}
    </button>
  );
}

// Usage
<Button>Normal Button</Button>
<Button primary>Primary Button</Button>`
          }
        ],
        info: {
          type: 'tip',
          content: 'CSS Modules are great for traditional CSS lovers who want scoping without learning new syntax.'
        }
      },
      {
        heading: 'Styled Components',
        description: 'Write CSS directly in your JavaScript files using template literals.',
        code: `# Install styled-components
npm install styled-components`,
        subsections: [
          {
            heading: 'Basic Usage',
            code: `import styled from 'styled-components';

// Create styled component
const Button = styled.button\`
  background-color: \${props => props.primary ? 'green' : 'blue'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
\`;

// Usage
function App() {
  return (
    <div>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </div>
  );
}`
          },
          {
            heading: 'With Props',
            code: `const Card = styled.div\`
  padding: 20px;
  background: \${props => props.dark ? '#333' : '#fff'};
  color: \${props => props.dark ? '#fff' : '#000'};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
\`;

// Usage
<Card>Light Card</Card>
<Card dark>Dark Card</Card>`
          }
        ]
      },
      {
        heading: 'Tailwind CSS',
        description: 'Utility-first CSS framework. Style elements using pre-defined classes.',
        code: `# Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init`,
        subsections: [
          {
            heading: 'Using Tailwind Classes',
            code: `function Button({ children, variant = 'primary' }) {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  return (
    <button className={\`\${baseClasses} \${variantClasses[variant]}\`}>
      {children}
    </button>
  );
}

// Usage
<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Delete</Button>`
          },
          {
            heading: 'Responsive Design',
            code: `function Card() {
  return (
    <div className="
      w-full           /* Full width on mobile */
      md:w-1/2         /* Half width on tablets */
      lg:w-1/3         /* Third width on desktop */
      p-4              /* Padding */
      bg-white         /* Background */
      rounded-lg       /* Rounded corners */
      shadow-lg        /* Shadow */
    ">
      <h2 className="text-xl md:text-2xl lg:text-3xl">
        Responsive Title
      </h2>
    </div>
  );
}`,
            info: {
              type: 'tip',
              content: 'Tailwind prefixes: sm: (640px), md: (768px), lg: (1024px), xl: (1280px)'
            }
          }
        ]
      },
      {
        heading: 'Material UI',
        description: 'Pre-built React components following Google\'s Material Design.',
        code: `# Install Material UI
npm install @mui/material @emotion/react @emotion/styled`,
        subsections: [
          {
            heading: 'Using MUI Components',
            code: `import { Button, TextField, Card, CardContent } from '@mui/material';

function Form() {
  return (
    <Card>
      <CardContent>
        <TextField 
          label="Email" 
          variant="outlined" 
          fullWidth 
          sx={{ mb: 2 }}
        />
        <TextField 
          label="Password" 
          type="password" 
          variant="outlined" 
          fullWidth 
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </CardContent>
    </Card>
  );
}`
          }
        ]
      },
      {
        heading: 'Dark Mode Implementation',
        code: `import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem('darkMode');
    if (saved) setDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Add/remove class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

// Usage
function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <button onClick={toggleDarkMode}>
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}`,
        info: {
          type: 'important',
          content: 'Always persist dark mode preference in localStorage so users don\'t have to toggle it every visit.'
        }
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing React Apps',
    subtitle: 'Jest & React Testing Library',
    icon: '🧪',
    content: [
      {
        heading: 'Why Testing Matters',
        description: 'Testing ensures your app works correctly and prevents bugs when you make changes. It\'s crucial for getting hired!',
        points: [
          'Catch bugs before users do',
          'Refactor code with confidence',
          'Document how your code should work',
          'Required skill for most React jobs'
        ]
      },
      {
        heading: 'Testing Tools',
        points: [
          'Jest: JavaScript testing framework (test runner)',
          'React Testing Library: Tests React components the way users interact with them',
          'Both come pre-installed with Create React App and Vite'
        ]
      },
      {
        heading: 'Unit Testing - Testing Functions',
        code: `// sum.js
export function sum(a, b) {
  return a + b;
}

// sum.test.js
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
  expect(sum(5, 7)).toBe(12);
});`,
        info: {
          type: 'note',
          content: 'Test files should end with .test.js or .spec.js'
        }
      },
      {
        heading: 'Component Testing',
        description: 'Test components by rendering them and checking if they work correctly.',
        code: `// Button.jsx
export function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

// Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button>Click Me</Button>);
  
  const button = screen.getByText('Click Me');
  expect(button).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();  // Mock function
  render(<Button onClick={handleClick}>Click Me</Button>);
  
  const button = screen.getByText('Click Me');
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});`,
        info: {
          type: 'important',
          content: 'Test user interactions, not implementation details. Focus on what users see and do.'
        }
      },
      {
        heading: 'Testing User Interactions',
        code: `// Counter.jsx
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Counter.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test('increments count when button is clicked', () => {
  render(<Counter />);
  
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
  
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
  
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText('Count: 2')).toBeInTheDocument();
});

test('resets count to 0', () => {
  render(<Counter />);
  
  fireEvent.click(screen.getByText('Increment'));
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText('Count: 2')).toBeInTheDocument();
  
  fireEvent.click(screen.getByText('Reset'));
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
});`
      },
      {
        heading: 'Testing Forms',
        code: `// LoginForm.jsx
import { useState } from 'react';

export function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

// LoginForm.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';

test('submits form with email and password', () => {
  const mockSubmit = jest.fn();
  render(<LoginForm onSubmit={mockSubmit} />);
  
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const submitButton = screen.getByText('Login');
  
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(submitButton);
  
  expect(mockSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});`
      },
      {
        heading: 'Mocking API Calls',
        description: 'Don\'t make real API calls in tests. Use mocks instead.',
        code: `// UserList.jsx
import { useEffect, useState } from 'react';

export function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// UserList.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import { UserList } from './UserList';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ])
  })
);

test('loads and displays users', async () => {
  render(<UserList />);
  
  // Initially shows loading
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  // Wait for users to load
  await waitFor(() => {
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });
});`,
        info: {
          type: 'important',
          content: 'Use waitFor() for async operations. Never use real API calls in tests!'
        }
      },
      {
        heading: 'Snapshot Testing',
        description: 'Snapshot tests capture the component\'s output and alert you if it changes.',
        code: `import { render } from '@testing-library/react';
import { Button } from './Button';

test('matches snapshot', () => {
  const { container } = render(<Button>Click Me</Button>);
  expect(container).toMatchSnapshot();
});

// First run creates a snapshot file
// Future runs compare against the snapshot
// If different, test fails (update with 'u' if intentional)`,
        info: {
          type: 'warning',
          content: 'Don\'t overuse snapshots. They can give false confidence. Prefer specific assertions.'
        }
      },
      {
        heading: 'Running Tests',
        code: `# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test Button.test.jsx`
      }
    ]
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    subtitle: 'Making React Apps Faster',
    icon: '⚡',
    content: [
      {
        heading: 'Why Performance Matters',
        description: 'Slow apps frustrate users and hurt your business. Performance optimization ensures your app runs smoothly even with complex data.',
        info: {
          type: 'note',
          content: 'Only optimize when you have a performance problem. Don\'t prematurely optimize!'
        }
      },
      {
        heading: 'React.memo - Prevent Unnecessary Re-renders',
        description: 'React.memo prevents a component from re-rendering if its props haven\'t changed.',
        code: `import { memo } from 'react';

// Without memo: Re-renders every time parent re-renders
function ExpensiveComponent({ data }) {
  console.log('Rendering ExpensiveComponent');
  return <div>{data}</div>;
}

// With memo: Only re-renders when data changes
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  console.log('Rendering ExpensiveComponent');
  return <div>{data}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const data = "Hello";

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {/* ExpensiveComponent won't re-render when count changes */}
      <ExpensiveComponent data={data} />
    </div>
  );
}`,
        info: {
          type: 'tip',
          content: 'Use React.memo for expensive components that render often with the same props.'
        }
      },
      {
        heading: 'useMemo - Memoize Expensive Calculations',
        description: 'useMemo caches calculation results and only recalculates when dependencies change.',
        code: `import { useMemo, useState } from 'react';

function ProductList({ products }) {
  const [filter, setFilter] = useState('');

  // Without useMemo: Filters on EVERY render (slow!)
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  // With useMemo: Only filters when products or filter changes
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(p => 
      p.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]);

  return (
    <div>
      <input 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search..."
      />
      {filteredProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}`,
        info: {
          type: 'important',
          content: 'Only use useMemo for expensive calculations (loops, filtering large arrays). Simple operations don\'t need it.'
        }
      },
      {
        heading: 'useCallback - Memoize Functions',
        description: 'useCallback prevents functions from being recreated on every render.',
        code: `import { useCallback, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Without useCallback: New function on every render
  const handleClick = () => {
    console.log('Clicked!');
  };

  // With useCallback: Same function unless dependencies change
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []);  // No dependencies = function never changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

const ChildComponent = memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});`,
        info: {
          type: 'note',
          content: 'useCallback is most useful when passing functions to memoized child components.'
        }
      },
      {
        heading: 'Code Splitting & Lazy Loading',
        description: 'Load components only when needed instead of loading everything at once.',
        code: `import { lazy, Suspense } from 'react';

// Instead of: import Dashboard from './Dashboard';
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('dashboard')}>Dashboard</button>
        <button onClick={() => setPage('settings')}>Settings</button>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        {page === 'home' && <Home />}
        {page === 'dashboard' && <Dashboard />}
        {page === 'settings' && <Settings />}
      </Suspense>
    </div>
  );
}`,
        info: {
          type: 'tip',
          title: 'When to Use',
          content: 'Use lazy loading for routes, modals, and heavy components that aren\'t needed immediately.'
        }
      },
      {
        heading: 'Virtualization - Rendering Large Lists',
        description: 'For lists with thousands of items, only render what\'s visible on screen.',
        code: `# Install react-window
npm install react-window

import { FixedSizeList } from 'react-window';

function LargeList({ items }) {
  // Render row component
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={600}        // Height of the list container
      itemCount={items.length}  // Total number of items
      itemSize={50}       // Height of each item
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// Instead of rendering 10,000 items, only renders ~12 visible items!`,
        info: {
          type: 'important',
          content: 'Use virtualization when rendering 100+ items. It dramatically improves performance!'
        }
      },
      {
        heading: 'Avoiding Unnecessary Re-renders',
        description: 'Common mistakes that cause components to re-render unnecessarily.',
        code: `function Parent() {
  const [count, setCount] = useState(0);

  // ❌ BAD: Creates new object every render
  const user = { name: 'John', age: 30 };

  // ✅ GOOD: Move outside component or use useMemo
  const user = useMemo(() => ({ name: 'John', age: 30 }), []);

  // ❌ BAD: Creates new array every render
  const items = [1, 2, 3];

  // ✅ GOOD: Move outside component
  const items = [1, 2, 3];

  // ❌ BAD: Inline function in prop
  return <Child onClick={() => console.log('clicked')} />;

  // ✅ GOOD: Use useCallback
  const handleClick = useCallback(() => console.log('clicked'), []);
  return <Child onClick={handleClick} />;
}`,
        info: {
          type: 'warning',
          title: 'Common Mistake',
          content: 'Creating objects/arrays/functions inside render causes child components to re-render even with React.memo!'
        }
      },
      {
        heading: 'Debouncing & Throttling',
        description: 'Limit how often functions execute, especially for expensive operations.',
        code: `import { useState, useCallback } from 'react';

// Debounce: Wait until user stops typing
function SearchInput() {
  const [query, setQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((value) => {
      // API call here
      console.log('Searching:', value);
    }, 500),
    []
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return <input value={query} onChange={handleChange} />;
}

// Helper function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}`,
        info: {
          type: 'tip',
          content: 'Debounce for search inputs, throttle for scroll/resize events. Both save API calls and improve performance.'
        }
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication & Security',
    subtitle: 'User Login & Protected Routes',
    icon: '🔐',
    content: [
      {
        heading: 'JWT Authentication Basics',
        description: 'JWT (JSON Web Token) is the most common way to handle authentication in React apps. The server sends a token after login, and you include it in future requests.',
        info: {
          type: 'note',
          content: 'JWT is like a ticket - the server gives you a ticket when you login, and you show this ticket for every request.'
        }
      },
      {
        heading: 'Login Flow',
        code: `import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://api.example.com/login', {
        email,
        password
      });
      
      // Store token
      localStorage.setItem('token', response.data.token);
      
      // Store user info
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      
      <button type="submit">Login</button>
    </form>
  );
}`
      },
      {
        heading: 'Auth Context for Global State',
        code: `import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('/api/login', { email, password });
    
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    
    setUser(response.data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

// Wrap your app
function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Your routes */}
      </Routes>
    </AuthProvider>
  );
}`
      },
      {
        heading: 'Protected Routes',
        description: 'Prevent unauthenticated users from accessing certain pages.',
        code: `import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Usage in routes
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Protected routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}`,
        info: {
          type: 'important',
          content: 'Always check authentication on the backend too! Frontend checks can be bypassed.'
        }
      },
      {
        heading: 'Making Authenticated API Requests',
        description: 'Include the JWT token in API requests to access protected endpoints.',
        code: `import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: 'https://api.example.com'
});

// Add token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Usage
function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/dashboard-data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return <div>{/* Display data */}</div>;
}`,
        info: {
          type: 'tip',
          content: 'Use Axios interceptors to automatically add tokens to all requests. This keeps your code DRY.'
        }
      },
      {
        heading: 'Role-Based Access Control',
        description: 'Different users see different content based on their role (admin, user, etc.).',
        code: `function RoleBasedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

// Usage
<Route 
  path="/admin" 
  element={
    <RoleBasedRoute allowedRoles={['admin']}>
      <AdminPanel />
    </RoleBasedRoute>
  } 
/>

<Route 
  path="/dashboard" 
  element={
    <RoleBasedRoute allowedRoles={['admin', 'user']}>
      <Dashboard />
    </RoleBasedRoute>
  } 
/>`
      },
      {
        heading: 'Token Storage: localStorage vs Cookies',
        description: 'Where to store JWT tokens? Both have pros and cons.',
        points: [
          'localStorage: Easy to use, but vulnerable to XSS attacks',
          'httpOnly Cookies: More secure, immune to XSS, but needs backend setup',
          'Best practice: Use httpOnly cookies for tokens, localStorage for non-sensitive data'
        ],
        info: {
          type: 'warning',
          title: 'Security Warning',
          content: 'Never store sensitive data (passwords, credit cards) in localStorage or cookies. Only store tokens and non-sensitive user info.'
        }
      },
      {
        heading: 'Security Best Practices',
        points: [
          'Always use HTTPS in production',
          'Validate and sanitize all user inputs',
          'Never trust data from the client',
          'Implement rate limiting for login attempts',
          'Use strong password requirements',
          'Enable two-factor authentication when possible',
          'Keep tokens short-lived and refresh them',
          'Log out users after inactivity',
          'Don\'t expose sensitive data in error messages'
        ],
        info: {
          type: 'important',
          content: 'Security is a shared responsibility between frontend and backend. Never rely on frontend validation alone!'
        }
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced React Concepts',
    subtitle: 'SSR, SSG, Next.js & More',
    icon: '🚀',
    content: [
      {
        heading: 'Server Side Rendering (SSR)',
        description: 'SSR renders your React app on the server and sends HTML to the browser. This improves SEO and initial load time.',
        points: [
          'Good for SEO - search engines can read your content',
          'Faster initial page load',
          'Better for social media sharing (preview images work)',
          'More server resources needed'
        ],
        info: {
          type: 'note',
          content: 'Regular React apps are CSR (Client Side Rendering) - the browser gets empty HTML and JavaScript builds the page.'
        }
      },
      {
        heading: 'Static Site Generation (SSG)',
        description: 'SSG generates HTML pages at build time. Super fast because pages are pre-built.',
        points: [
          'Blazing fast - pages are already built',
          'Great for blogs, documentation, marketing sites',
          'Perfect SEO',
          'Can\'t show real-time data'
        ]
      },
      {
        heading: 'Next.js - React Framework',
        description: 'Next.js is the most popular React framework with built-in SSR, SSG, routing, and more.',
        code: `# Create a Next.js app
npx create-next-app@latest my-app

# Navigate to your project
cd my-app

# Start the dev server
npm run dev`,
        info: {
          type: 'tip',
          content: 'Next.js is used by Netflix, TikTok, Twitch, and thousands of companies. It\'s essential for modern React development.'
        }
      },
      {
        heading: 'Next.js Pages',
        description: 'Next.js uses file-based routing. Create a file, get a route!',
        code: `// pages/index.js → Homepage (/)
export default function Home() {
  return <h1>Home Page</h1>;
}

// pages/about.js → About page (/about)
export default function About() {
  return <h1>About Page</h1>;
}

// pages/blog/[id].js → Dynamic route (/blog/1, /blog/2, etc.)
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  
  return <h1>Blog Post {id}</h1>;
}`
      },
      {
        heading: 'Next.js Data Fetching',
        code: `// SSG: getStaticProps - Runs at build time
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    props: { posts }
  };
}

export default function Blog({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

// SSR: getServerSideProps - Runs on every request
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/users');
  const users = await res.json();

  return {
    props: { users }
  };
}`,
        info: {
          type: 'important',
          content: 'Use getStaticProps for data that doesn\'t change often. Use getServerSideProps for real-time data.'
        }
      },
      {
        heading: 'SEO in React',
        description: 'Make your React app search engine friendly.',
        code: `// Using react-helmet for SEO
npm install react-helmet

import { Helmet } from 'react-helmet';

function BlogPost({ post }) {
  return (
    <>
      <Helmet>
        <title>{post.title} - My Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
      </Helmet>
      
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </>
  );
}`,
        info: {
          type: 'tip',
          content: 'In Next.js, use the built-in <Head> component instead of react-helmet.'
        }
      },
      {
        heading: 'Internationalization (i18n)',
        description: 'Support multiple languages in your app.',
        code: `# Install react-i18next
npm install react-i18next i18next

// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome',
        greeting: 'Hello, {{name}}!'
      }
    },
    es: {
      translation: {
        welcome: 'Bienvenido',
        greeting: '¡Hola, {{name}}!'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en'
});

// Usage
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('greeting', { name: 'John' })}</p>
      
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('es')}>Español</button>
    </div>
  );
}`
      },
      {
        heading: 'WebSockets - Real-Time Apps',
        description: 'WebSockets enable real-time communication between client and server. Perfect for chat apps, notifications, live updates.',
        code: `import { useEffect, useState } from 'react';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Connect to WebSocket server
    const websocket = new WebSocket('ws://localhost:3000');

    websocket.onopen = () => {
      console.log('Connected to WebSocket');
    };

    websocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages(prev => [...prev, message]);
    };

    websocket.onclose = () => {
      console.log('Disconnected from WebSocket');
    };

    setWs(websocket);

    // Cleanup
    return () => {
      websocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && input) {
      ws.send(JSON.stringify({ text: input, user: 'You' }));
      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, i) => (
          <div key={i}>{msg.user}: {msg.text}</div>
        ))}
      </div>
      
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}`,
        info: {
          type: 'tip',
          content: 'For production, use Socket.io instead of raw WebSockets. It handles reconnection, fallbacks, and more.'
        }
      },
      {
        heading: 'Micro-Frontends',
        description: 'Split your large app into smaller, independent apps that work together.',
        points: [
          'Each team owns a separate micro-app',
          'Deploy independently',
          'Use different frameworks if needed',
          'Complex to set up, great for large teams'
        ],
        info: {
          type: 'note',
          content: 'Micro-frontends are like microservices but for the frontend. Only needed for very large applications with multiple teams.'
        }
      }
    ]
  },
  {
    id: 'tooling',
    title: 'Tooling & Best Practices',
    subtitle: 'Git, ESLint, Prettier & More',
    icon: '🛠️',
    content: [
      {
        heading: 'Git & GitHub Basics',
        description: 'Version control is essential for tracking changes and collaborating with others.',
        code: `# Initialize a git repository
git init

# Check status
git status

# Add files to staging
git add .

# Commit changes
git commit -m "Add login feature"

# Create a new branch
git checkout -b feature/new-feature

# Switch between branches
git checkout main

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# See commit history
git log`
      },
      {
        heading: 'ESLint - Code Quality',
        description: 'ESLint finds and fixes problems in your JavaScript code.',
        code: `# Install ESLint
npm install --save-dev eslint

# Initialize ESLint
npx eslint --init

# Run ESLint
npx eslint src/

# Auto-fix issues
npx eslint src/ --fix`,
        subsections: [
          {
            heading: 'ESLint Config Example',
            code: `// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "no-console": "warn"
  }
}`,
            language: 'json'
          }
        ]
      },
      {
        heading: 'Prettier - Code Formatting',
        description: 'Prettier automatically formats your code to keep it consistent.',
        code: `# Install Prettier
npm install --save-dev prettier

# Create config file
echo {} > .prettierrc.json

# Format all files
npx prettier --write .`,
        subsections: [
          {
            heading: 'Prettier Config',
            code: `// .prettierrc.json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}`,
            language: 'json'
          }
        ],
        info: {
          type: 'tip',
          content: 'Use Prettier with ESLint for the best experience. Prettier formats, ESLint catches bugs.'
        }
      },
      {
        heading: 'Environment Variables',
        description: 'Store API keys and sensitive data in environment variables, not in your code.',
        code: `# Create .env file in project root
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your_api_key_here

# For Vite projects, use VITE_ prefix
VITE_API_URL=https://api.example.com

# Access in your code
// Create React App
const apiUrl = process.env.REACT_APP_API_URL;

// Vite
const apiUrl = import.meta.env.VITE_API_URL;

// Usage
axios.get(\`\${apiUrl}/users\`)`,
        info: {
          type: 'warning',
          title: 'Important',
          content: 'Add .env to .gitignore! Never commit API keys to GitHub. Create .env.example without real values for your team.'
        }
      },
      {
        heading: 'Folder Structure for Large Apps',
        code: `src/
├── components/           # Reusable components
│   ├── common/          # Buttons, Inputs, etc.
│   ├── layout/          # Header, Footer, Sidebar
│   └── features/        # Feature-specific components
│
├── pages/               # Page components
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Home.module.css
│   │   └── index.js
│   └── Dashboard/
│
├── hooks/               # Custom hooks
│   ├── useAuth.js
│   └── useFetch.js
│
├── context/             # Context providers
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
│
├── services/            # API calls
│   ├── api.js
│   └── authService.js
│
├── utils/               # Helper functions
│   ├── formatDate.js
│   └── validation.js
│
├── constants/           # Constants
│   └── apiEndpoints.js
│
├── store/               # Redux store (if using Redux)
│   ├── store.js
│   └── slices/
│
└── App.jsx`
      },
      {
        heading: 'Deployment - Netlify',
        description: 'Deploy your React app to the internet for free!',
        code: `# Build your app
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod

# Or connect GitHub:
# 1. Push code to GitHub
# 2. Go to netlify.com
# 3. Click "New site from Git"
# 4. Select your repository
# 5. Build command: npm run build
# 6. Publish directory: build (or dist for Vite)`,
        info: {
          type: 'tip',
          content: 'Netlify auto-deploys when you push to GitHub. Every commit creates a new deployment!'
        }
      },
      {
        heading: 'Deployment - Vercel',
        description: 'Vercel is perfect for Next.js apps (made by the same team!).',
        code: `# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod

# Or connect GitHub:
# 1. Go to vercel.com
# 2. Import your GitHub repository
# 3. Auto-detected framework
# 4. Click Deploy`
      },
      {
        heading: 'CI/CD Basics',
        description: 'Continuous Integration/Deployment automatically tests and deploys your code.',
        code: `# GitHub Actions example (.github/workflows/deploy.yml)
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Install dependencies
        run: npm install
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod
        env:
          NETLIFY_SITE_ID: \${{ secrets.NETLIFY_SITE_ID }}
          NETLIFY_AUTH_TOKEN: \${{ secrets.NETLIFY_AUTH_TOKEN }}`,
        language: 'yaml'
      }
    ]
  },
  {
    id: 'projects',
    title: 'Practice Projects',
    subtitle: 'Build Real Applications',
    icon: '📁',
    content: [
      {
        heading: 'Why Projects Matter',
        description: 'Building projects is the best way to learn React. Tutorials teach concepts, but projects teach problem-solving.',
        points: [
          'Solidify your knowledge',
          'Build a portfolio for job applications',
          'Learn to debug and solve real problems',
          'Understand how features work together'
        ]
      },
      {
        heading: 'Beginner Projects',
        subsections: [
          {
            heading: '1. Todo App',
            description: 'Classic beginner project covering all React basics.',
            points: [
              'useState for managing todos',
              'Add, delete, and mark todos as complete',
              'Filter todos (all, active, completed)',
              'localStorage to persist data',
              'Bonus: Dark mode toggle'
            ],
            info: {
              type: 'tip',
              content: 'Start here! This covers 80% of React basics in one project.'
            }
          },
          {
            heading: '2. Counter App',
            description: 'Simple but great for understanding state.',
            points: [
              'Increment, decrement, reset buttons',
              'Custom increment amount',
              'Max/min limits',
              'Bonus: Multiple counters'
            ]
          },
          {
            heading: '3. Weather App',
            description: 'Your first API integration project.',
            points: [
              'Fetch weather data from OpenWeather API',
              'Search by city name',
              'Display temperature, humidity, conditions',
              'Show weather icon',
              'Loading and error states',
              'Bonus: 5-day forecast'
            ],
            code: `// Example API call
const API_KEY = 'your_api_key';
const city = 'London';

fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}\`)
  .then(res => res.json())
  .then(data => console.log(data));`
          }
        ]
      },
      {
        heading: 'Intermediate Projects',
        subsections: [
          {
            heading: '4. Movie Search App',
            points: [
              'Search movies using OMDB or TMDB API',
              'Display movie cards with posters',
              'Movie details page (routing)',
              'Favorites/Watchlist feature',
              'Filter by genre, year',
              'Pagination'
            ]
          },
          {
            heading: '5. E-commerce Product Page',
            points: [
              'Product list with images and prices',
              'Add to cart functionality',
              'Cart page with total calculation',
              'Quantity increase/decrease',
              'Remove from cart',
              'Context API for cart state',
              'Bonus: Checkout form'
            ]
          },
          {
            heading: '6. Social Media Dashboard',
            points: [
              'User authentication (login/signup)',
              'Create posts',
              'Like and comment',
              'User profile page',
              'Protected routes',
              'Real-time updates (optional: WebSockets)'
            ]
          }
        ]
      },
      {
        heading: 'Advanced Projects',
        subsections: [
          {
            heading: '7. Task Management App (Trello Clone)',
            points: [
              'Drag and drop tasks between columns',
              'Create boards and lists',
              'Add, edit, delete tasks',
              'User authentication',
              'Real-time collaboration',
              'Use react-beautiful-dnd for drag & drop'
            ]
          },
          {
            heading: '8. Chat Application',
            points: [
              'Real-time messaging with WebSockets',
              'User authentication',
              'Multiple chat rooms',
              'Online/offline status',
              'Message history',
              'Typing indicators',
              'Use Socket.io'
            ]
          },
          {
            heading: '9. Full-Stack Blog',
            points: [
              'Next.js for SSR/SSG',
              'Create, edit, delete posts',
              'Markdown support',
              'Comments system',
              'User authentication',
              'Admin dashboard',
              'SEO optimized',
              'Deploy to Vercel'
            ]
          }
        ]
      },
      {
        heading: 'Project Tips',
        points: [
          'Start small, then add features',
          'Use Git from day 1 - commit often',
          'Write a README with screenshots',
          'Deploy your projects (Netlify/Vercel)',
          'Share on LinkedIn and GitHub',
          'Don\'t worry about perfection - shipped is better than perfect',
          'Get feedback from developers'
        ],
        info: {
          type: 'important',
          title: 'Portfolio Tip',
          content: '3-5 quality projects > 20 basic projects. Focus on making a few projects really good with clean code, good UI, and deployed live.'
        }
      },
      {
        heading: 'Free APIs for Practice',
        points: [
          'JSONPlaceholder - Fake REST API for testing',
          'OpenWeather API - Weather data',
          'TMDB API - Movies and TV shows',
          'NewsAPI - Latest news articles',
          'REST Countries - Country information',
          'PokeAPI - Pokemon data',
          'GitHub API - Repository and user data',
          'CoinGecko API - Cryptocurrency prices'
        ]
      }
    ]
  }
];
