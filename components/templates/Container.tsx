import Head from "../../node_modules/next/head";
import { useRouter } from "../../node_modules/next/router";
import {useState, useEffect} from 'react';

export default function Container(props){

    let [mounted, setMounted] = useState(false); 
    useEffect(() => setMounted(true), []);
    let {children, ...customMeta} = props; 
    const router = useRouter(); 
    const meta = {
        title: "Inflation analysis", 
        description: "A quick app to monitor inflation", 
        type: 'website',
        ...customMeta
    };

    return(
        <div className="bg-gray-50 dark:bg-gray-900">
        <Head>
          <title> {meta.title} </title>
          <meta name="robots" content="follow, index" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Inflation" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} /> {meta.date && (
          <meta property="article:published_time" content={meta.date} /> )}

        </Head>
        <main id="skip" className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"> {children}
        </main>
      </div>
    ) 










}