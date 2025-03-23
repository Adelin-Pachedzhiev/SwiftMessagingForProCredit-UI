import { useEffect, useState } from "react";
import swiftService from "../services/swiftService";
import MessageView from "./MessageView";

const MessageList = ({ onEdit }) => {
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
    <div className="max-w-screen-xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full min-w-[900px] border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left min-w-[40px]">ID</th>
              <th className="p-3 text-left min-w-[200px]">Basic header</th>
              <th className="p-3 text-left min-w-[300px]">
                Application header
              </th>
              <th className="p-3 text-left min-w-[200px]">User header</th>
              <th className="p-3 text-left min-w-[400px]">Text</th>
              <th className="p-3 text-left min-w-[200px]">Trailer</th>
              <th className="p-3 text-left min-w-[120px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <MessageView key={msg.id} message={msg}>
                <td className="p-3 text-left border border-gray-300">
                  <button
                    onClick={() => onEdit(msg)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition"
                  >
                    Delete
                  </button>
                </td>
              </MessageView>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MessageList;
