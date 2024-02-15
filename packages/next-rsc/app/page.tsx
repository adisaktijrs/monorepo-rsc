export default async function Home() {
  await new Promise((r) => setTimeout(r, 3000));

  return (
    <main className="border m-6 p-6">
      <p>lol</p>
    </main>
  );
}
