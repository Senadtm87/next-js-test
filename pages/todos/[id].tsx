import * as React from 'react';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { useRouter } from 'next/router'

interface ITodosPageProps {
    todo: ITodo;    
}

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const TodosPage: React.FunctionComponent<ITodosPageProps> = (props) => {
    const router = useRouter();

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
      return <div>Loading...</div>
    }
  

    return <div>
        <h1>This is static paths with dynamic routes page</h1>

        <p>Change the id in url to get different Page (1-10), there are 200 todos in total, 
            and first 10 are prerendered,
             others are generated when first request appears and loading is shown until page is generated. (Try Ids above 10)</p>
        <p>Current todo task is :</p>
        <p>Id:{props.todo.id}</p>
        <p>UserId:{props.todo.userId}</p>
        <p>Title:{props.todo.title}</p>
        <p>Completed:{props.todo.completed == true ? "Yes" : "No"}</p>


    </div>;
}

export async function getStaticPaths() {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json() as ITodo[];
    const paths = todos.slice(0, 10).map(todo => ({ params: { id: todo.id.toString() } }));

    return {
        paths: paths,
        fallback: true // See the "fallback" section below
    };
}


export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<ITodosPageProps>> {
    if (context.params) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${context.params.id}`);
        const data = await response.json() as ITodo;

        return { props: { todo: data } as ITodosPageProps };
    }
    return { props: { todo: {} as ITodo } as ITodosPageProps };
}


export default TodosPage;