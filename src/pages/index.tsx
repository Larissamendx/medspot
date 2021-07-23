import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/authContext';
import Home1 from './Home1'


export default function Home() {
  const {signed} = useContext(AuthContext)
  const router = useRouter();
  
  if (signed) {
    router.replace('/HomeAuth');
  }

  return <Home1/>
}
