
  const wordFetch = fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')

  wordFetch.then(response => {
    return response.json()
    .then(json => {
      const obj = json.word
      const topWord = Object.keys(obj)[0];
      const topCount = Object.values(obj)[0];
      document.getElementById("word").innerHTML = `Top word: ${topWord} Count: ${topCount}`;
    });
  });
