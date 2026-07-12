export default function StatusBadge({ status }) {
  const cls = (status || '').replace(/\s/g, '');
  return <span className={`badge ${cls}`}>{status}</span>;
}
