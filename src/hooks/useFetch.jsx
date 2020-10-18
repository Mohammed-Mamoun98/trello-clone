import React, { useState, useEffect } from "react";
import  Axios from 'axios'
import axiosCancel from 'axios-cancel';


export default function useFetch(url, method, deps) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, serError] = useState("");

  axiosCancel(Axios, {
    debug: false // default
  });

  const abort = async()=>{
    Axios.cancel(url)
  }

  const refetch  = ()=>{
    if(loading)
      abort()
    axiosFetch()
  }

  const axiosFetch = async()=>{
    setLoading(true)
     Axios({
      url,
      method,
      requestId : url
    }).then(res => {
      const {data} = res
      setLoading(false)
      setData(data)
    }).catch(err =>{
      if(Axios.isCancel(err))
        console.log('canceled');
    })
   
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const rawResponse = await fetch(url, {
        method,
      });
      const response = await rawResponse.json();
      setLoading(false);

      setData(response);
    } catch (error) {
      // setLoading(false);
      serError(error);
    }
  };

  useEffect(() => {
    if (loaded) axiosFetch();

    return () => {
    alert('new req')
    };
  }, []);

  React.useEffect(() => {
    setLoaded(true);
  }, []);
  return { data, loading, error, url , refetch };
}
