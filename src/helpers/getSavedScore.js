export default function getSavedScore() {
  const saved = localStorage.getItem('score');
  const initialValue = JSON.parse(saved);
  return initialValue || 0;
}
