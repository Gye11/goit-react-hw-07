import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  return (
    <input
      className="input"
      type="text"
      placeholder="Search contacts..."
      onChange={(e) => dispatch(changeFilter(e.target.value))}
    />
  );
}
