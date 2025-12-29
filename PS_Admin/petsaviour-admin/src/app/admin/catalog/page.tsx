// "use client";

// import { useEffect, useState } from "react";
// import { getServiceCatalog, getServiceCategories } from "../../../services/catalog.service";

// import CategoryFilter from "./components/CategoryFilter";
// import CatalogTable from "./components/CatalogTable";

// export default function CatalogPage() {
//   const [services, setServices] = useState<any[]>([]);
//   const [categories, setCategories] = useState<any[]>([]);
//   const [category, setCategory] = useState<string>("all");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const load = async () => {
//       const [catalog, cats] = await Promise.all([
//         getServiceCatalog(),
//         getServiceCategories(),
//       ]);

//       setServices(catalog);
//       setCategories(cats);
//       setLoading(false);
//     };

//     load();
//   }, []);

//   const filtered =
//     category === "all"
//       ? services
//       : services.filter((s) => s.category === category);

//   if (loading) return <p>Loading catalog...</p>;

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-semibold">Service Catalog</h1>
//       </div>

//       <CategoryFilter
//         categories={categories}
//         value={category}
//         onChange={setCategory}
//       />

//       <CatalogTable services={filtered} />
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { getServiceCatalog } from "../../../services/catalog.service";

export default function CatalogPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadCatalog = async () => {
    try {
      const data = await getServiceCatalog();
      setCategories(data);
    } catch (err) {
      console.error("Failed to load catalog", err);
    } finally {
      setLoading(false); // ✅ ALWAYS runs
    }
  };

  loadCatalog();
}, []);


  if (loading) return <p>Loading catalog...</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Service Catalog</h1>

      {categories.map((cat) => (
        <div key={cat.category.key} className="space-y-3">
          <h2 className="text-lg font-medium text-orange-600">
            {cat.category.name}
          </h2>

          <div className="bg-white border rounded shadow">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-3 text-left">Service</th>
                  <th className="p-3 text-left">Description</th>
                </tr>
              </thead>

              <tbody>
                {cat.services.map((s: any) => (
                  <tr key={s.id} className="border-b">
                    <td className="p-3 font-medium">{s.name}</td>
                    <td className="p-3 text-gray-600">
                      {s.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
