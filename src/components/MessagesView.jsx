import { useEffect, useState } from "react";
import swiftService from "../services/swiftService";
import MessageTable from "./MessageTable";

const MessagesView = ({ onEdit }) => {
  const [messages, setMessages] = useState([]);

  const load = async () => {
    const res = await swiftService.getAllMessages();
    setMessages(res.data);
  };

  const handleDelete = async (id) => {
    await swiftService.deleteMessage(id);
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <MessageTable
      messages={messages}
      renderActions={(msg) => (
        <td className="text-center align-middle">
          <button onClick={() => onEdit(msg)} className="bg-blue-600 hover:bg-blue-700 text-white my-1 px-4 py-2 rounded shadow transition">
            Edit
          </button>
          <button onClick={() => handleDelete(msg.id)} className="bg-green-600 hover:bg-green-700 text-white my-1 px-4 py-2 rounded shadow transition">
            Delete
          </button>
        </td>
      )}
    />
  );
};
export default MessagesView;
