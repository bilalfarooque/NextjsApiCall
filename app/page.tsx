
async function getQuote() {
  const resp = await fetch('https://api.quotable.io/random',{
    cache:"no-cache"// for browser to not cache the result and show different result
    //next: { revalidate: 10 } 10secs toupdate
    // fetch(https://..., { cache: 'force-cache' });

    // fetch(https://..., { cache: 'no-store' });
    
    // fetch(https://..., { next: { revalidate: false | 0 | number } } });

    
    // The default behavior is fetch(https://..., { cache: 'force-cache' }).


  })
  return resp.json(); //converts resp into json format
}

export default async function Home() {
  const quote = await getQuote();
  console.log("quote :",quote.content);
  
  
  return (
    <main>
      Hi, API called Succesfully
      
      <h1 className="mt-3 from-orange-300 font-bold">{quote.content}</h1>
    </main>

    
  )
}

//way 2 for useclient 
/*
export default function Home() {
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log("resp", resp);
        console.log("quote", resp.content);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }, []);

  return <h1>Hello world</h1>;
}
*/
