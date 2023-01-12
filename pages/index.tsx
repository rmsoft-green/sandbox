const handleSignup = async (data: string) => {
  const response = await fetch(`/api/hello`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

export default function Home() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const inputValue = event.currentTarget[0].value;
      handleSignup(inputValue);
    } catch (error) {
      console.log(error);
    }
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
