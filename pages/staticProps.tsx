import * as React from 'react'
import { GetStaticPropsResult, GetStaticPropsContext } from 'next';


interface IStaticPropsPageProps {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const StaticPageProps: React.FunctionComponent<IStaticPropsPageProps> = (props) => {

    return <div>

        <h1>This is a test for static page props</h1>
        <p> Here is some test data that is loaded on build time and served as static pre-rendered page.</p>
        <p>Id:{props.id}</p>
        <p>UserId:{props.userId}</p>
        <p>Title:{props.title}</p>
        <p>Completed:{props.completed == true ? "Yes" : "No"}</p>
    </div>;
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<IStaticPropsPageProps>> {


    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json() as IStaticPropsPageProps;

    return { props: data };
}



export default StaticPageProps