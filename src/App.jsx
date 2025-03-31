import { useState } from "react";

import MessagesView from "./components/MessagesView";
import MessageForm from "./components/MessageForm";

function App() {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <MessageForm message={selected} onComplete={() => setSelected(null)} />
    );
  }

  return (
    <main className="max-w-screen-xl mx-auto p-6 space-y-6">
      <button
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition"
        onClick={() => setSelected({})}
      >
        Create Message
      </button>
      <h1 className="text-3xl font-bold text-gray-800">SWIFT Message Manager</h1>
      <MessagesView onEdit={setSelected} />
    </main>
  );
}

export default App;
