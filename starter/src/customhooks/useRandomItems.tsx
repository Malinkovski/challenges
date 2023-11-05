import { useEffect, useState } from "react";

const useRandomItems = (url: string, limit: number) => {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const allItemsRes = await fetch(url);
      const allItems = await allItemsRes.json();
      setTotalCount(allItems.length);

      const randomNo = Math.floor(Math.random() * (totalCount - limit));

      const relatedItemsRes = await fetch(
        `${url}?_start=${randomNo}&_limit=${limit}`
      );
      const relatedItemsData = await relatedItemsRes.json();
      setItems(relatedItemsData);
    };
    fetchData();
  }, [totalCount, limit, url]);

  return items;
};

export default useRandomItems;