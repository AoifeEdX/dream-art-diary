// DreamForm.jsx
import { useState } from 'react';

function DreamForm({ onSubmitDream }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const dream = { title, date, description };
    onSubmitDream(dream);
    setTitle('');
    setDate('');
    setDescription('');
  };

  return (
    <div id="paper">
      <div id="pattern">
        <div id="content" className="p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Add New Dream</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block mb-1">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block mb-1">Date:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block mb-1">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">Add Dream</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DreamForm;
