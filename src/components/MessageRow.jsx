
export default function MessageRow({ message, children }) {
  return (
    <tr className="border-b hover:bg-gray-50" key={message.id}>
      <td className="p-2 border border-gray-300">{message.id}</td>
      <td className="p-2 border border-gray-300">{message.basicHeader}</td>
      <td className="p-2 border border-gray-300">{message.applicationHeader}</td>
      <td className="p-2 border border-gray-300">{message.userHeader}</td>
      <td className="p-2 border border-gray-300">{message.text}</td>
      <td className="p-2 border border-gray-300">{message.trailer}</td>
      {children}
    </tr>
  );
}
