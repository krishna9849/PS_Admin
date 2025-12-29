type Props = {
  categories: any[];
  value: string;
  onChange: (v: string) => void;
};

export default function CategoryFilter({
  categories,
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="all">All Categories</option>
      {categories.map((c) => (
        <option key={c._id} value={c.slug}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
