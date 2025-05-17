export default function Reject({ search }: { search: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1>Sorry "{search}" is not available yet ! </h1>
    </div>
  );
}
