import { useQuery } from "@tanstack/react-query";

function Example() {
  const { isPending, error, data, isFetching, refetch, isFetched } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
    enabled: false, //默认不自动触发
  });

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        获取数据
      </button>

      {isFetched && data && (
        <div>
          <h1>{data.full_name}</h1>
          <p>{data.description}</p>
          <strong>👀 {data.subscribers_count}</strong>{" "}
          <strong>✨ {data.stargazers_count}</strong>{" "}
          <strong>🍴 {data.forks_count}</strong>
          <div>{isFetching ? "Updating..." : ""}</div>
        </div>
      )}
    </div>
  );
}

export default Example;
