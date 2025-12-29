type Props = {
  services: any[];
};

export default function CatalogTable({ services }: Props) {
  return (
    <div className="bg-white border rounded shadow">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-3 text-left">Service</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {services.map((s) => (
            <tr key={s._id} className="border-b">
              <td className="p-3 font-medium">{s.name}</td>
              <td className="p-3 capitalize">{s.category}</td>
              <td className="p-3 text-gray-600">{s.description}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    s.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {s.isActive ? "Active" : "Inactive"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
