export default function Home() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <h1>메인화면</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button>입력</button>
        </form>
      </div>
    </>
  );
}
