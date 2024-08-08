'use client';
import { useEffect, useState } from "react";
import init, { greet } from '../public/wasm'


export default function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        async function fetchData() {
            await init();
            console.log(greet('hi'));
            setMessage(greet('works!'));
            //const wasm = await import('../public/wasm');
            //setMessage(wasm.greet);
        }
        fetchData();
        },[]);
            return (
        <>
            <h1>{message}</h1>
      </>
  );
}
