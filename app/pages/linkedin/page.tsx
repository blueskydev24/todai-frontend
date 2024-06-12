'use client'
import React, {useState, useCallback, useEffect} from "react";
import axios from "axios";
import Card from '../../components/card/card'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE4MjU4NDU3LCJpYXQiOjE3MTgxNzIwNTcsImp0aSI6IjY4MmQ1N2Y1MDQ0NzQ1NjA4MDllYjRlY2U2MGE1ZTAwIiwidXNlcl9pZCI6NX0.ffmnw-YRgONsc1f4FwrWrBBbzrVAdK5ZCpUf5OdX4AE'
const apiUrl = 'https://todai.blueskythinkingtesting.com'

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});


export default function Linkedin() {
  const [postList, setPostList] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const response = await authAxios.get(`${apiUrl}/api/core/linkedin-posts/?interest=1,2,3`);
      const data = response.data.data;
      setPostList(data);
    }
    catch (err) {
      console.log(err);
    }
  }, [])

  useEffect(() => {
    //fetchData();
  }, [])
  
  
  return (
    <div className="container m-auto px-6 md:px-12 xl:px-6">
      <Card postList={postList} />
    </div>
  );
}
