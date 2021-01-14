import * as React from 'react';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'


interface ITodosServerSidePageProps {
    todo: ITodo;
}

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const TodosServerSidePage: React.FunctionComponent<ITodosServerSidePageProps> = (props) => {
    const router = useRouter();

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }


    return <div>
        <h1>This is server side page loading</h1>

        <p>Change the id in url to get different Page (1-200), Data is loaded on every request. While in staticPaths it is saved inside json file</p>
        <p>Current todo task is :</p>
        <p>Id:{props.todo.id}</p>
        <p>UserId:{props.todo.userId}</p>
        <p>Title:{props.todo.title}</p>
        <p>Completed:{props.todo.completed == true ? "Yes" : "No"}</p>


    </div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // Fetch data from external API

    const pageId = context.params?.id;
    if (pageId) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${pageId}`)
        const data = await res.json();
        if (!data) {
            return { notFound: true }
        }
        return { props: { todo: data } as ITodosServerSidePageProps }
    }


    // Pass data to the page via props
    return {
        redirect: {
            destination: '/',
            permanent: false,
        }
    }
}


export default TodosServerSidePage