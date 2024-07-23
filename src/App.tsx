import { useState } from 'react';
import './App.scss'; 
import WebApp from '@twa-dev/sdk';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>My Telegram Mini App</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Увеличить счётчик: {count}
      </button>
      <button onClick={() => WebApp.showAlert(`Счётчик: ${count}`)}>
        Показать уведомление
      </button>
    </div>
  );
}

export default App;
