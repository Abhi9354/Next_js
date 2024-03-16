import ExampleClient from "../../components/ExampleClient";


export default function Home() {
  console.log('where do i render');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>hello</h2>
      
      <ExampleClient/>
    </main>
  );
}
