import Link from 'next/link'
const Index = () => (
  <div>
    Hello World.{' '}
    <Link href="/about">
      <a>About click me</a>
    </Link>
  </div>
)
export default Index;
