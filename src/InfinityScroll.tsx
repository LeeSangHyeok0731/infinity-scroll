import React, { useState, useEffect } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";

interface Item {
  id: number;
  content: string;
}

const InfiniteScroll: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const { ref, inView } = useInView();

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Item[]>(
        `https://api.example.com/items?page=${page}`
      );
      setItems((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [page]);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          style={{ padding: "20px", borderBottom: "1px solid #ccc" }}
        >
          {item.content}
        </div>
      ))}
      <div ref={ref} style={{ height: "20px" }} />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
