import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const POST = [
  { id: "1", title: "post1" },
  { id: "2", title: "post2" },
];

const wait = (timer: number) => {
  return new Promise((resolve) => setTimeout(resolve, timer));
};

export const Test1 = () => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["test1"],
    queryFn: () => wait(1000).then(() => [...POST]), //react query不关心我们到底有没有发请求，只要我们返回的是promise就行。
    retry: 10, //请求失败，会重试10次，默认3次
  });

  const newPostMutation = useMutation({
    mutationFn: (title: string) =>
      wait(1000).then(() => POST.push({ id: crypto.randomUUID(), title })),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["test1"] });
    },
  });

  if (isLoading) return <div>loading...</div>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;

  if (!data) return <div>no data</div>;

  return (
    <div>
      {data.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("new post")}
      >
        新增
      </button>
    </div>
  );
};
