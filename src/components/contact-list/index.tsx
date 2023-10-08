import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import { getData } from "../../services";
import ScrollToTop from '../scrollToTop';

const ContactApp = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            let {results} = await getData();
            setData(results);
            setLoading(false);
        }
        fetchData()
    }, [])

    return (
        <React.Fragment>
            <main className='mb-auto min-h-screen dark:bg-slate-800'>
            <ScrollToTop/>
            <section className={"grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-10"}>
        {!loading && data.map((user, index) => (
          <UserCard data={user} key={index} />
        ))}
      </section>
      {/* {isFetching && 'fetching more data'}
                {data && data.map((user, index) =>
                    <UserCard key={index} data={user} />)} */}
            </main>

        </React.Fragment>
    )

}

export default ContactApp
