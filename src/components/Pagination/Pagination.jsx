import { Container, Link, Pagination, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://hn.algolia.com/api/v1/search?";

const Paginations = () => {
  const [post, setPost] = useState([]);
  const [query, setQuery] = useState("react");
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    axios.get(BASE_URL + `query=${query}&page=${page - 1}`).then(({ data }) => {
      setPost(data.hits);
      setPageQty(data.nbPages);

      if (data.nbPages < page) {
        setPage(1);
      }
    });
  }, [query, page]);
  _;
  return (
    <div>
      <Container sx={{ marginTop: 5 }} maxWidth="md">
        <TextField
          fullWidth
          label="query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Stack spacing={2}>
          {!!pageQty && (
            <Pagination
              count={pageQty}
              page={page}
              showFirstButton
              showLastButton
              onChange={(_, num) => setPage(num)}
              sx={{ marginY: 3, marginX: "auto" }}
            />
          )}
          {post.map((post) => (
            <Link key={post.objectID} href={post.url}>
              {post.title || post.story_title}
            </Link>
          ))}
        </Stack>
      </Container>
    </div>
  );
};
export default Paginations;
