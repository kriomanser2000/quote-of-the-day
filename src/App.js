import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
function App()
{
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const fetchQuote = async () => 
  {
    try 
    {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) 
    {
      console.error("Error fetching the quote", error);
      setQuote('Could not fetch the quote. Please try again later.');
      setAuthor('');
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote of the Day</h1>
        <button onClick={fetchQuote}>Get Quote</button>
        {quote && (
          <div>
            <p>"{quote}"</p>
            <p><em>- {author}</em></p>
          </div>
        )}
      </header>
    </div>
  );
}
export default App;