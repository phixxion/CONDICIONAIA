import { useState } from 'react';

export default function Home() {
  const [ramo, setRamo] = useState('hogar');
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = async () => {
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ramo, query }),
    });
    const data = await res.json();
    setResponse(data.result);
  };

  return (
    <main style={{ padding: 24, maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>CondicionIA</h1>
      <select
        value={ramo}
        onChange={(e) => setRamo(e.target.value)}
        style={{ marginTop: 12, padding: 8, width: '100%' }}
      >
        <option value="hogar">Generali Hogar</option>
        <option value="comercio">Generali Comercio</option>
        <option value="auto">Generali Auto</option>
      </select>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="¿Me cubre el cerrajero?"
        rows={4}
        style={{ width: '100%', marginTop: 12 }}
      />
      <button onClick={handleAsk} style={{ marginTop: 12 }}>
        Consultar IA
      </button>
      <pre style={{ marginTop: 24 }}>{response}</pre>
    </main>
  );
}