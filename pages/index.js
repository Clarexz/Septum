import React from 'react';
import Link from 'next/link';
import Layout from '../Components/Layouts/Layout';

export default function Home() {
  return (
    <div>
      <Layout />

      <h1 className="text-5xl font-bold text-center">Iniciar Sesión</h1>

      <Link href="/registrate">
        <p className="text-blue-700 underline ml-8 cursor-pointer w-72 text-lg">¿Aún no tienes cuenta? Da clíck aquí</p>
      </Link>
    </div>
  )
}
