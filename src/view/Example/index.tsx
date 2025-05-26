import { useQuery } from "@tanstack/react-query";

function Example() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
  });

  if (isPending) return <div>"Loading..."</div>;

  if (error) return <div>"An error has occurred: "{error.message}</div>;

  return (
    <div>
      <h1>{data.full_name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

export default Example;
