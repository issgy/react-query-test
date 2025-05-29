## 1、react query 有专门的开发调试工具

@tanstack/react-query-devtools
导入：  
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
默认情况下，当 process.env.NODE_ENV ==='production'时，React Query Devtools 不包含在打包结果中，因此不需要手动在生产构建期间将其排除。

将以下代码尽可能地放在 React 应用的顶部。它离页面的根元素越近，它工作得越好!
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
return (
<QueryClientProvider client={queryClient}>
<ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
);
}

配置项：
initialIsOpen：控制是否打开调试工具。默认为 true
