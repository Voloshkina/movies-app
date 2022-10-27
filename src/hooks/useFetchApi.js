import { useEffect, useState } from "react";
export default function useFetchApi(url) {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    async function f() {
      setIsLoading(true);
      try {
        await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setData(data.data.movies);
          });
      } catch (err) {
        setIsError(err.message);
      }
      setIsLoading(false);
    }
    f();
  }, []);

  return [isLoading, isError, data];
}
