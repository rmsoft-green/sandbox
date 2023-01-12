const handleSignup = async (data: string) => {
  const response = await fetch(`/api/hello`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

export default function Home() {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const inputValue = event.currentTarget[0].value;
    try {
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
          <input type="text" placeholder="이름을 입력하세요" />
          <button>입력</button>
        </form>
      </div>
    </>
  );
}
