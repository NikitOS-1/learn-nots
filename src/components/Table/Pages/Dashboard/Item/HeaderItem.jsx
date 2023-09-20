import FilterAltIcon from "@mui/icons-material/FilterAlt";

const HeaderItem = () => {
  const style = {
    marginLeft: "10px",
    width: "17px",
    cursor: "pointer",
  };
  return (
    <>
      <tr>
        <th>
          <input type="checkbox" name="" id="" />
        </th>
        <th>
          <span>
            Scraping Date <FilterAltIcon style={style} />
          </span>
        </th>
        <th>Link to the post</th>
        <th>
          <span>
            Link to the Group
            <FilterAltIcon style={style} />
          </span>
        </th>
        <th>Profile link</th>
        <th>Message</th>
        <th>
          <span>
            AI status
            <FilterAltIcon style={style} />
          </span>
        </th>
        <th>
          <span>
            User iteraction
            <FilterAltIcon style={style} />
          </span>
        </th>
        <th>
          <span>
            Post Builder
            <FilterAltIcon style={style} />
          </span>
        </th>
        <th>
          <span>
            Post status
            <FilterAltIcon style={style} />
          </span>
        </th>
      </tr>
    </>
  );
};
export default HeaderItem;
