export const fillMatrix = () => {
  return Array.from({ length: 10 }, (_, i) =>
    Array.from({ length: 10 }, (_, j) => (
      <div key={i * 10 + j} className="cell"></div>
    ))
  );
};
