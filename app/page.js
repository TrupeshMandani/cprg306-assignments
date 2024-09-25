
import Link from 'next/link'; // Make sure to import Link from 'next/link'
import Page from "./week-2/page"

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">week 2</Link> 
    </div>
  );
}