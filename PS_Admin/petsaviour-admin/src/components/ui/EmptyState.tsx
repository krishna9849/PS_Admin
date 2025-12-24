type Props = {
  title: string;
  description: string;
  action?: React.ReactNode;
};

export default function EmptyState({
  title,
  description,
  action,
}: Props) {
  return (
    <div className="text-center py-16">
      <h3 className="text-lg font-medium text-gray-700">
        {title}
      </h3>
      <p className="text-gray-500 mt-1">
        {description}
      </p>

      {action && (
        <div className="mt-4">{action}</div>
      )}
    </div>
  );
}