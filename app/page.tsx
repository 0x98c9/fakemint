import { FakeDataGenerator } from "@/components/fake-data-generator"

interface HomeProps {
  isConfigOpen?: boolean;
}

export default function Home({ isConfigOpen }: HomeProps) {
  return <FakeDataGenerator isConfigOpen={isConfigOpen} />
}
