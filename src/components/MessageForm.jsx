import { useState } from "react";
import swiftService from "../services/swiftService";
import MessageView from "./MessageView";

export default function MessageForm({ onComplete, message }) {
  const [file, setFile] = useState(null);
  const [parsedMessage, setParsedMessage] = useState(null);
  const isEditing = message?.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    if (isEditing) {
      await swiftService.updateMessage(message.id, file);
    } else {
      await swiftService.insertMessage(file);
    }

    onComplete();
  };

  const onChangedFile = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const res = await swiftService.parseFile(selectedFile);
      setParsedMessage(res.data);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={onChangedFile} className="block mb-4" />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700 transition"
        >
          {isEditing ? "Update" : "Create"} Message
        </button>
        <button
          type="button"
          onClick={onComplete}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </form>
      <div>
        {parsedMessage && (
          <div>
            <h3 className="text-lg font-semibold mt-6 mb-2">Parsed Message</h3>
            <MessageView message={parsedMessage} />
          </div>
        )}
      </div>
    </div>
  );
}
