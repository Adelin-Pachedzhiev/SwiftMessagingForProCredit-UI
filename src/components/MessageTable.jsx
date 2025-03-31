import MessageRow from "./MessageRow";


export default function MessageTable({messages, renderActions}){
    return (
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full border border-gray-300 min-w-[900px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left min-w-[40px] border border-gray-300">ID</th>
                <th className="p-3 text-left min-w-[200px] border border-gray-300">Basic header</th>
                <th className="p-3 text-left min-w-[300px] border border-gray-300">Application header</th>
                <th className="p-3 text-left min-w-[200px] border border-gray-300">User header</th>
                <th className="p-3 text-left min-w-[400px] border border-gray-300">Text</th>
                <th className="p-3 text-left min-w-[200px] border border-gray-300">Trailer</th>
                {renderActions && (
                  <th className="p-3 text-left min-w-[120px] border border-gray-300">Actions</th>
                )}
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <MessageRow key={msg.id} message={msg}>
                  {renderActions && renderActions(msg)}
                </MessageRow>
              ))}
            </tbody>
          </table>
        </div>
      );
}