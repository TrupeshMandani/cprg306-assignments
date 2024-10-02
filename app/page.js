
import Link from 'next/link'; 
import Page from "./week-2/page"

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <li><Link href="/week-2">week 2</Link> </li>
      <li><Link href="/week-3">week 3</Link> </li>
    </div>
  );
}
