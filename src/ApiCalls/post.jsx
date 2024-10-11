import { useState, useEffect } from "react";
import { getPosts } from "../api";
import PostCard from "./PostCard";

const Post = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        getPosts().then((posts) => setData(posts));
    }, []);

    return (
        <>
            {data ? data.map((e) => <PostCard title={e.title} body={e.body}/>) : "no data"}
        </>
    );
};

export default Post;
