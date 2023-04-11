import Character from "./character.types";
import PaginationType from "./pagination.types";

interface DataResult {
  info: PaginationType;
  results: Character[];
  error: string;
}

export default DataResult;
