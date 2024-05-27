import React from 'react'
import AddJob from './components/AddJob'
import Footer from './components/Footer'
import Header from './components/Header'
import Table from './components/Table'
import ListJob from './components/ListJob'

export default function App() {
  return (
    <div>
      <AddJob></AddJob>
      <Footer></Footer>
      <Header></Header>
      <Table></Table>
      <ListJob></ListJob>
    </div>
  )
}
